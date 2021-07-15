import { createDomNodeMixin } from './Utils';

export class FullScreen {
  constructor() {
    this.buttonFullscreen = null;
  }

  create() {
    this.buttonFullscreen = this.createDomNode(
      this.buttonFullscreen,
      'div',
      'fullscreen-button',
    );
    document.querySelector('.buttons').append(this.buttonFullscreen);

    this.buttonFullscreen.addEventListener(
      'click',
      (event) => {
        if (!event.target.classList.contains('fullscreen-button')) return;
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          document.documentElement.requestFullscreen();
        }
      },
      false,
    );
  }
}

Object.assign(FullScreen.prototype, createDomNodeMixin);
