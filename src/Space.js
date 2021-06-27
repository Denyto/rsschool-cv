import { createDomNodeMixin } from "./Utils";

export class Space {
    constructor() {
        this.space = null;
    }

    create() {
        this.space = this.createDomNode(this.space, 'div', 'space');
        return this.space;
    }
}

Object.assign(Space.prototype, createDomNodeMixin);