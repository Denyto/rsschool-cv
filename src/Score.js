export class Score {
  constructor() {
    this.number = 0;
    this.countCorrectAnswer = 0;
    this.score = null;
    this.additionalPoints = 0;
  }

  create() {
    this.score = document.createElement('div');
    this.score.classList.add('score');
    this.score.innerHTML = `Score: ${this.number}`;
    document.querySelector('.section-calc').append(this.score);
  }

  default() {
    this.number = 0;
    this.countCorrectAnswer = 0;
    this.additionalPoints = 0;
    this.score.innerHTML = `Score: ${this.number}`;
  }

  add() {
    this.score.innerHTML = `Score: ${(this.number
      += 10 + this.additionalPoints)}`;
    this.countCorrectAnswer += 1;
    this.additionalPoints += 1;
  }

  addBonus() {
    this.score.innerHTML = `Score: ${(this.number += 50)}`;
    this.countCorrectAnswer += 1;
  }

  minus() {
    this.score.innerHTML = `Score: ${(this.number -= 10)}`;
  }

  show() {
    return this.number;
  }

  showCountCorrectAnswer() {
    return this.countCorrectAnswer;
  }

  resetAdditionalPoints() {
    this.additionalPoints = 0;
  }
}
