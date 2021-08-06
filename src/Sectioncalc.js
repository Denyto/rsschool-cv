import { createDomNodeMixin } from './Utils';

export class Sectioncalc {
  constructor() {
    this.sectionCalc = null;
  }

  create() {
    this.sectionCalc = this.createDomNode(
      this.sectionCalc,
      'section',
      'section-calc',
    );
    return this.sectionCalc;
  }
}
Object.assign(Sectioncalc.prototype, createDomNodeMixin);
