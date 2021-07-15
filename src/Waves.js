import { createDomNodeMixin } from './Utils';

export default class Waves {
  constructor() {
    this.waves = null;
    this.wave1 = null;
    this.wave2 = null;
    this.stone = null;
  }

  create() {
    this.waves = this.createDomNode(this.waves, 'div', 'waves');
    this.wave1 = this.createDomNode(this.wave1, 'div', 'wave1');
    this.wave2 = this.createDomNode(this.wave2, 'div', 'wave2');
    this.stone = this.createDomNode(this.stone, 'div', 'stone');
    this.waves.append(this.wave1);
    this.waves.append(this.stone);
    this.waves.append(this.wave2);
    return this.waves;
  }

  riseLevel() {
    this.wave1.style.top = `${
      parseInt(
        window.getComputedStyle(document.querySelector('.wave1')).top,
        10,
      )
      - window.screen.height * 0.1
    }px`;
    this.wave2.style.top = `${
      parseInt(
        window.getComputedStyle(document.querySelector('.wave2')).top,
        10,
      )
      - window.screen.height * 0.1
    }px`;
  }

  default() {
    this.wave1.style.top = `${99}%`;
    this.wave2.style.top = `${99}%`;
  }
}

Object.assign(Waves.prototype, createDomNodeMixin);
