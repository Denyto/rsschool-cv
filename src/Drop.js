import { Expression } from "./Exp";
import { createDomNodeMixin } from "./Utils";


export class Drop {

    constructor() {        
        this.expression = new Expression;
        this.drop = null;
        this.space = null;
        this.span = null;        
        this.start = 1;
        this.timeId;
        this.droplevel = 1;
        this.sealevel;
        

    }

    create(callback, stop, speed, bonus) {
        if (bonus) {
            this.drop = this.createDomNode(this.drop, 'div', 'drop', 'dropbonus');
            this.drop.style.left = Math.round(62 * Math.random()) + 'vw';
            this.span = document.createElement('span');
            this.span.innerHTML = this.expression.create(bonus);
            this.drop.prepend(this.span);
            document.querySelector('.space').append(this.drop);
            this.move(callback, stop, 100);
        } else {
            this.drop = this.createDomNode(this.drop, 'div', 'drop');
            this.drop.style.left = Math.round(62 * Math.random()) + 'vw';
            this.span = document.createElement('span');
            this.span.innerHTML = this.expression.create();
            this.drop.prepend(this.span);
            document.querySelector('.space').append(this.drop);
            this.move(callback, stop, speed);
        }

    }

    move(callback, stop, speed = 10) {

        this.timeId = setInterval(() => {            
            this.sealevel = document.querySelector('.sea').getBoundingClientRect().top + pageYOffset;
            this.droplevel = this.drop.getBoundingClientRect().top + pageYOffset + this.drop.getBoundingClientRect().height;
            this.drop.style.top = this.start + 'vh';
            this.start += 0.2;           
            
            if (this.droplevel > this.sealevel) {                
                this.drop.remove();
                clearInterval(this.timeId);
                callback();
                if (parseInt(document.querySelector('.sea').style.maxHeight) > 30) {
                stop();
                }
            }
            if (this.start > 90) {                
                this.drop.remove();
                clearInterval(this.timeId);
            }
        }, speed);
        speed += 10;
        console.log(speed);
    }

    default() {
        document.querySelectorAll('.drop').forEach(item => {
            clearInterval(this.timeId);
            item.remove();
        });
    }



}

Object.assign(Drop.prototype, createDomNodeMixin);