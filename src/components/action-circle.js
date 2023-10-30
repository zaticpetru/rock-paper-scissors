import { htmlTemplate } from "../utils/html-helpers.js"

const template = /*html*/`
  <div>
    <img src="./images/icon-paper.svg" alt="paper-image" />
  </div>
`

export default class ActionCircle extends HTMLDivElement {
  constructor(action) {
    super()
    this.action = null;
    if(action) {
      this.action = action;
      this.dataset.action = action;
    }
    this.classList.add("action-circle")
  }

  connectedCallback() {
    this.action = this.dataset.action

    if (this.action == null) {
      console.error("data-action is required for action-circle");
      return;
    }

    this.render()
  }
  
  render() {
    this.appendChild(htmlTemplate(template))
    const img = this.querySelector("img");
    img.src = `./images/icon-${this.action}.svg`
    img.alt = `${this.action}-image`
    this.classList.add(this.action)
  }
}