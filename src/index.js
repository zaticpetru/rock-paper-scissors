const dialog = document.getElementById("rules-dialog");
const openButton = document.getElementById("open-rules-button");
const closeButton = document.getElementById("close-rules-button");

const scoreCounter = document.querySelector(".score-counter");

const playContainer = document.querySelector(".play-container");
const gameContainer = document.querySelector(".game-container");

const actionCircles = document.querySelectorAll(".action-circle");

const playAgainButton = document.querySelector(".play-again-button");

openButton.addEventListener("click", (event) => {
  dialog.showModal();
});

closeButton.addEventListener("click", (event) => {
  dialog.close();
});

function retrieveScore() {
  if (localStorage) {
    const savedScore = parseInt(localStorage.getItem("score"));
    return savedScore > 0 ? savedScore : 0;
  }
}

function saveScore() {
  if (localStorage) {
    localStorage.setItem("score", score);
  }
}

let score = retrieveScore();

actionCircles.forEach((actionCircle) => {
  actionCircle.addEventListener("click", (event) => {
    gameContainer.classList.add("opacity-0");
    playContainer.classList.remove("z-index-back");
    playContainer.classList.remove("opacity-0");

    const action = event.target.dataset.action;
  });
});

playAgainButton.addEventListener("click", (event) => {
  playContainer.classList.add("z-index-back");
  playContainer.classList.add("opacity-0");
  gameContainer.classList.remove("opacity-0");
});

scoreCounter.innerHTML = score;
