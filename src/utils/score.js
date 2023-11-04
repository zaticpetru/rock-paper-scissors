class Score {
  constructor() {
    this.scoreCounter = document.querySelector(".score-counter");
    this.value = 0;
    this.retrieveScore();
  }

  saveScore() {
    if (localStorage) {
      localStorage.setItem("score", this.value);
    }
    this.scoreCounter.innerHTML = this.value;
  }

  retrieveScore() {
    if (localStorage) {
      const savedScore = parseInt(localStorage.getItem("score"));
      this.value = savedScore > 0 ? savedScore : 0;
      this.scoreCounter.innerHTML = this.value;
    }
  }
}

const score = new Score();

export default score;
