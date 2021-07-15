import { createDomNodeMixin } from './Utils';

export class Modal {
  constructor(score, correctAnswer, counterDrop) {
    this.overlay = null;
    this.modal = null;
    this.btn = null;
    this.scoreResult = null;
    this.correctResult = null;
    this.dropsResult = null;
    this.score = score;
    this.correctAnswer = correctAnswer;
    this.counterDrop = counterDrop;
  }

  create() {
    this.modal = this.createDomNode(this.modal, 'div', 'modal');
    this.overlay = this.createDomNode(this.overlay, 'div', 'overlay');
    this.overlay.style.zIndex = 10;
    this.scoreResult = this.createDomNode(this.scoreResult, 'div');
    this.correctResult = this.createDomNode(this.correctResult, 'div');
    this.dropsResult = this.createDomNode(this.dropsResult, 'div');
    this.btn = this.createDomNode(this.btn, 'button', 'btn__modal');
    this.btn.innerHTML = 'OK';
    this.scoreResult.innerHTML = `Your Score: ${this.score}`;
    this.correctResult.innerHTML = `Correct Answers: ${this.correctAnswer}`;
    this.dropsResult.innerHTML = `Drops: ${this.counterDrop}`;
    this.modal.append(this.scoreResult);
    this.modal.append(this.correctResult);
    this.modal.append(this.dropsResult);
    this.modal.append(this.btn);
    this.overlay.append(this.modal);
    document.body.append(this.overlay);

    this.btn.addEventListener('click', () => {
      this.overlay.remove();
    });
  }
}

Object.assign(Modal.prototype, createDomNodeMixin);
