const clientType = "player";

let pid = localStorage.getItem("pid");
if (!pid) {
  pid = (window.crypto && window.crypto.randomUUID) ? window.crypto.randomUUID() : (Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2));
  localStorage.setItem("pid", pid);
}

const username = prompt("Your Name:");
if (username) {
  start();
} else {
  location.reload();
}

function start() {
  const socket = io({ query: { clientType, username, pid } });

  socket.on("connect", () => {
    console.log("socket connected");
  });

  socket.on("state", (data) => {
    console.log("state", data);
    document.querySelector("main").dataset.status = data.status;

    const messageEl = document.querySelector(".message");
    if (data.status === "waiting") {
      messageEl.innerHTML = "Waiting for Quiz start...";
    } else if (data.status === "over") {
      messageEl.innerHTML = "Quiz Over";
    } else {
      messageEl.innerHTML = "";
    }

    document.querySelector(".buttons").dataset.done = false;
    document.querySelector(".buttons").innerHTML = data.currentQuestion?.responses.map((resp, i) => `<button data-index="${i}"><b>${i}</b></button>`).join("") || "<div class=\"loader\"><b>.</b><b>.</b><b>.</b></div>";
    Array.from(document.querySelectorAll(".buttons button")).forEach(button => {
      button.addEventListener("click", () => {
        if (document.querySelector(".buttons").dataset.done !== "true") {
          socket.emit("answer", { index: parseInt(button.dataset.index) });
          button.dataset.clicked = true;
          document.querySelector(".buttons").dataset.done = true;
        }
      });
    });
  });
};

window.addEventListener("keydown", (e) => {
  const num = Number(e.key);
  if (Number.isInteger(num)) {
    const buttons = document.querySelectorAll(".buttons:not([data-done='true']) button");
    if (buttons[num]) {
      buttons[num].click();
    }
  }
});
