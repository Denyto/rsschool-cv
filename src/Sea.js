import { createDomNodeMixin } from "./Utils";

export class Sea {
    constructor() {
        this.sea = null;        
    }

    create() {
        this.sea = this.createDomNode(this.sea, 'div', 'sea');        
        this.sea.style.maxHeight = 10 + '%';
        return this.sea;
    }

    riseLevel() {
        this.sea.style.maxHeight = parseInt(window.getComputedStyle(document.querySelector('.sea')).maxHeight) + 7 + '%';
    }

    default () {
        this.sea.style.maxHeight = 10 + '%';
    }

}

Object.assign(Sea.prototype, createDomNodeMixin);
