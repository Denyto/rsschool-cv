export class Score {
    constructor() {        
        this.number = 0;
        this.score = null;
    }

    create () {        
        this.score = document.createElement('div');
        this.score.classList.add('score');
        this.score.innerHTML = `Score: ${this.number}`
        document.querySelector('.section-calc').append(this.score);
    }

    default () {
        this.number = 0;
        this.score.innerHTML = `Score: ${this.number}`
    }

    add () {
        this.score.innerHTML = `Score: ${this.number += 10}`
    }

    minus () {
        this.score.innerHTML = `Score: ${this.number -= 10}`
    }
}
0