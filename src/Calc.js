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
                    let userresult = +this.input.value;
                    let allscreendrobs = document.querySelectorAll('.drop');
                    let rightresultsofdrops = [];
                    let rightresultsofbonusdrops = [];
                    allscreendrobs.forEach(item => {
                        if (item.getAttribute('data-bonus')) {
                            rightresultsofbonusdrops.push(+item.getAttribute('data-result'));
                        } else {
                            rightresultsofdrops.push(+item.getAttribute('data-result'));
                        }
                    });
                    if (rightresultsofbonusdrops.includes(userresult)) {
                        document.querySelectorAll('.drop').forEach(item => setTimeout(() => item.remove(), 100));
                        document.querySelector('.bonus').play();
                        callback2();
                        this.default();
                    } else {
                        if (rightresultsofdrops.includes(userresult)) {
                            setTimeout(() => document.querySelector(`.drop[data-result="${userresult}"]`).remove(), 100);
                            document.querySelector('.ok').play();
                            callback();
                            this.default();
                        } else {
                            this.default();
                            document.querySelector('.mistake').play();
                        }
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

    calculationDemo(callback, callback2) {

        let rightresultsofdropsdemo = [];
        let rightresultsofbonusdropsdemo = [];
        let allscreendrobsdemo = [];
        document.querySelectorAll('.drop').forEach(item => {
            if (item.getAttribute('data-bonus')) {
                rightresultsofbonusdropsdemo.push(+item.getAttribute('data-result'));
            } else {
                rightresultsofdropsdemo.push(+item.getAttribute('data-result'));
            }
            allscreendrobsdemo.push(+item.getAttribute('data-result'));
        });
        let i = Math.round(Math.random() * (allscreendrobsdemo.length - 1));

        if (!allscreendrobsdemo[i] && allscreendrobsdemo[i] !== 0) {
            this.input.value = '';
        } else {
            setTimeout(() => {
                this.input.value = allscreendrobsdemo[i];
            }, 500);

        }

        setTimeout(() => {
            if (document.querySelector(`.drop[data-result="${allscreendrobsdemo[i]}"]`)) {
                document.querySelector(`.drop[data-result="${allscreendrobsdemo[i]}"]`).style.color = 'green';
                document.querySelector(`.drop[data-result="${allscreendrobsdemo[i]}"]`).style.border = '3px solid';
                setTimeout(() => {
                    if (document.querySelector(`.drop[data-result="${allscreendrobsdemo[i]}"]`).getAttribute('data-bonus')) {
                        setTimeout(() => {
                            document.querySelectorAll('.drop').forEach(item => item.remove());
                            document.querySelector('.bonus').play();
                            callback2();
                        }, 2000);


                    } else {
                        document.querySelector(`.drop[data-result="${allscreendrobsdemo[i]}"]`).remove();
                        document.querySelector('.ok').play();
                        this.input.value = '';
                        callback();
                    }

                }, 1000);
            }


        }, 2000);









    }


}

Object.assign(Calculator.prototype, createDomNodeMixin);