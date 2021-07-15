import { createDomNodeMixin } from './Utils';

export class Drop {
  constructor() {
    this.drop = null;
    this.space = null;
    this.span = null;
    this.start = 1;
    this.timeId = null;
    this.droplevel = 1;
    this.sealevel = null;
  }

  create(playMistake, setGameover, speed, expression, isBonusDrop) {
    if (isBonusDrop) {
      this.createDrop(expression, isBonusDrop);
      this.span.classList.add('span-bonus');
      this.drop.classList.add('drop-bonus');
      this.moveDrop(playMistake, setGameover, speed);
    } else {
      this.createDrop(expression, isBonusDrop);
      this.moveDrop(playMistake, setGameover, speed);
    }
  }

  moveDrop(playMistake, setGameover, speed) {
    this.timeId = setInterval(() => {
      this.sealevel = document.querySelector('.sea').getBoundingClientRect().top
        + pageYOffset;
      this.droplevel = this.drop.getBoundingClientRect().top
        + pageYOffset
        + this.drop.getBoundingClientRect().height;
      this.drop.style.top = `${this.start}vh`;
      this.start += 0.2;

      if (this.droplevel > this.sealevel) {
        this.drop.remove();
        clearInterval(this.timeId);
        playMistake();
        if (parseInt(document.querySelector('.sea').style.maxHeight, 10) > 30) {
          setGameover();
        }
      }
      if (this.start > 90) {
        this.drop.remove();
        clearInterval(this.timeId);
      }
    }, speed);
  }

  default() {
    document.querySelectorAll('.drop').forEach((item) => {
      clearInterval(this.timeId);
      item.remove();
    });
  }

  createDrop(expression, isBonusDrop) {
    const { num1, randomSymbol, num2 } = expression;
    this.drop = this.createDomNode(this.drop, 'div', 'drop');
    this.drop.style.left = `${Math.round(62 * Math.random())}vw`;
    this.span = document.createElement('span');
    this.span.innerHTML = this.createStringInsideDrop(num1, randomSymbol, num2);
    this.drop.setAttribute(
      'data-result',
      this.createSolutionDataResult(num1, randomSymbol, num2),
    );
    this.drop.setAttribute('data-bonus', isBonusDrop);
    this.drop.prepend(this.span);
    document.querySelector('.space').append(this.drop);
  }
}

Object.assign(Drop.prototype, createDomNodeMixin);
