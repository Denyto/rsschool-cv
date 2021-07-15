import { createDomNodeMixin } from './Utils';

export class Buttons {
  constructor() {
    this.buttons = null;
    this.buttonGame = null;
    this.buttonDemo = null;
  }

  create() {
    this.buttons = this.createDomNode(this.buttons, 'div', 'buttons');
    this.buttonGame = this.createDomNode(
      this.buttonGame,
      'button',
      'button',
      'button-startstop',
    );
    this.buttons.append(this.buttonGame);
    this.buttonDemo = this.createDomNode(
      this.buttonDemo,
      'button',
      'button',
      'button-demo',
    );
    this.buttons.append(this.buttonDemo);
    document.querySelector('.section-calc').append(this.buttons);

    this.buttonGame.addEventListener('click', () => {
      this.buttonDemo.classList.remove('button__demo_active');
      this.toggleStartStop();
    });
    this.buttonDemo.addEventListener('click', () => {
      this.buttonGame.classList.remove('button__startstop_active');
      this.toggleDemo();
    });
  }

  toggleStartStop() {
    this.buttonGame.classList.toggle('button__startstop_active');
    this.buttonDemo.classList.toggle('button__demo_hidden');
  }

  toggleDemo() {
    this.buttonDemo.classList.toggle('button__demo_active');
  }

  default() {
    this.buttonDemo.classList.remove('button__demo_active');
    this.buttonGame.classList.remove('button__startstop_active');
    this.buttonDemo.classList.remove('button__demo_hidden');
  }
}

Object.assign(Buttons.prototype, createDomNodeMixin);
