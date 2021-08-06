import { createDomNodeMixin } from './Utils';

export class Wrapper {
  constructor() {
    this.wrapper = null;
  }

  create() {
    this.wrapper = this.createDomNode(this.wrapper, 'div', 'wrapper');
    return this.wrapper;
  }
}

Object.assign(Wrapper.prototype, createDomNodeMixin);
