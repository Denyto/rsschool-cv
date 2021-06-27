import { createDomNodeMixin } from "./Utils";

export class Sea {
    constructor() {
        this.sea = null;        
    }

    create() {
        this.sea = this.createDomNode(this.sea, 'div', 'sea');        
        this.sea.style.maxHeight = 8 + '%';
        return this.sea;
    }

    riseLevel() {
        this.sea.style.maxHeight = parseInt(window.getComputedStyle(document.querySelector('.sea')).maxHeight) + 10 + '%';
   
    }

    default () {
        this.sea.style.maxHeight = 8 + '%';
    }  

}

Object.assign(Sea.prototype, createDomNodeMixin);
