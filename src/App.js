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
        this.spaceApp = new Space();
        this.scoreApp = new Score();
        this.calculatorApp = new Calculator();
        this.buttonsApp = new Buttons();
        this.dropApp = new Drop();
        this.seaApp = new Sea();
        this.togglestart = true;
        this.tick = 3000;
        this.waves = new Waves();
        this.speedtick = 40;
        this.toggledemo = true;
        this.counterdrop = 1;        
    }

    init() {
        this.raindropsApp.prepend(this.wrapper);
        this.wrapper.prepend(this.sectionCalc);
        this.wrapper.prepend(this.sectionGame);
        this.sectionGame.prepend(this.spaceApp.create());
        this.sectionGame.append(this.seaApp.create());
        document.body.prepend(this.raindropsApp);
        this.scoreApp.create();
        this.calculatorApp.create();
        this.buttonsApp.create();
        document.querySelector('.section-game').prepend(this.waves.create());
    }

    start() {
        if (this.togglestart) {
            this.calculatorApp.default();
            this.togglestart = false;
            this.timeId = setInterval(() => {
                if (this.counterdrop % 5 === 0) {
                    this.createDrobs().create(() => { this.mistake() }, () => { this.gameover() }, 100, this.expressionBonus(), true);
                    this.counterdrop++;
                } else {
                    this.counterdrop++;
                    this.createDrobs().create(() => { this.mistake() }, () => { this.gameover() }, this.speed(), this.expression(), '');
                }

            }, this.tick);
        } else {
            this.stop();
        }
    }

    demo() {
        if (this.toggledemo) {
            console.log('demostart');
            this.start();
            this.toggledemo = false;
        } else {
            console.log('demostop');
            this.stop();
            this.toggledemo = true;
        }
    }


    createDrobs() {
        this.dropApp = new Drop();
        return this.dropApp;
    }

    calc(e) {
        if (!this.togglestart) {
            this.calculatorApp.calculation(e, () => this.scoreApp.add(), () => this.scoreApp.addBonus());
        }
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
        this.togglestart = true;
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
            this.togglestart = true;
        }, 100);
    }

    expression() {
        let exp = new Expression().create();
        return exp;
    }

    expressionBonus() {
        let expbonus = new Expression().createBonus();
        return expbonus;
    }

    processing(str) {
        if (str.includes('+')) {
            return +str.split('+')[0] + +str.split('+')[1];
        }
        if (str.includes('-')) {
            return +str.split('-')[0] - +str.split('-')[1];
        }
        if (str.includes('×')) {
            return +str.split('×')[0] * +str.split('×')[1];
        }
        if(str.includes('÷')) {
            return +str.split('÷')[0] / +str.split('÷')[1];
        }
    }

}

Object.assign(App.prototype, createDomNodeMixin);