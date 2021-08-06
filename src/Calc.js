/* eslint-disable no-nested-ternary */
import { createDomNodeMixin } from './Utils';

export class Calculator {
  constructor() {
    this.calculator = null;
    this.screen = null;
    this.calc = null;
    this.input = null;
  }

  create() {
    this.calculator = this.createDomNode(this.calculator, 'div', 'calculator');
    this.screen = this.createDomNode(this.screen, 'div', 'screen');
    this.calc = this.createDomNode(this.calc, 'div', 'calc');
    this.calc.append(this.createButtons());
    this.input = this.createDomNode(this.input, 'input', 'screen-input');
    this.input.id = 'display';
    this.input.setAttribute('value', '');
    this.input.type = 'text';
    this.input.disabled = 'disabled';
    this.appendCalcElements();
  }

  // eslint-disable-next-line class-methods-use-this
  createButtons() {
    const fragment = document.createDocumentFragment();
    const btnLayout = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      'DEL',
      'CLR',
      'Enter',
    ];

    btnLayout.forEach((key) => {
      const btnElement = document.createElement('button');
      if (+key || key === '0') {
        btnElement.classList.add('btn', 'number');
      } else {
        btnElement.classList.add('btn', 'operator');
      }
      switch (key) {
        case 'CLR' || 'DEL':
          btnElement.innerHTML = key;
          break;
        case 'Enter':
          btnElement.classList.add('enter');
          btnElement.innerHTML = key;
          break;
        default:
          btnElement.textContent = key;
          break;
      }
      fragment.append(btnElement);
    });
    return fragment;
  }

  appendCalcElements() {
    this.calculator.append(this.screen);
    this.calculator.append(this.calc);
    this.screen.append(this.input);
    document.querySelector('.section-calc').append(this.calculator);
  }

  default() {
    this.input.value = '';
  }

  calculate(scoreAdd, scoreAddBonus, e, resetAdditionalPoints) {
    if (!e) {
      const allScreenDrobsDemo = [];
      document.querySelectorAll('.drop').forEach((item) => {
        allScreenDrobsDemo.push(+item.getAttribute('data-result'));
      });
      const i = Math.round(Math.random() * (allScreenDrobsDemo.length - 1));
      if (!allScreenDrobsDemo[i] && allScreenDrobsDemo[i] !== 0) {
        this.input.value = '';
      } else {
        setTimeout(() => {
          this.input.value = allScreenDrobsDemo[i];
        }, 500);
      }

      setTimeout(() => {
        if (
          document.querySelector(
            `.drop[data-result="${allScreenDrobsDemo[i]}"]`,
          )
        ) {
          document.querySelector(
            `.drop[data-result="${allScreenDrobsDemo[i]}"]`,
          ).style.border = '3px solid yellow';
          setTimeout(() => {
            if (
              document
                .querySelector(`.drop[data-result="${allScreenDrobsDemo[i]}"]`)
                .getAttribute('data-bonus')
            ) {
              setTimeout(() => {
                document
                  .querySelectorAll('.drop')
                  .forEach((item) => item.remove());
                document.getElementById('bonus').play();
                scoreAddBonus();
              }, 2000);
            } else {
              document
                .querySelector(`.drop[data-result="${allScreenDrobsDemo[i]}"]`)
                .remove();
              document.getElementById('ok').play();
              this.input.value = '';
              scoreAdd();
            }
          }, 1000);
        }
      }, 2000);
    } else {
      let key;
      if (e.type === 'keydown') {
        key = (e.keyCode > 47 && e.keyCode < 58)
          || (e.keyCode > 95 && e.keyCode < 106)
          ? e.key
          : e.code === 'Enter'
            ? e.code
            : e.code === 'Backspace'
              ? 'DEL'
              : e.code === 'Space'
                ? 'Enter'
                : e.code === 'Delete'
                  ? 'CLR'
                  : e.code === 'NumpadEnter'
                    ? 'Enter'
                    : '';
      }
      if (e.type === 'click') {
        key = e.target.innerText;
      }
      switch (key) {
        case 'DEL':
          if (this.input.value.length === 1) {
            this.input.value = '';
          } else {
            this.input.value = this.input.value.slice(
              0,
              this.input.value.length - 1,
            );
          }
          break;
        case 'CLR':
          this.input.value = '';
          break;
        case 'Enter':
          if (this.input.value !== '') {
            const userResult = +this.input.value;
            const allScreenDrobs = document.querySelectorAll('.drop');
            const rightResultsDrops = [];
            const rightResultsBonusDrops = [];
            allScreenDrobs.forEach((item) => {
              if (item.getAttribute('data-bonus')) {
                rightResultsBonusDrops.push(+item.getAttribute('data-result'));
              } else {
                rightResultsDrops.push(+item.getAttribute('data-result'));
              }
            });
            if (rightResultsBonusDrops.includes(userResult)) {
              document
                .querySelectorAll('.drop')
                .forEach((item) => setTimeout(() => item.remove(), 100));
              document.getElementById('bonus').play();
              scoreAddBonus();
              this.default();
            } else if (rightResultsDrops.includes(userResult)) {
              setTimeout(
                () => document
                  .querySelector(`.drop[data-result="${userResult}"]`)
                  .remove(),
                100,
              );
              document.getElementById('ok').play();
              scoreAdd();
              this.default();
            } else {
              this.default();
              document.getElementById('mistake').play();
              resetAdditionalPoints();
            }
          }
          break;
        default:
          if (this.input.value === '' || this.input.value === '0') {
            this.input.value = key;
          } else {
            this.input.value += key;
          }
          break;
      }
    }
  }
}

Object.assign(Calculator.prototype, createDomNodeMixin);
