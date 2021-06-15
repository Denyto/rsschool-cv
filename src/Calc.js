import { createDomNodeMixin } from "./Utils";

export class Calculator {
    constructor () {     
        this.calculator = null;
        this.screen = null;
        this.calc = null;
        this.input = null;
    }

    create () {
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

    createButtons () {
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
                    btnElement.addEventListener("click", () => {
                        this.input.value.length === 1 ? this.input.value = '' : this.input.value = this.input.value.slice(0, this.input.value.length - 1);
                    });

                    break;

                case "CLR":

                    btnElement.innerHTML = key;
                    btnElement.addEventListener("click", () => {
                        this.input.value = '';
                    });

                    break;

                case "Enter":

                    btnElement.classList.add("enter");
                    btnElement.innerHTML = key;
                    // btnElement.addEventListener("click", () => {
                    //     if (this.input.value !== '') {
                    //         let result = +this.input.value;
                    //         console.log(+document.querySelector('.drop:first-child').innerText === result);
                    //         console.log(+document.querySelector('.drop:first-child').innerText);
                    //     }
                    // });

                    break;

                default:

                    btnElement.textContent = key;
                    btnElement.addEventListener("click", () => {
                        if (this.input.value === '' || this.input.value === '0') {
                            this.input.value = key;
                        } else {
                            this.input.value += key;
                        }
                    });
                    break;
            }
            fragment.append(btnElement);
        });
        return fragment;
    }

    appendCalcElements () {
        this.calculator.append(this.screen);
        this.calculator.append(this.calc);
        this.screen.append(this.input);
        document.querySelector('.section-calc').append(this.calculator);
    }

    default () {
        this.input.value = '';
    }
}

Object.assign(Calculator.prototype, createDomNodeMixin);