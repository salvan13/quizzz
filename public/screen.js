const clientType = "screen";

const socket = io({ query: { clientType } });

document.querySelector(".actions .start").addEventListener("click", () => {
  socket.emit("start");
});

socket.on("connect", () => {
  console.log("socket connected");
});

socket.on("state", (data) => {
  data = JSON.parse(data);
  console.log("state", data);
  document.querySelector("main").dataset.status = data.status;

  document.querySelector(".info").innerHTML = data?.info || "";
  document.querySelector(".question").innerHTML = `<div>${data.currentQuestion?.question || ""}</div>`;
  document.querySelector(".score").innerHTML = Number.isFinite(data.currentQuestion?.score) ? `punti: ${data.currentQuestion?.score}` : "";
  document.querySelector(".image").innerHTML = data.currentQuestion?.image ? `<img src="${data.currentQuestion?.image}">` : "";
  document.querySelector(".responses").innerHTML = data.currentQuestion?.responses.map((resp, i) => `<div><b>${i}</b><span>${resp}</span></div>`).join("") || "";

  updateTimer(data);
});

function updateTimer(data) {
  document.querySelector(".timer").innerHTML = Number.isFinite(data.timer) ? `⏰ ${data.timer}` : "<div class=\"loader\"><b>.</b><b>.</b><b>.</b></div>";
  document.querySelector(".question").dataset.ok = Number.isFinite(data.timer);
  document.querySelector(".image").dataset.ok = Number.isFinite(data.timer);
  document.querySelector(".responses").dataset.ok = Number.isFinite(data.timer);
}

socket.on("timer", (data) => {
  data = JSON.parse(data);
  console.log("timer", data);

  updateTimer(data);
});

socket.on("players", (data) => {
  data = JSON.parse(data);
  console.log("players", data);
  document.querySelector(".players").innerHTML = data.players.map((player, i) => `<div><b>${i + 1})</b>${Number.isFinite(player.score) ? `<b>${player.score}pti</b>` : ""}<b>${player.username}</b></div>`).join("");
});
