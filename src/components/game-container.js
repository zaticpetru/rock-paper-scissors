import { htmlTemplate } from "../utils/html-template.js";

const innerHTML = /*html*/`
  <div is="action-circle" data-action="paper"></div>
  <div is="action-circle" data-action="scissors"></div>
  <div is="action-circle" data-action="rock"></div>
`;

export default class GameContainer extends HTMLDivElement {
  constructor() {
    super();
    this.classList.add("game-container", "p-1", "grow-1")
  }
  
  connectedCallback() {
    this.appendChild(htmlTemplate(innerHTML));
  }
}