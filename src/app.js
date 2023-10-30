import PlayContainer from "./components/play-container.js";
import GameContainer from "./components/game-container.js";
import ActionCircle from "./components/action-circle.js";
import { hideElement, showElement } from "./utils/html-helpers.js";


class MainApp extends HTMLElement {
  constructor() {
    super()

    this.gameContainer = new GameContainer({
      actionClick: (action) => this.actionClick(action)
    })

    this.playContainer = new PlayContainer({
      playAgain: () => this.playAgainClick()
    })
    this.appendChild(this.playContainer)
    this.appendChild(this.gameContainer)
  }

  actionClick(action) {
    hideElement(this.gameContainer);
    showElement(this.playContainer)
    setTimeout(() => this.playContainer.renderPlayerAction(action), 1000);
  }

  playAgainClick() {
    this.playContainer.classList.remove("with-results");
    hideElement(this.playContainer);
    showElement(this.gameContainer)
  }
}


window.customElements.define('action-circle', ActionCircle, { extends: 'div' })
window.customElements.define('play-container', PlayContainer, { extends: 'div' })
window.customElements.define('game-container', GameContainer, { extends: 'div' })
window.customElements.define('main-app', MainApp, { extends: 'main' })
