import { createDomNodeMixin } from "./Utils";

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
        this.input.id = "display";
        this.input.setAttribute("value", "");
        this.input.type = "text";
        this.input.disabled = "disabled";
        this.appendCalcElements();
    }

    createButtons() {
        const fragment = document.createDocumentFragment();
        const btnLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "DEL", "CLR",
            "Enter"
        ];

        btnLayout.forEach(key => {
            const btnElement = document.createElement("button");
            +key || key === '0' ? btnElement.classList.add("btn", "number") : btnElement.classList.add("btn", "operator");

            switch (key) {
                case "DEL":
                    btnElement.innerHTML = key;
                    break;
                case "CLR":
                    btnElement.innerHTML = key;
                    break;
                case "Enter":
                    btnElement.classList.add("enter");
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

    calculation(e, callback, callback2) {
        switch (e.target.innerText) {
            case "DEL":
                this.input.value.length === 1 ? this.input.value = '' : this.input.value = this.input.value.slice(0, this.input.value.length - 1);
                break;
            case "CLR":
                this.input.value = '';
                break;
            case "Enter":
                if (this.input.value !== '') {
                    let result2 = +this.input.value;
                    let arr = document.querySelectorAll('.drop');
                    let arr2 = [];
                    arr.forEach(item => arr2.push(+item.getAttribute('data-result')));

                    if (arr2.includes(result2)) {
                        if (document.querySelector(`.drop[data-result="${result2}"]`).getAttribute('data-bonus')) {                    
                            document.querySelectorAll('.drop').forEach(item => item.remove());
                            document.querySelector('.bonus').play();
                            callback2();
                            this.default();
                        } else {
                            document.querySelector(`.drop[data-result="${result2}"]`).remove();
                            document.querySelector('.ok').play();
                            callback();
                            this.default();
                        }

                    } else {
                        this.default();
                        document.querySelector('.mistake').play();
                    }

                }
                break;
            default:
                if (this.input.value === '' || this.input.value === '0') {
                    this.input.value = e.target.innerText;
                } else {
                    this.input.value += e.target.innerText;
                }
                break;
        }
    }


}

Object.assign(Calculator.prototype, createDomNodeMixin);