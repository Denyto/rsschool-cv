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
    this.toggleStart = true;
    this.toggDemo = true;
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
    if (this.toggleStart) {
      this.calculatorApp.default();
      this.scoreApp.default();
      this.toggleStart = false;
      this.counterdrop = 1;
      this.timeId = setInterval(() => {
        if (this.counterdrop % 5 === 0) {
          this.createDrobs().create(
            () => {
              this.addMistake();
            },
            () => {
              this.setGameover();
            },
            100,
            this.createExpression(['×', '÷']),
            true,
          );
          this.counterdrop += 1;
        } else {
          this.counterdrop += 1;
          this.createDrobs().create(
            () => {
              this.addMistake();
            },
            () => {
              this.setGameover();
              stopMelody();
            },
            this.setSpeedDrop(),
            this.createExpression(['+', '-']),
            '',
          );
        }
      }, this.tick);
    } else {
      stopMelody();
      this.stopGame();
    }
  }

  setDemoMode(stopMelody) {
    if (this.toggDemo) {
      this.toggDemo = false;
      this.timeIdDemo = setInterval(() => {
        if (this.counterdrop % 5 === 0) {
          this.createDrobs().create(
            () => {
              this.addMistake();
            },
            () => {
              this.setGameover();
            },
            100,
            this.createExpression(['×', '÷']),
            true,
          );
          this.counterdrop += 1;
        } else {
          this.counterdrop += 1;
          this.createDrobs().create(
            () => {
              this.addMistake();
            },
            () => {
              this.setGameover();
              stopMelody();
            },
            this.setSpeedDrop(),
            this.createExpression(['+', '-']),
            '',
          );
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
    if (!this.toggleStart) {
      this.calculatorApp.calculation(
        e,
        () => this.scoreApp.add(),
        () => this.scoreApp.addBonus(),
      );
    }
  }

  calculationDemo() {
    this.calculatorApp.calculationDemo(
      () => this.scoreApp.add(),
      () => this.scoreApp.addBonus(),
    );
  }

  setSpeedDrop() {
    if (this.scoreApp.show() > 100) {
      this.speedTick -= 0.3;
      return this.speedTick;
    }
    if (this.scoreApp.show() > 50) {
      this.speedTick -= 0.1;
      return this.speedTick;
    }
    return this.speedTick;
  }

  stopGame() {
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
    this.toggleStart = true;
    this.toggDemo = true;
    this.speedTick = 40;
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
      new Modal(
        this.scoreApp.show(),
        this.scoreApp.showCountCorrectAnswer(),
        this.counterdrop - 1,
      ).create();
      this.scoreApp.default();
      this.toggleStart = true;
      this.toggDemo = true;
    }, 100);
  }

  // eslint-disable-next-line class-methods-use-this
  createExpression(array) {
    const exp = new Expression(array).create();
    return exp;
  }
}

Object.assign(App.prototype, createDomNodeMixin);
