import { createDomNodeMixin } from "./Utils";

export class Sectiongame {
    constructor() {
        this.sectionGame = null;
    }

    create() {
        this.sectionGame = this.createDomNode(this.sectionGame, 'section', 'section-game');
        return this.sectionGame;
    }
}

Object.assign(Sectiongame.prototype, createDomNodeMixin);