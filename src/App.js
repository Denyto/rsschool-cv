import { createDomNodeMixin } from './Utils';
import { Raindrops } from './Raindrops';
import { Wrapper } from './Wrapper';
import { Score } from './Score';
import { Calculator } from './Calc';
import { Buttons } from './Buttons';
import { Drop } from './Drop';
import { Sea } from './Sea';
import { Modal } from './Modal';
import { Sectiongame } from './Sectiongame';
import { Sectioncalc } from './Sectioncalc';
import { Space } from './Space';
import Waves from './Waves';
import { Expression } from './Exp';
import { FullScreen } from './Fullscreen';

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
    this.fullScreen = new FullScreen();
    this.buttonsApp = new Buttons();
    this.dropApp = new Drop();
    this.seaApp = new Sea();
    this.isToggleStart = true;
    this.isToggleDemo = true;
    this.tick = 3000;
    this.waves = new Waves();
    this.speedTick = 40;
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
    this.fullScreen.create();
    document.querySelector('.section-game').prepend(this.waves.create());
  }

  startGame(stopMelody) {
    clearInterval(this.timeIdDemo);
    this.dropApp.default();
    this.speedTick = 40;
    if (this.isToggleStart) {
      this.calculatorApp.default();
      this.scoreApp.default();
      this.isToggleStart = false;
      this.counterdrop = 1;
      this.timeId = setInterval(() => {
        this.selectDrop(stopMelody);
      }, this.tick);
    } else {
      stopMelody();
      this.setDefaultGame();
    }
  }

  setDemoMode(stopMelody) {
    if (this.isToggleDemo) {
      this.isToggleDemo = false;
      this.timeIdDemo = setInterval(() => {
        this.selectDrop(stopMelody);
        this.calculationDemo();
      }, this.tick);
    } else {
      this.setDefaultGame();
    }
  }

  selectDrop(stopMelody) {
    if (this.counterdrop % 5 === 0) {
      this.createDrobs().create(
        () => {
          this.addMistake();
        },
        () => {
          this.setGameover();
        },
        100,
        this.createExpression(['×', '÷'], this.counterdrop),
        true,
      );
    } else {
      this.createDrobs().create(
        () => {
          this.addMistake();
        },
        () => {
          this.setGameover();
          stopMelody();
        },
        this.setSpeedDrop(),
        this.createExpression(['+', '-'], this.counterdrop),
        '',
      );
    }
    this.counterdrop += 1;
  }

  createDrobs() {
    this.dropApp = new Drop();
    return this.dropApp;
  }

  calculationGame(e) {
    if (!this.isToggleStart) {
      this.calculatorApp.calculate(
        () => this.scoreApp.add(),
        () => this.scoreApp.addBonus(),
        e,
        () => this.scoreApp.resetAdditionalPoints(),
      );
    }
  }

  calculationDemo() {
    this.calculatorApp.calculate(
      () => this.scoreApp.add(),
      () => this.scoreApp.addBonus(),
    );
  }

  setSpeedDrop() {
    const score = this.scoreApp.show();
    if (score <= 50) return this.speedTick;
    this.speedTick -= score > 100 ? 0.3 : 0.1;
    return this.speedTick;
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
      this.setDefaultGame();
    }, 100);
  }

  setDefaultGame() {
    new Modal(
      this.scoreApp.show(),
      this.scoreApp.showCountCorrectAnswer(),
      this.counterdrop - 1,
    ).create();
    clearInterval(this.timeId);
    clearInterval(this.timeIdDemo);
    this.buttonsApp.default();
    this.calculatorApp.default();
    this.scoreApp.default();
    this.seaApp.default();
    this.waves.default();
    this.dropApp.default();
    this.isToggleStart = true;
    this.isToggleDemo = true;
    this.speedTick = 40;
    this.counterdrop = 1;
  }

  // eslint-disable-next-line class-methods-use-this
  createExpression(array, number) {
    const exp = new Expression(array, number).create();
    return exp;
  }
}

Object.assign(App.prototype, createDomNodeMixin);
