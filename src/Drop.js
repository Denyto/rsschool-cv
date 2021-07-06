import { createDomNodeMixin } from "./Utils";

export class Drop {

    constructor() {
        this.drop = null;
        this.space = null;
        this.span = null;
        this.start = 1;
        this.timeId;
        this.droplevel = 1;
        this.sealevel;
    }

    create(mistake, gameover, speed, expression, isbonusdrop) {
        if (isbonusdrop) {
            this.drop = this.createDomNode(this.drop, 'div', 'drop', 'drop-bonus');
            this.drop.style.left = Math.round(62 * Math.random()) + 'vw';
            this.span = document.createElement('span');
            this.span.classList.add('span-bonus');
            this.span.innerHTML = expression;
            this.drop.setAttribute('data-result', this.processing(expression));
            this.drop.setAttribute('data-bonus', isbonusdrop);
            this.drop.prepend(this.span);
            document.querySelector('.space').append(this.drop);
            this.move(mistake, gameover, speed);
        } else {
            this.drop = this.createDomNode(this.drop, 'div', 'drop');
            this.drop.style.left = Math.round(62 * Math.random()) + 'vw';
            this.span = document.createElement('span');
            this.span.innerHTML = expression;
            this.drop.setAttribute('data-result', this.processing(expression));
            this.drop.setAttribute('data-bonus', isbonusdrop);
            this.drop.prepend(this.span);
            document.querySelector('.space').append(this.drop);
            this.move(mistake, gameover, speed);
        }
    }

    move(mistake, gameover, speed) {

        this.timeId = setInterval(() => {
            this.sealevel = document.querySelector('.sea').getBoundingClientRect().top + pageYOffset;
            this.droplevel = this.drop.getBoundingClientRect().top + pageYOffset + this.drop.getBoundingClientRect().height;
            this.drop.style.top = this.start + 'vh';
            this.start += 0.2;

            if (this.droplevel > this.sealevel) {
                this.drop.remove();
                clearInterval(this.timeId);
                mistake();
                if (parseInt(document.querySelector('.sea').style.maxHeight) > 30) {
                    gameover();
                }
            }
            if (this.start > 90) {
                this.drop.remove();
                clearInterval(this.timeId);
            }
        }, speed);

    }

    default() {
        document.querySelectorAll('.drop').forEach(item => {
            clearInterval(this.timeId);
            item.remove();
        });
    }
    

}

Object.assign(Drop.prototype, createDomNodeMixin);