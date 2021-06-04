export const Raindrops = {
    elements: {
        raindrops: null,
        wrapper: null,
        section1: null,
        section2: null,
        space: null,
        drop: null,
        span: null,
        sea: null,
        score: null,
        calculator: null,
        screen: null,
        input: null,
        buttons: null,
        button1: null,
        button2: null,
        calc: null
    },

    prop: {
        start: 0,
        topSea: 0,
        res: 0,
    },

    init() {
        this.elements.raindrops = document.createElement("div");
        this.elements.raindrops.classList.add("raindrops");
        this.elements.wrapper = document.createElement("div");
        this.elements.wrapper.classList.add("wrapper");
        this.elements.raindrops.prepend(this.elements.wrapper);
        this.elements.section1 = document.createElement("section");
        this.elements.section2 = document.createElement("section");
        this.elements.section1.classList.add("section1");
        this.elements.section2.classList.add("section2");
        this.elements.wrapper.prepend(this.elements.section2);
        this.elements.wrapper.prepend(this.elements.section1);
        this.elements.space = document.createElement("div");
        this.elements.space.classList.add("space");
        this.elements.section1.prepend(this.elements.space);
        this.elements.drop = document.createElement("div");
        this.elements.drop.classList.add("drop");
        this.elements.space.prepend(this.elements.drop);
        this.elements.span = document.createElement("span");
        this.elements.drop.prepend(this.elements.span);
        this.elements.sea = document.createElement("div");
        this.elements.sea.classList.add("sea");
        this.elements.section1.append(this.elements.sea);
        this.elements.score = document.createElement("div");
        this.elements.score.classList.add("score");
        this.elements.score.textContent = "Score: 0";
        this.elements.section2.append(this.elements.score);
        this.elements.calculator = document.createElement("div");
        this.elements.calculator.classList.add("calculator");
        this.elements.section2.append(this.elements.calculator);
        this.elements.buttons = document.createElement("div");
        this.elements.buttons.classList.add("buttons");
        this.elements.section2.append(this.elements.buttons);
        this.elements.button1 = document.createElement("button");
        this.elements.button1.classList.add("button", "button_1");
        this.elements.buttons.append(this.elements.button1);
        this.elements.button2 = document.createElement("button");
        this.elements.button2.classList.add("button", "button_2");
        this.elements.buttons.append(this.elements.button2);
        this.elements.screen = document.createElement("div");
        this.elements.screen.classList.add("screen");
        this.elements.calculator.append(this.elements.screen);
        this.elements.input = document.createElement("input");
        this.elements.input.classList.add("screen-input");
        this.elements.input.id = "display";
        this.elements.input.setAttribute("value", "");
        this.elements.input.type = "text";
        this.elements.input.disabled = "disabled";
        this.elements.screen.append(this.elements.input);
        this.elements.calc = document.createElement("div");
        this.elements.calc.classList.add("calc");
        this.elements.calculator.append(this.elements.calc);
        this.elements.calc.append(this._createButtons());
        document.body.prepend(this.elements.raindrops);


        this.elements.button1.addEventListener('click', () => {
            this.elements.button2.classList.remove('button_demo_active');
            this.toggleStartStop();
        });
        this.elements.button2.addEventListener('click', () => {
            this.elements.button1.classList.remove('button_active');
            this.toggleDemo();
        });



    },

    _createButtons() {
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
                        this.elements.input.value.length === 1 ? this.elements.input.value = '' : this.elements.input.value = this.elements.input.value.slice(0, this.elements.input.value.length - 1);
                    });

                    break;

                case "CLR":

                    btnElement.innerHTML = key;
                    btnElement.addEventListener("click", () => {
                        this.elements.input.value = '';
                    });

                    break;

                case "Enter":

                    btnElement.classList.add("enter");
                    btnElement.innerHTML = key;
                    btnElement.addEventListener("click", () => {
                        if (this.elements.input.value !== '') {
                            let result = +this.elements.input.value;
                            console.log(result);
                        }
                    });

                    break;

                default:

                    btnElement.textContent = key;
                    btnElement.addEventListener("click", () => {
                        if (this.elements.input.value === '' || this.elements.input.value === '0') {
                            this.elements.input.value = key;
                        } else {
                            this.elements.input.value += key;
                        }
                    });
                    break;
            }
            fragment.append(btnElement);
        });
        return fragment;
    },

    toggleStartStop() {
        this.elements.button1.classList.toggle('button_active');
        this.elements.button2.classList.toggle('button_demo_hidden');
    },

    toggleDemo() {
        this.elements.button2.classList.toggle('button_demo_active');
    },

    run() {      
        let bottomDrop = Raindrops.elements.drop.getBoundingClientRect().top + pageYOffset + Raindrops.elements.drop.getBoundingClientRect().height;
        Raindrops.prop.topSea = Raindrops.elements.sea.getBoundingClientRect().top + pageYOffset;
        Raindrops.elements.drop.style.zIndex = 1;
        Raindrops.elements.drop.style.top = Raindrops.prop.start + 'vh';
        Raindrops.prop.start += 0.2;

        if (bottomDrop > Raindrops.prop.topSea) {
            Raindrops.elements.score.innerHTML = `Score: ${Raindrops.prop.res - 1}`
            Raindrops.elements.drop.remove();
            clearInterval(this.timeId, 100);
            Raindrops.elements.sea.style.maxHeight = parseInt(window.getComputedStyle(Raindrops.elements.sea).maxHeight) + 5 + '%';
            Raindrops.createDrop('4×2');
        }
    },

    createDrop(expression) {
        let d = document.createElement('div');
        d.classList = 'drop';
        d.style.top = 1 + 'vh';
        d.style.left = Math.round(62 * Math.random()) + 'vw';
        Raindrops.elements.span.innerHTML = expression;
        d.append(Raindrops.elements.span);
        Raindrops.elements.section1.prepend(d);
    },

}

window.addEventListener("DOMContentLoaded", function () {
    Raindrops.init();
    let timeId = setInterval(Raindrops.run, 30);
});