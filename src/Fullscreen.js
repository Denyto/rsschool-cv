import { createDomNodeMixin } from "./Utils";

export class Fullscreen {
    constructor() {
        this.buttonFullscreen = null;
    }

    create() {
        this.buttonFullscreen = this.createDomNode(this.buttonFullscreen, 'div', 'fullscreen-button');   
        document.querySelector('.buttons').append(this.buttonFullscreen);

        this.buttonFullscreen.addEventListener('click', function (event) {           
            if (!event.target.classList.contains('fullscreen-button')) return;
            console.log('fullscreen-button');
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                document.documentElement.requestFullscreen();
            }
        }, false);
       
    }

  

}

Object.assign(Fullscreen.prototype, createDomNodeMixin);