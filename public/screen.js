const clientType = "screen";

const socket = io({ query: { clientType } });

document.querySelector(".actions .start").addEventListener("click", () => {
  socket.emit("start");
});

socket.on("connect", () => {
  console.log("socket connected");
});

socket.on("state", (data) => {
  console.log("state", data);
  document.querySelector("main").dataset.status = data.status;

  if(data?.info?.length > 0) {
    document.querySelector(".info").innerHTML = `<div>${data.info.map(i => `<div>${i}</div>`).join("")}</div>`;
  } else {
    document.querySelector(".info").innerHTML = "";
  }


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
  console.log("timer", data);

  updateTimer(data);
});

socket.on("players", (data) => {
  console.log("players", data);
  document.querySelector(".players").innerHTML = data.players.map((player, i) =>
    `<div class="player-box">
      <b class="nr">${String(i + 1).padStart(2, "0")}.</b>
      ${Number.isFinite(player.score) ? `<b class="pti">${String(player.score).padStart(3, "0")}</b>` : ""}
      <b>${player.username}</b>
      <span class="online">${player.connected ? `🟢` : `🔴`}</span>
     </div>`
  ).join("");
});

document.querySelector(".players").addEventListener("click", e => {
  if(document.querySelector("main").dataset.status === "over") {
    e.target.closest(".player-box").classList.add("show");
  }
});