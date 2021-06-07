import { Raindrops } from "./Raindrops";

export class Buttons extends Raindrops {
    constructor() {
        super();
        this.buttons = null;
        this.button1 = null;
        this.button2 = null;
    }

    initButtons() {
        this.buttons = this.createDomNode(this.buttons, 'div', 'buttons'); 
        this.button1 = this.createDomNode(this.button1, "button", "button", "button_1");
        this.buttons.append(this.button1);
        this.button2 = this.createDomNode(this.button2, "button", "button", "button_2");
        this.buttons.append(this.button2);
        document.querySelector('.section2').append(this.buttons);

            this.button1.addEventListener('click', () => {
            this.button2.classList.remove('button_demo_active');
            this.toggleStartStop();
        });
        this.button2.addEventListener('click', () => {
            this.button1.classList.remove('button_active');
            this.toggleDemo();
        });
    }

    toggleStartStop() {
        this.button1.classList.toggle('button_active');
        this.button2.classList.toggle('button_demo_hidden');
    }

    toggleDemo() {
        this.button2.classList.toggle('button_demo_active');
    }
}