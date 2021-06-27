import { createDomNodeMixin } from "./Utils";
import { Raindrops } from "./Raindrops";
import { Wrapper } from "./Wrapper";
import { Score } from "./Score";
import { Calculator } from "./Calc";
import { Buttons } from "./Buttons";
import { Drop } from "./Drop";
import { Sea } from "./Sea";
import { Modal } from "./Modal";
import { Sectiongame } from "./Sectiongame";
import { Sectioncalc } from "./Sectioncalc";
import { Space } from "./Space";
import { Waves } from "./Waves";
import { Expression } from "./Exp";


export class App {
    constructor() {
        this.timeId;
        this.raindropsApp = new Raindrops().create();
        this.wrapper = new Wrapper().create();
        this.sectionGame = new Sectiongame().create();
        this.sectionCalc = new Sectioncalc().create();
        this.space = new Space().create();
        this.scoreApp = new Score();
        this.calculatorApp = new Calculator();
        this.buttonsApp = new Buttons();
        this.dropApp = new Drop();
        this.seaApp = new Sea();
        this.toggle = true;
        this.tick = 3000;
        this.waves = new Waves();
        this.speedtick = 50;
        this.bonus = false;
    }

    init() {
        this.raindropsApp.prepend(this.wrapper);
        this.wrapper.prepend(this.sectionCalc);
        this.wrapper.prepend(this.sectionGame);
        this.sectionGame.prepend(this.space);
        this.sectionGame.append(this.seaApp.create());
        document.body.prepend(this.raindropsApp);
        this.scoreApp.create();
        this.calculatorApp.create();
        this.buttonsApp.create();
        document.querySelector('.section-game').prepend(this.waves.create());
    }

    start() {
        if (this.toggle) {
            this.calculatorApp.default();
            this.toggle = false;


            this.timeId = setInterval(() => {              
                    this.createDrobs().create(() => { this.mistake() }, () => { this.gameover() }, this.speed(), this.expression());
            }, this.tick);



        } else {
            this.stop();
        }
    }

    createDrobs() {
        this.dropApp = new Drop();
        return this.dropApp;
    }

    result() {
        this.scoreApp.add();
        this.calculatorApp.default();
    }

    calcDefault() {
        this.calculatorApp.default();
    }

    speed() {
        if (this.scoreApp.show() > 100) {
            this.speedtick -= 0.3;
            return this.speedtick;
        }
        if (this.scoreApp.show() > 50) {
            this.speedtick -= 0.1;
            return this.speedtick;
        }
        return this.speedtick;
    }

    stop() {
        new Modal(this.scoreApp.show()).create();
        clearInterval(this.timeId);
        this.calculatorApp.default();
        document.querySelector('.melody').pause();
        this.scoreApp.default();
        this.seaApp.default();
        this.dropApp.default();
        this.toggle = true;        
    }

    mistake() {
        document.querySelector('.mistake').play();
        this.seaApp.riseLevel();
        this.waves.riseLevel();
        this.scoreApp.minus();
        this.calculatorApp.default();
    }

    gameover() {
        document.querySelector('.gameover').play();
        setTimeout(() => {
            clearInterval(this.timeId);
            this.calculatorApp.default();
            this.seaApp.default();
            this.waves.default();
            this.dropApp.default();
            this.buttonsApp.default();
            new Modal(this.scoreApp.show()).create();
            this.scoreApp.default();
            this.toggle = true;
        }, 100);
    }

    expression() {
        console.log();
        return new Expression().create();
    }

}

Object.assign(App.prototype, createDomNodeMixin);