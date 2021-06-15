import { createDomNodeMixin } from "./Utils";
import { Score } from "./Score";
import { Calculator } from "./Calc";
import { Buttons } from "./Buttons";
import { Drop } from "./Drop";
import { Sea } from "./Sea";

export class App {
    constructor() {
        this.timeId;
        this.raindrops = null;
        this.wrapper = null;
        this.sectionGame = null;
        this.sectionCalc = null;
        this.space = null;
        this.scoreApp = new Score;
        this.calculatorApp = new Calculator;
        this.buttonsApp = new Buttons;
        this.dropApp = new Drop();
        this.seaApp = new Sea;
        this.toggle = true;
    }

    init() {
        this.raindrops = this.createDomNode(this.raindrops, 'div', 'raindrops');
        this.wrapper = this.createDomNode(this.wrapper, 'div', 'wrapper');
        this.sectionGame = this.createDomNode(this.sectionGame, 'section', 'section-game');
        this.sectionCalc = this.createDomNode(this.sectionCalc, 'section', 'section-calc');
        this.raindrops.prepend(this.wrapper);
        this.wrapper.prepend(this.sectionCalc);
        this.wrapper.prepend(this.sectionGame);
        this.space = this.createDomNode(this.space, 'div', 'space');
        this.sectionGame.prepend(this.space);
        this.sectionGame.append(this.seaApp.create());
        document.body.prepend(this.raindrops);
        this.scoreApp.create();
        this.calculatorApp.create();
        this.buttonsApp.create();
    }

    start() {
        if (this.toggle) {
            this.toggle = false;
            this.timeId = setInterval(() => {
                this.createDrobs().create(() => {
                  
                    document.querySelector('.mistake').play();
                    this.seaApp.riseLevel();
                    this.scoreApp.minus();  
                    
                });
                
            }, 3000);         

        } else {
            clearInterval(this.timeId);
            this.calculatorApp.default();
            this.scoreApp.default();
            this.seaApp.default();

            this.dropApp.default();
            this.toggle = true;
        }
    }

    createDrobs() {
        this.dropApp = new Drop();
        return this.dropApp;
    }

result () {
   
    this.scoreApp.add();
    this.calculatorApp.default();
}


}

Object.assign(App.prototype, createDomNodeMixin);