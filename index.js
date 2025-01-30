import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const DEMO = Boolean(process.env.DEMO);
DEMO && console.log("DEMO settings active");

const questions = (await import(DEMO ? "./questions_demo.js" : "./questions.js")).questions || [];

console.log("Questions:", questions.length);
console.log("Max Score:", questions.reduce((total, question) => {
  total += (question.score || 1);
  return total;
}, 0));
console.log("Total Time:", Math.ceil(questions.reduce((total, question) => {
  total += (question.time || 10);
  return total;
}, 0) / 60), "minutes");

const port = 3000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

app.use(express.static('public'));

let players = [];

const state = {
  status: "waiting",
  currentQuestionIndex: -1,
  currentQuestion: null,
  timer: null,
  info: null,
};

io.on("connection", (socket) => {
  const clientType = socket.handshake.query?.clientType;
  const username = socket.handshake.query?.username?.substring(0, 10);
  const pid = socket.handshake.query?.pid;

  console.log("client connected", clientType, username, pid);

  socket.on("disconnect", () => {
    console.log("client disconnected", clientType, username, pid);
    const p = players.find(p => p.pid === pid);
    if (p) {
      p.connected = false;
    }
  });

  if (clientType === "player" && pid && username) {
    let player = players.find(p => p.pid === pid);
    if (!player) {
      player = { pid, username: username, answers: [], score: null, connected: true };
      players.push(player);
    }
    if (state.status === "waiting") {
      player.username = username;
    }
    player.connected = true;
    io.in("screen").emit("players", JSON.stringify({
      players: players
    }));
    socket.on("answer", (data) => {
      if (state.currentQuestion && Number.isFinite(data?.index)) {
        player.answers[state.currentQuestionIndex] = data.index;
        console.log("answer", player.username, data.index);
      }
    });
    socket.emit("state", JSON.stringify(state));
  } else if (clientType === "screen") {
    socket.join("screen");
    socket.on("start", () => {
      start();
    });
    socket.emit("players", JSON.stringify({
      players: players
    }));
    socket.emit("state", JSON.stringify(state));
  }
});

httpServer.listen(port, () => {
  console.log(`Quizz app listening on port ${port}`);
});

const sleep = (t = 1) => new Promise((res) => setTimeout(res, t * 1000));

const broadcast = () => io.emit("state", JSON.stringify(state));

const broadcastTimer = () => io.emit("timer", JSON.stringify({ timer: state.timer }));

const start = async () => {
  state.status = "started";
  broadcast();
  while (state.status === "started") {
    await nextQuestion();
  }
}

const getConnectedPlayers = () => players.filter(p => p.connected);

const nextQuestion = async () => {
  await sleep(DEMO ? 1 : 3);
  state.currentQuestion = null;
  state.timer = null;
  state.info = null;
  broadcast();
  if (questions[state.currentQuestionIndex + 1]) {
    state.currentQuestionIndex++;
    state.currentQuestion = structuredClone(questions[state.currentQuestionIndex]);
    delete state.currentQuestion.correct;
    state.timer = DEMO ? 4 : (state.currentQuestion.time || 10);
    broadcast();
    await sleep(1);
    while (state.timer > 0) {
      const players = getConnectedPlayers();
      const answers = players.filter(p => Number.isFinite(p.answers[state.currentQuestionIndex])).length;
      if (answers === players.length) {
        break;
      }
      state.timer--;
      broadcastTimer();
      await sleep(1);
    }
    const players = getConnectedPlayers();
    const correctAnswers = players.filter(p => p.answers[state.currentQuestionIndex] === questions[state.currentQuestionIndex].correct).length;
    state.info = `Risposte corrette: ${correctAnswers}/${players.length} ${(correctAnswers > players.length / 2) ? '👍' : '👎'}`;
    state.currentQuestion = null;
    state.timer = null;
    broadcast();
    await sleep(1);
  } else {
    state.status = "over";
    broadcast();
    players = players.map(player => getPlayerWithScore(player)).sort((p0, p1) => {
      if (p0.score > p1.score) {
        return -1;
      }
      if (p0.score < p1.score) {
        return 1;
      }
      return 0;
    });
    console.log(players);
    io.in("screen").emit("players", JSON.stringify({
      players: players
    }));
  }
};

function getPlayerWithScore(player) {
  let score = 0;

  for (let q = 0; q < questions.length; q++) {
    const question = questions[q];
    if (player.answers[q] === question.correct) {
      score += question.score || 1;
    }
  }

  player.score = score;
  return player;
}
