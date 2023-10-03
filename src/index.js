const dialog = document.getElementById("rules-dialog");
const openButton = document.getElementById("open-rules-button");
const closeButton = document.getElementById("close-rules-button");

const scoreCounter = document.querySelector(".score-counter");

const playContainer = document.querySelector(".play-container");
const gameContainer = document.querySelector(".game-container");

const actionCircles = document.querySelectorAll(".action-circle");

const playAgainButton = document.querySelector(".play-again-button");

const resultsParagraph = document.querySelector("#results");

let moveHouse;
let movePlayer;

// left : right
// left beats right
let gameRules = {
  scissors: "paper",
  paper: "rock",
  rock: "scissors",
};

openButton.addEventListener("click", (event) => {
  dialog.showModal();
});

closeButton.addEventListener("click", (event) => {
  dialog.close();
});

function retrieveScore() {
  if (localStorage) {
    const savedScore = parseInt(localStorage.getItem("score"));
    scoreCounter.innerHTML = savedScore > 0 ? savedScore : 0;
    return savedScore > 0 ? savedScore : 0;
  }
}

function saveScore() {
  if (localStorage) {
    localStorage.setItem("score", score);
  }
  scoreCounter.innerHTML = score;
}

function createNode(innerHTML) {
  const placeholder = document.createElement("div");
  placeholder.insertAdjacentHTML("afterbegin", innerHTML);
  return placeholder.firstElementChild;
}

function renderPlayerAction(action) {
  const innerHTML = `
  <div class="move player action-circle ${action}" data-action="${action}">
    <div>
      <img src="/images/icon-${action}.svg" />
    </div>
  </div>
  `;
  movePlayer = action;

  playContainer.append(createNode(innerHTML));
  setTimeout(() => renderHouseAction(), 1000);
}

function renderHouseAction() {
  const actionList = ["paper", "rock", "scissors"];
  const action = actionList[Math.floor(Math.random() * actionList.length)];
  const innerHTML = `
  <div class="move house action-circle ${action}" data-action="${action}">
    <div>
      <img src="/images/icon-${action}.svg" />
    </div>
  </div>
  `;
  moveHouse = action;

  playContainer.append(createNode(innerHTML));
  setTimeout(() => renderResults(), 500);
}

function renderResults() {
  console.log(resultsParagraph);

  if (moveHouse == movePlayer) {
    resultsParagraph.innerHTML = "DRAW!";
  }
  if (gameRules[movePlayer] == moveHouse) {
    resultsParagraph.innerHTML = "YOU WIN!";
    score++;
  }
  if (gameRules[moveHouse] == movePlayer) {
    resultsParagraph.innerHTML = "YOU LOSE!";
    score--;
  }
  saveScore();
}

let score = retrieveScore();

actionCircles.forEach((actionCircle) => {
  actionCircle.addEventListener("click", (event) => {
    gameContainer.classList.add("opacity-0");
    playContainer.classList.remove("z-index-back");
    playContainer.classList.remove("opacity-0");

    const action_circle = event.target.closest(".action-circle");
    console.log(action_circle.dataset.action);

    setTimeout(() => renderPlayerAction(action_circle.dataset.action), 1000);
  });
});

playAgainButton.addEventListener("click", (event) => {
  console.log("play again");
  playContainer.classList.add("z-index-back");
  playContainer.classList.add("opacity-0");
  gameContainer.classList.remove("opacity-0");

  playContainer
    .querySelectorAll(".move.action-circle")
    .forEach((node) => node.remove());
  resultsParagraph.innerHTML = "";
});
