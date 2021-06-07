import { Raindrops } from "./Raindrops";

export class Score extends Raindrops {
    constructor(number = 0) {
        super();
        this.number = number;
        this.score = null;
    }

    initScore () {
        this.score = document.createElement('div');
        this.score.classList.add('score');
        this.score.innerHTML = `Score: ${this.number}`
        document.querySelector('.section2').append(this.score);
    }
}