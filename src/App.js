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
import { Fullscreen } from "./Fullscreen";


export class App {
    constructor() {
        this.timeId = null;
        this.timeIdDemo = null;
        this.raindropsApp = new Raindrops().create();
        this.wrapper = new Wrapper().create();
        this.sectionGame = new Sectiongame().create();
        this.sectionCalc = new Sectioncalc().create();
        this.spaceApp = new Space();
        this.scoreApp = new Score();
        this.calculatorApp = new Calculator();
        this.fullscreen = new Fullscreen();
        this.buttonsApp = new Buttons();
        this.dropApp = new Drop();
        this.seaApp = new Sea();
        this.togglestart = true;
        this.toggdemo = true;
        this.tick = 3000;
        this.waves = new Waves();
        this.speedtick = 40;
        this.counterdrop = 1;
    }

    initComponents() {
        this.raindropsApp.prepend(this.wrapper);
        this.wrapper.prepend(this.sectionCalc);
        this.wrapper.prepend(this.sectionGame);
        this.sectionGame.prepend(this.spaceApp.create());
        this.sectionGame.append(this.seaApp.create());
        document.body.prepend(this.raindropsApp);
        this.scoreApp.create();
        this.calculatorApp.create();        
        this.buttonsApp.create();
        this.fullscreen.create();
        document.querySelector('.section-game').prepend(this.waves.create());
    }

    startGame() {
        clearInterval(this.timeIdDemo);
        this.dropApp.default();                      
        this.speedtick = 40;
        this.counterdrop = 1;     
        if (this.togglestart) {
            this.calculatorApp.default();
            this.scoreApp.default();
            this.togglestart = false;
            this.timeId = setInterval(() => {               
                if (this.counterdrop % 5 === 0) {
                    this.createDrobs().create(() => { this.addMistake() }, () => { this.setGameover() }, 100, this.createExpressionBonus(), true);
                    this.counterdrop++;
                } else {
                    this.counterdrop++;
                    this.createDrobs().create(() => { this.addMistake() }, () => { this.setGameover() }, this.setSpeedDrop(), this.createExpression(), '');
                }

            }, this.tick);
        } else {
            this.stopGame();
        }
    }

    setDemoMode() {
        if (this.toggdemo) {
            this.toggdemo = false;
            this.timeIdDemo = setInterval(() => {

                if (this.counterdrop % 5 === 0) {
                    this.createDrobs().create(() => { this.addMistake() }, () => { this.setGameover() }, 100, this.createExpressionBonus(), true);
                    this.counterdrop++;
                } else {
                    this.counterdrop++;
                    this.createDrobs().create(() => { this.addMistake() }, () => { this.setGameover() }, this.setSpeedDrop(), this.createExpression(), '');
                }
                this.calculationDemo();
            }, this.tick);
        } else {
            this.stopGame();

        }
    }

    createDrobs() {
        this.dropApp = new Drop();
        return this.dropApp;
    }

    calculationGame(e) {
        if (!this.togglestart) {
            this.calculatorApp.calculation(e, () => this.scoreApp.add(), () => this.scoreApp.addBonus());
        }
    }

    calculationDemo() {
        this.calculatorApp.calculationDemo(() => this.scoreApp.add(), () => this.scoreApp.addBonus());
    }

    setSpeedDrop() {
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

    stopGame() {        
        new Modal(this.scoreApp.show()).create();
        clearInterval(this.timeId);
        clearInterval(this.timeIdDemo);
        this.calculatorApp.default();
        this.scoreApp.default();
        this.seaApp.default();
        this.waves.default();
        this.dropApp.default();
        this.togglestart = true;
        this.toggdemo = true;
        this.speedtick = 40;
        this.counterdrop = 1;
    }

    addMistake() {
        document.getElementById('mistake').play();
        this.seaApp.riseLevel();
        this.waves.riseLevel();
        this.scoreApp.minus();
        this.calculatorApp.default();
    }

    setGameover() {
        document.getElementById('gameover').play();
        setTimeout(() => {
            clearInterval(this.timeId);
            clearInterval(this.timeIdDemo);
            this.calculatorApp.default();
            this.seaApp.default();
            this.waves.default();
            this.dropApp.default();
            this.buttonsApp.default();
            new Modal(this.scoreApp.show()).create();
            this.scoreApp.default();
            this.togglestart = true;
            this.toggdemo = true;
        }, 100);
    }

    createExpression() {
        let exp = new Expression().create();
        return exp;
    }

    createExpressionBonus() {
        let expbonus = new Expression().createBonus();
        return expbonus;
    }


}

Object.assign(App.prototype, createDomNodeMixin);