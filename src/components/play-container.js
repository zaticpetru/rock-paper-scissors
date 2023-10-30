import { gameRules } from "../utils/game-rules.js";
import { hideElement, htmlTemplate } from "../utils/html-helpers.js";
import score from "../utils/score.js";
import ActionCircle from "./action-circle.js";

const innerHTML = /*html*/ `
  <p class="text player">YOU PICKED</p>
  <p class="text house">THE HOUSE PICKED</p>
  <div class="move player m-2 p-2"></div>
  <div class="move house m-2 p-2"></div>
  <div class="results opacity-0 display-none flex direction-column align-items-center">
    <p id="results">TEXT</p>
    <button class="play-again-button p-1 m-y-1 p-x-3">PLAY AGAIN</button>
  </div>
`;

export default class PlayContainer extends HTMLDivElement {
  constructor({ playAgain }) {
    super();

    this.classList.add("play-container", "opacity-0", "display-none");

    this.appendChild(htmlTemplate(innerHTML));

    this.resultsContainer = this.querySelector(".results");
    this.resultsParagraph = this.querySelector("#results");
    this.playAgainButton = this.querySelector(".play-again-button");

    this.moveHouse = null;
    this.moveHouse = null;

    this.playAgainButton.addEventListener("click", () => {
      this.handlePlayAgainClick();
      playAgain();
    });
  }

  renderPlayerAction(action) {
    this.movePlayer = action;
    const acrionCircle = new ActionCircle(action);
    acrionCircle.classList.add("move", "player");

    this.append(acrionCircle);
    setTimeout(() => this.renderHouseAction(), 1000);
  }

  renderHouseAction() {
    // todo: export computer choiche functionality.
    const actionList = ["paper", "rock", "scissors"];
    const action = actionList[Math.floor(Math.random() * actionList.length)];

    this.moveHouse = action;
    const acrionCircle = new ActionCircle(action);
    acrionCircle.classList.add("move", "house");

    this.append(acrionCircle);
    setTimeout(() => this.renderResults(), 500);
  }

  renderResults() {
    if (this.moveHouse == this.movePlayer) {
      this.resultsParagraph.innerHTML = "DRAW!";
    }
    if (gameRules[this.movePlayer] == this.moveHouse) {
      this.resultsParagraph.innerHTML = "YOU WIN!";
      score.value++;
    }
    if (gameRules[this.moveHouse] == this.movePlayer) {
      this.resultsParagraph.innerHTML = "YOU LOSE";
      score.value--;
    }

    this.resultsContainer.classList.remove("display-none");
    this.classList.add("with-results");
    setTimeout(() => {
      this.resultsContainer.classList.remove("opacity-0");
    }, 500);
    score.saveScore();
  }

  handlePlayAgainClick() {
    this.moveHouse = null;
    this.movePlayer = null;

    this.querySelectorAll(".move.action-circle").forEach((node) =>
      node.remove()
    );

    this.resultsParagraph.innerHTML = "";
    hideElement(this.resultsContainer);
    this.classList.remove("with-results");
  }
}
