import { Raindrops } from "./Raindrops";

export class Drop extends Raindrops {
    constructor(expression, id) {
        super();
        this.id = id;
        this.expression = expression;
        this.drop = null;
        this.space = null;
        this.span = null;
        this.topSea = 0;
        this.start = 0;
        this.result = 0;
        this.timeId = 0;
        this.zIndex = 0;
    }

    initDrop() {
        this.drop = this.createDomNode(this.drop, 'div', 'drop');
        this.drop.setAttribute('id', this.id);
        this.drop.style.left = Math.round(62 * Math.random()) + 'vw';
        this.span = document.createElement('span');
        this.span.innerHTML = this.expression;
        this.drop.prepend(this.span);
        document.querySelector('.space').append(this.drop);        
        this.run();
    }

    move() {        
        let bottomDrop = this.drop.getBoundingClientRect().top + pageYOffset + this.drop.getBoundingClientRect().height;
        this.topSea = document.querySelector('.sea').getBoundingClientRect().top + pageYOffset;
        
        this.drop.style.top = this.start + 'vh';
        this.start += 0.2;

        if (bottomDrop > this.topSea) {
            document.querySelector('.score').innerHTML = `Score: ${this.result - 1}`
            this.drop.remove();
            clearInterval(this.timeId, 100);
            console.log('ok');
            document.querySelector('.sea').style.maxHeight = parseInt(window.getComputedStyle(document.querySelector('.sea')).maxHeight) + 5 + '%';
        }
    }

    run() {
        this.timeId = setInterval(() => {     
            this.move();
        }, 100);
    }

    stop() {

    }

}