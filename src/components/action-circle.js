import { htmlTemplate } from "../utils/html-template.js"

const template = /*html*/`
  <div>
    <img src="./images/icon-paper.svg" alt="paper-image" />
  </div>
`

export class ActionCircle extends HTMLDivElement {
  constructor() {
    super()
    this.action = null;
    this.classList.add("action-circle")
  }

  connectedCallback() {
    this.action = this.dataset.action

    if (this.action == null) {
      console.error("data-action is required for action-circle");
      return;
    }

    this.appendChild(htmlTemplate(template))
    const img = this.querySelector("img");
    img.src = `./images/icon-${this.action}.svg`
    img.alt = `${this.action}-image`
    this.classList.add(this.action)
  }
}