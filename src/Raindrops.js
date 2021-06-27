import { createDomNodeMixin } from "./Utils";

export class Raindrops {
    constructor() {
        this.raindrops = null;       
    }

    create() {        
        this.raindrops = this.createDomNode(this.raindrops, 'div', 'raindrops');
        return this.raindrops;
    }  
}

Object.assign(Raindrops.prototype, createDomNodeMixin);