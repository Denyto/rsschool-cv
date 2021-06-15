import { createDomNodeMixin } from "./Utils";


export class Drop {

    constructor() {
        this.expression = `${Math.round(Math.random() * 100)}`;
        this.drop = null;
        this.space = null;
        this.span = null;        
        this.start = 1;
        this.timeId;
        this.droplevel = 1;
        this.sealevel;

    }

    create(callback) {
        this.drop = this.createDomNode(this.drop, 'div', 'drop');
        this.drop.style.left = Math.round(62 * Math.random()) + 'vw';
        this.span = document.createElement('span');
        this.span.innerHTML = this.expression;
        this.drop.prepend(this.span);
        document.querySelector('.space').append(this.drop);
        this.move(callback);
    }

    move(callback) {

        this.timeId = setInterval(() => {            
            this.sealevel = document.querySelector('.sea').getBoundingClientRect().top + pageYOffset;
            this.droplevel = this.drop.getBoundingClientRect().top + pageYOffset + this.drop.getBoundingClientRect().height;

            this.drop.style.top = this.start + 'vh';
            this.start += 0.2;

            
            if (this.droplevel > this.sealevel) {
                this.drop.remove();
                clearInterval(this.timeId);
                callback();

            }
            if (this.start > 90) {
                
                this.drop.remove();
                clearInterval(this.timeId);
            }
        }, 20);
    }

    default() {
        document.querySelectorAll('.drop').forEach(item => {
            clearInterval(this.timeId);
            item.remove();
        });
    }



}

Object.assign(Drop.prototype, createDomNodeMixin);