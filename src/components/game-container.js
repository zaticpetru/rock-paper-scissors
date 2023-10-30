import ActionCircle from "./action-circle.js";

export default class GameContainer extends HTMLDivElement {
  constructor({ actionClick }) {
    super();
    this.classList.add("game-container", "p-1", "grow-1");

    this.actionList = ["paper", "scissors", "rock"];

    this.actionList.forEach((action) => {
      const actionCircle = new ActionCircle(action);

      actionCircle.addEventListener("click", (event) => {
        const actionCircle = event.target.closest(".action-circle");
        actionClick(actionCircle.dataset.action);
      });

      this.appendChild(actionCircle);
    });
  }
}
