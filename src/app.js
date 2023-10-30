import { htmlTemplate } from "./utils/html-template.js";
import PlayContainer from "./components/play-container.js";
import GameContainer from "./components/game-container.js";
import { ActionCircle } from "./components/action-circle.js";

const innerHTML = /*html*/`
  <div is="play-container"></div>
  <div is="game-container"></div>
`;

class MainApp extends HTMLElement {
  connectedCallback() {
    this.appendChild(htmlTemplate(innerHTML));
  }
}

window.customElements.define('action-circle', ActionCircle, {extends: 'div'})
window.customElements.define('play-container', PlayContainer, {extends: 'div'})
window.customElements.define('game-container', GameContainer, {extends: 'div'})
window.customElements.define('main-app', MainApp, { extends: 'main' })
