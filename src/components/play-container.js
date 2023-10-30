import { htmlTemplate } from "../utils/html-template.js";

const innerHTML = /*html*/`
  <p class="text player">YOU PICKED</p>
  <p class="text house">THE HOUSE PICKED</p>
  <div class="move player m-2 p-2"></div>
  <div class="move house m-2 p-2"></div>
  <div class="results flex direction-column align-items-center">
    <p id="results">TEXT</p>
    <button class="play-again-button p-1 m-y-1 p-x-3">PLAY AGAIN</button>
  </div>
`;

export default class PlayContainer extends HTMLDivElement {
  constructor() {
    super();
    this.classList.add("play-container", "opacity-0", "display-none")
  }

  connectedCallback() {
    this.appendChild(htmlTemplate(innerHTML));
  }
}