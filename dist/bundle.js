/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/App */ \"./src/App.js\");\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {\r\n\r\n    const app = new _src_App__WEBPACK_IMPORTED_MODULE_0__.App;\r\n    app.initComponents();\r\n    cloudsMove();\r\n\r\n    const melody = document.getElementById('melody');\r\n    const calc = document.querySelector('.calc');\r\n    const ocean = document.getElementById('ocean');\r\n\r\n    calc.addEventListener('click', (e) => app.calculationGame(e));\r\n\r\n    document.querySelector('.button-startstop').addEventListener('click', () => {\r\n        app.startGame();\r\n        melody.play();\r\n        ocean.play();\r\n    });\r\n\r\n    document.querySelector('.button-demo').addEventListener('click', () => {\r\n        app.setDemoMode();\r\n        app.calculationDemo();\r\n    });\r\n\r\n    function cloudsMove() {\r\n        let y = 0;\r\n        let waves = document.querySelector('.waves');\r\n        let requestId = requestAnimationFrame(move);\r\n\r\n        function move() {\r\n            y += 0.5;\r\n            waves.style.backgroundPosition = y + \"px \" + \"0px\";\r\n            requestId = requestAnimationFrame(move);\r\n        }\r\n    };\r\n});\r\n\r\n\n\n//# sourceURL=webpack://raindrops/./main.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n/* harmony import */ var _Raindrops__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Raindrops */ \"./src/Raindrops.js\");\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ \"./src/Wrapper.js\");\n/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Score */ \"./src/Score.js\");\n/* harmony import */ var _Calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Calc */ \"./src/Calc.js\");\n/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Buttons */ \"./src/Buttons.js\");\n/* harmony import */ var _Drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Drop */ \"./src/Drop.js\");\n/* harmony import */ var _Sea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sea */ \"./src/Sea.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modal */ \"./src/Modal.js\");\n/* harmony import */ var _Sectiongame__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Sectiongame */ \"./src/Sectiongame.js\");\n/* harmony import */ var _Sectioncalc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Sectioncalc */ \"./src/Sectioncalc.js\");\n/* harmony import */ var _Space__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Space */ \"./src/Space.js\");\n/* harmony import */ var _Waves__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Waves */ \"./src/Waves.js\");\n/* harmony import */ var _Exp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Exp */ \"./src/Exp.js\");\n/* harmony import */ var _Fullscreen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Fullscreen */ \"./src/Fullscreen.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n    constructor() {\r\n        this.timeId = null;\r\n        this.timeIdDemo = null;\r\n        this.raindropsApp = new _Raindrops__WEBPACK_IMPORTED_MODULE_1__.Raindrops().create();\r\n        this.wrapper = new _Wrapper__WEBPACK_IMPORTED_MODULE_2__.Wrapper().create();\r\n        this.sectionGame = new _Sectiongame__WEBPACK_IMPORTED_MODULE_9__.Sectiongame().create();\r\n        this.sectionCalc = new _Sectioncalc__WEBPACK_IMPORTED_MODULE_10__.Sectioncalc().create();\r\n        this.spaceApp = new _Space__WEBPACK_IMPORTED_MODULE_11__.Space();\r\n        this.scoreApp = new _Score__WEBPACK_IMPORTED_MODULE_3__.Score();\r\n        this.calculatorApp = new _Calc__WEBPACK_IMPORTED_MODULE_4__.Calculator();\r\n        this.fullscreen = new _Fullscreen__WEBPACK_IMPORTED_MODULE_14__.Fullscreen();\r\n        this.buttonsApp = new _Buttons__WEBPACK_IMPORTED_MODULE_5__.Buttons();\r\n        this.dropApp = new _Drop__WEBPACK_IMPORTED_MODULE_6__.Drop();\r\n        this.seaApp = new _Sea__WEBPACK_IMPORTED_MODULE_7__.Sea();\r\n        this.togglestart = true;\r\n        this.toggdemo = true;\r\n        this.tick = 3000;\r\n        this.waves = new _Waves__WEBPACK_IMPORTED_MODULE_12__.Waves();\r\n        this.speedtick = 40;\r\n        this.counterdrop = 1;\r\n    }\r\n\r\n    initComponents() {\r\n        this.raindropsApp.prepend(this.wrapper);\r\n        this.wrapper.prepend(this.sectionCalc);\r\n        this.wrapper.prepend(this.sectionGame);\r\n        this.sectionGame.prepend(this.spaceApp.create());\r\n        this.sectionGame.append(this.seaApp.create());\r\n        document.body.prepend(this.raindropsApp);\r\n        this.scoreApp.create();\r\n        this.calculatorApp.create();        \r\n        this.buttonsApp.create();\r\n        this.fullscreen.create();\r\n        document.querySelector('.section-game').prepend(this.waves.create());\r\n    }\r\n\r\n    startGame() {\r\n        clearInterval(this.timeIdDemo);\r\n        this.dropApp.default();                      \r\n        this.speedtick = 40;\r\n        this.counterdrop = 1;     \r\n        if (this.togglestart) {\r\n            this.calculatorApp.default();\r\n            this.scoreApp.default();\r\n            this.togglestart = false;\r\n            this.timeId = setInterval(() => {               \r\n                if (this.counterdrop % 5 === 0) {\r\n                    this.createDrobs().create(() => { this.addMistake() }, () => { this.setGameover() }, 100, this.createExpressionBonus(), true);\r\n                    this.counterdrop++;\r\n                } else {\r\n                    this.counterdrop++;\r\n                    this.createDrobs().create(() => { this.addMistake() }, () => { this.setGameover() }, this.setSpeedDrop(), this.createExpression(), '');\r\n                }\r\n\r\n            }, this.tick);\r\n        } else {\r\n            this.stopGame();\r\n        }\r\n    }\r\n\r\n    setDemoMode() {\r\n        if (this.toggdemo) {\r\n            this.toggdemo = false;\r\n            this.timeIdDemo = setInterval(() => {\r\n\r\n                if (this.counterdrop % 5 === 0) {\r\n                    this.createDrobs().create(() => { this.addMistake() }, () => { this.setGameover() }, 100, this.createExpressionBonus(), true);\r\n                    this.counterdrop++;\r\n                } else {\r\n                    this.counterdrop++;\r\n                    this.createDrobs().create(() => { this.addMistake() }, () => { this.setGameover() }, this.setSpeedDrop(), this.createExpression(), '');\r\n                }\r\n                this.calculationDemo();\r\n            }, this.tick);\r\n        } else {\r\n            this.stopGame();\r\n\r\n        }\r\n    }\r\n\r\n    createDrobs() {\r\n        this.dropApp = new _Drop__WEBPACK_IMPORTED_MODULE_6__.Drop();\r\n        return this.dropApp;\r\n    }\r\n\r\n    calculationGame(e) {\r\n        if (!this.togglestart) {\r\n            this.calculatorApp.calculation(e, () => this.scoreApp.add(), () => this.scoreApp.addBonus());\r\n        }\r\n    }\r\n\r\n    calculationDemo() {\r\n        this.calculatorApp.calculationDemo(() => this.scoreApp.add(), () => this.scoreApp.addBonus());\r\n    }\r\n\r\n    setSpeedDrop() {\r\n        if (this.scoreApp.show() > 100) {\r\n            this.speedtick -= 0.3;\r\n            return this.speedtick;\r\n        }\r\n        if (this.scoreApp.show() > 50) {\r\n            this.speedtick -= 0.1;\r\n            return this.speedtick;\r\n        }\r\n        return this.speedtick;\r\n    }\r\n\r\n    stopGame() {        \r\n        new _Modal__WEBPACK_IMPORTED_MODULE_8__.Modal(this.scoreApp.show()).create();\r\n        clearInterval(this.timeId);\r\n        clearInterval(this.timeIdDemo);\r\n        this.calculatorApp.default();\r\n        this.scoreApp.default();\r\n        this.seaApp.default();\r\n        this.waves.default();\r\n        this.dropApp.default();\r\n        this.togglestart = true;\r\n        this.toggdemo = true;\r\n        this.speedtick = 40;\r\n        this.counterdrop = 1;\r\n    }\r\n\r\n    addMistake() {\r\n        document.getElementById('mistake').play();\r\n        this.seaApp.riseLevel();\r\n        this.waves.riseLevel();\r\n        this.scoreApp.minus();\r\n        this.calculatorApp.default();\r\n    }\r\n\r\n    setGameover() {\r\n        document.getElementById('gameover').play();\r\n        setTimeout(() => {\r\n            clearInterval(this.timeId);\r\n            clearInterval(this.timeIdDemo);\r\n            this.calculatorApp.default();\r\n            this.seaApp.default();\r\n            this.waves.default();\r\n            this.dropApp.default();\r\n            this.buttonsApp.default();\r\n            new _Modal__WEBPACK_IMPORTED_MODULE_8__.Modal(this.scoreApp.show()).create();\r\n            this.scoreApp.default();\r\n            this.togglestart = true;\r\n            this.toggdemo = true;\r\n        }, 100);\r\n    }\r\n\r\n    createExpression() {\r\n        let exp = new _Exp__WEBPACK_IMPORTED_MODULE_13__.Expression().create();\r\n        return exp;\r\n    }\r\n\r\n    createExpressionBonus() {\r\n        let expbonus = new _Exp__WEBPACK_IMPORTED_MODULE_13__.Expression().createBonus();\r\n        return expbonus;\r\n    }\r\n\r\n\r\n}\r\n\r\nObject.assign(App.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/App.js?");

/***/ }),

/***/ "./src/Buttons.js":
/*!************************!*\
  !*** ./src/Buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Buttons\": () => (/* binding */ Buttons)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Buttons {\r\n    constructor() {\r\n        this.buttons = null;\r\n        this.buttonGame = null;\r\n        this.buttonDemo = null;\r\n    }\r\n\r\n    create() {\r\n        this.buttons = this.createDomNode(this.buttons, 'div', 'buttons');\r\n        this.buttonGame = this.createDomNode(this.buttonGame, \"button\", \"button\", \"button-startstop\");\r\n        this.buttons.append(this.buttonGame);\r\n        this.buttonDemo = this.createDomNode(this.buttonDemo, \"button\", \"button\", \"button-demo\");\r\n        this.buttons.append(this.buttonDemo);\r\n        document.querySelector('.section-calc').append(this.buttons);\r\n\r\n        this.buttonGame.addEventListener('click', () => {\r\n            this.buttonDemo.classList.remove('button__demo_active');\r\n            this.toggleStartStop();\r\n        });\r\n        this.buttonDemo.addEventListener('click', () => {\r\n            this.buttonGame.classList.remove('button__startstop_active');\r\n            this.toggleDemo();\r\n        });\r\n    }\r\n\r\n    toggleStartStop() {\r\n        this.buttonGame.classList.toggle('button__startstop_active');\r\n        this.buttonDemo.classList.toggle('button__demo_hidden');\r\n    }\r\n\r\n    toggleDemo() {\r\n        this.buttonDemo.classList.toggle('button__demo_active');\r\n    }\r\n\r\n    default() {\r\n        this.buttonDemo.classList.remove('button__demo_active');\r\n        this.buttonGame.classList.remove('button__startstop_active');\r\n        this.buttonDemo.classList.remove('button__demo_hidden');\r\n    }\r\n\r\n}\r\n\r\nObject.assign(Buttons.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Buttons.js?");

/***/ }),

/***/ "./src/Calc.js":
/*!*********************!*\
  !*** ./src/Calc.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calculator\": () => (/* binding */ Calculator)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Calculator {\r\n    constructor() {\r\n        this.calculator = null;\r\n        this.screen = null;\r\n        this.calc = null;\r\n        this.input = null;\r\n    }\r\n\r\n    create() {\r\n        this.calculator = this.createDomNode(this.calculator, 'div', 'calculator');\r\n        this.screen = this.createDomNode(this.screen, 'div', 'screen');\r\n        this.calc = this.createDomNode(this.calc, 'div', 'calc');\r\n        this.calc.append(this.createButtons());\r\n        this.input = this.createDomNode(this.input, 'input', 'screen-input');\r\n        this.input.id = \"display\";\r\n        this.input.setAttribute(\"value\", \"\");\r\n        this.input.type = \"text\";\r\n        this.input.disabled = \"disabled\";\r\n        this.appendCalcElements();\r\n    }\r\n\r\n    createButtons() {\r\n        const fragment = document.createDocumentFragment();\r\n        const btnLayout = [\r\n            \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"0\", \"DEL\", \"CLR\",\r\n            \"Enter\"\r\n        ];\r\n\r\n        btnLayout.forEach(key => {\r\n            const btnElement = document.createElement(\"button\");\r\n            +key || key === '0' ? btnElement.classList.add(\"btn\", \"number\") : btnElement.classList.add(\"btn\", \"operator\");\r\n\r\n            switch (key) {\r\n                case \"DEL\":\r\n                    btnElement.innerHTML = key;\r\n                    break;\r\n                case \"CLR\":\r\n                    btnElement.innerHTML = key;\r\n                    break;\r\n                case \"Enter\":\r\n                    btnElement.classList.add(\"enter\");\r\n                    btnElement.innerHTML = key;\r\n                    break;\r\n                default:\r\n                    btnElement.textContent = key;\r\n                    break;\r\n            }\r\n            fragment.append(btnElement);\r\n        });\r\n        return fragment;\r\n    }\r\n\r\n    appendCalcElements() {\r\n        this.calculator.append(this.screen);\r\n        this.calculator.append(this.calc);\r\n        this.screen.append(this.input);\r\n        document.querySelector('.section-calc').append(this.calculator);\r\n    }\r\n\r\n    default() {\r\n        this.input.value = '';\r\n    }\r\n\r\n    calculation(e, callback, callback2) {\r\n        switch (e.target.innerText) {\r\n            case \"DEL\":\r\n                this.input.value.length === 1 ? this.input.value = '' : this.input.value = this.input.value.slice(0, this.input.value.length - 1);\r\n                break;\r\n            case \"CLR\":\r\n                this.input.value = '';\r\n                break;\r\n            case \"Enter\":\r\n                if (this.input.value !== '') {\r\n                    let userresult = +this.input.value;\r\n                    let allscreendrobs = document.querySelectorAll('.drop');\r\n                    let rightresultsofdrops = [];\r\n                    let rightresultsofbonusdrops = [];\r\n                    allscreendrobs.forEach(item => {\r\n                        if (item.getAttribute('data-bonus')) {\r\n                            rightresultsofbonusdrops.push(+item.getAttribute('data-result'));\r\n                        } else {\r\n                            rightresultsofdrops.push(+item.getAttribute('data-result'));\r\n                        }\r\n                    });\r\n                    if (rightresultsofbonusdrops.includes(userresult)) {\r\n                        document.querySelectorAll('.drop').forEach(item => setTimeout(() => item.remove(), 100));\r\n                        document.getElementById('bonus').play();\r\n                        callback2();\r\n                        this.default();\r\n                    } else {\r\n                        if (rightresultsofdrops.includes(userresult)) {\r\n                            setTimeout(() => document.querySelector(`.drop[data-result=\"${userresult}\"]`).remove(), 100);\r\n                            document.getElementById('ok').play();\r\n                            callback();\r\n                            this.default();\r\n                        } else {\r\n                            this.default();\r\n                            document.getElementById('mistake').play();\r\n                        }\r\n                    }\r\n\r\n                }\r\n                break;\r\n            default:\r\n                if (this.input.value === '' || this.input.value === '0') {\r\n                    this.input.value = e.target.innerText;\r\n                } else {\r\n                    this.input.value += e.target.innerText;\r\n                }\r\n                break;\r\n        }\r\n    }\r\n\r\n    calculationDemo(callback, callback2) {\r\n\r\n        let rightresultsofdropsdemo = [];\r\n        let rightresultsofbonusdropsdemo = [];\r\n        let allscreendrobsdemo = [];\r\n        document.querySelectorAll('.drop').forEach(item => {\r\n            if (item.getAttribute('data-bonus')) {\r\n                rightresultsofbonusdropsdemo.push(+item.getAttribute('data-result'));\r\n            } else {\r\n                rightresultsofdropsdemo.push(+item.getAttribute('data-result'));\r\n            }\r\n            allscreendrobsdemo.push(+item.getAttribute('data-result'));\r\n        });\r\n        let i = Math.round(Math.random() * (allscreendrobsdemo.length - 1));\r\n\r\n        if (!allscreendrobsdemo[i] && allscreendrobsdemo[i] !== 0) {\r\n            this.input.value = '';\r\n        } else {\r\n            setTimeout(() => {\r\n                this.input.value = allscreendrobsdemo[i];\r\n            }, 500);\r\n\r\n        }\r\n\r\n        setTimeout(() => {\r\n            if (document.querySelector(`.drop[data-result=\"${allscreendrobsdemo[i]}\"]`)) {                \r\n                document.querySelector(`.drop[data-result=\"${allscreendrobsdemo[i]}\"]`).style.border = '3px solid yellow';\r\n                setTimeout(() => {\r\n                    if (document.querySelector(`.drop[data-result=\"${allscreendrobsdemo[i]}\"]`).getAttribute('data-bonus')) {                        \r\n                        setTimeout(() => {\r\n                            document.querySelectorAll('.drop').forEach(item => item.remove());\r\n                            document.getElementById('bonus').play();\r\n                            callback2();\r\n                        }, 2000);\r\n\r\n\r\n                    } else {\r\n                        document.querySelector(`.drop[data-result=\"${allscreendrobsdemo[i]}\"]`).remove();\r\n                        document.getElementById('ok').play();\r\n                        this.input.value = '';\r\n                        callback();\r\n                    }\r\n\r\n                }, 1000);\r\n            }\r\n\r\n\r\n        }, 2000);\r\n\r\n\r\n    }\r\n\r\n\r\n}\r\n\r\nObject.assign(Calculator.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Calc.js?");

/***/ }),

/***/ "./src/Drop.js":
/*!*********************!*\
  !*** ./src/Drop.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Drop\": () => (/* binding */ Drop)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Drop {\r\n\r\n    constructor() {\r\n        this.drop = null;\r\n        this.space = null;\r\n        this.span = null;\r\n        this.start = 1;\r\n        this.timeId;\r\n        this.droplevel = 1;\r\n        this.sealevel;\r\n    }\r\n\r\n    create(mistake, gameover, speed, expression, isbonusdrop) {\r\n        if (isbonusdrop) {\r\n            this.drop = this.createDomNode(this.drop, 'div', 'drop', 'drop-bonus');\r\n            this.drop.style.left = Math.round(62 * Math.random()) + 'vw';\r\n            this.span = document.createElement('span');\r\n            this.span.classList.add('span-bonus');\r\n            this.span.innerHTML = expression;\r\n            this.drop.setAttribute('data-result', this.processing(expression));\r\n            this.drop.setAttribute('data-bonus', isbonusdrop);\r\n            this.drop.prepend(this.span);\r\n            document.querySelector('.space').append(this.drop);\r\n            this.moveDrop(mistake, gameover, speed);\r\n        } else {\r\n            this.drop = this.createDomNode(this.drop, 'div', 'drop');\r\n            this.drop.style.left = Math.round(62 * Math.random()) + 'vw';\r\n            this.span = document.createElement('span');\r\n            this.span.innerHTML = expression;\r\n            this.drop.setAttribute('data-result', this.processing(expression));\r\n            this.drop.setAttribute('data-bonus', isbonusdrop);\r\n            this.drop.prepend(this.span);\r\n            document.querySelector('.space').append(this.drop);\r\n            this.moveDrop(mistake, gameover, speed);\r\n        }\r\n    }\r\n\r\n    moveDrop(mistake, gameover, speed) {\r\n\r\n        this.timeId = setInterval(() => {\r\n            this.sealevel = document.querySelector('.sea').getBoundingClientRect().top + pageYOffset;\r\n            this.droplevel = this.drop.getBoundingClientRect().top + pageYOffset + this.drop.getBoundingClientRect().height;\r\n            this.drop.style.top = this.start + 'vh';\r\n            this.start += 0.2;\r\n\r\n            if (this.droplevel > this.sealevel) {\r\n                this.drop.remove();\r\n                clearInterval(this.timeId);\r\n                mistake();\r\n                if (parseInt(document.querySelector('.sea').style.maxHeight) > 30) {\r\n                    gameover();\r\n                }\r\n            }\r\n            if (this.start > 90) {\r\n                this.drop.remove();\r\n                clearInterval(this.timeId);\r\n            }\r\n        }, speed);\r\n\r\n    }\r\n\r\n    default() {\r\n        document.querySelectorAll('.drop').forEach(item => {\r\n            clearInterval(this.timeId);\r\n            item.remove();\r\n        });\r\n    }\r\n    \r\n\r\n}\r\n\r\nObject.assign(Drop.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Drop.js?");

/***/ }),

/***/ "./src/Exp.js":
/*!********************!*\
  !*** ./src/Exp.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Expression\": () => (/* binding */ Expression)\n/* harmony export */ });\nclass Expression {\r\n    constructor() {\r\n        this.num1 = Math.ceil(Math.random() * 10);\r\n        this.num2 = Math.ceil(Math.random() * 10);\r\n        this.symbols = ['+', '-'];\r\n        this.symbolsBonus = ['×', '÷'];\r\n        \r\n    }\r\n\r\n    create() {\r\n        let result;\r\n        let randomSymbol;\r\n        randomSymbol = this.symbols[Math.round(Math.random() * 1)];\r\n\r\n        switch (randomSymbol) {\r\n            case \"-\":\r\n                this.num1 > this.num2 ? result = `${this.num1}${randomSymbol}${this.num2}` :\r\n                    result = `${this.num2}${randomSymbol}${this.num1}`;\r\n                break;            \r\n            default:\r\n                result = `${this.num1}${randomSymbol}${this.num2}`;\r\n                break;\r\n        }\r\n        \r\n        return result;\r\n    }\r\n\r\n    createBonus() {\r\n        let resultBonus;\r\n        let randomSymbolBonus;\r\n        randomSymbolBonus = this.symbolsBonus[Math.round(Math.random() * 1)];\r\n\r\n        switch (randomSymbolBonus) {\r\n            case \"÷\":\r\n                this.num1 > this.num2 && this.num2 !== 0 ? resultBonus = `${this.num1 * this.num2}${randomSymbolBonus}${this.num2}` :\r\n                    resultBonus = `${(this.num1 + 1) * this.num2}${randomSymbolBonus}${(this.num1 + 1)}`;\r\n                break;           \r\n            default:\r\n                resultBonus = `${this.num1}${randomSymbolBonus}${this.num2}`;\r\n                break;\r\n        }\r\n\r\n        return resultBonus;\r\n    }\r\n\r\n   \r\n}\n\n//# sourceURL=webpack://raindrops/./src/Exp.js?");

/***/ }),

/***/ "./src/Fullscreen.js":
/*!***************************!*\
  !*** ./src/Fullscreen.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fullscreen\": () => (/* binding */ Fullscreen)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Fullscreen {\r\n    constructor() {\r\n        this.buttonFullscreen = null;\r\n    }\r\n\r\n    create() {\r\n        this.buttonFullscreen = this.createDomNode(this.buttonFullscreen, 'div', 'fullscreen-button');   \r\n        document.querySelector('.buttons').append(this.buttonFullscreen);\r\n\r\n        this.buttonFullscreen.addEventListener('click', function (event) {           \r\n            if (!event.target.classList.contains('fullscreen-button')) return;\r\n            console.log('fullscreen-button');\r\n            if (document.fullscreenElement) {\r\n                document.exitFullscreen();\r\n            } else {\r\n                document.documentElement.requestFullscreen();\r\n            }\r\n        }, false);\r\n       \r\n    }\r\n\r\n  \r\n\r\n}\r\n\r\nObject.assign(Fullscreen.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Fullscreen.js?");

/***/ }),

/***/ "./src/Modal.js":
/*!**********************!*\
  !*** ./src/Modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Modal {\r\n    constructor(score) {\r\n        this.overlay = null;\r\n        this.modal = null;\r\n        this.btn = null;\r\n        this.result = null;\r\n        this.score = score;\r\n    }\r\n\r\n    create() {\r\n        this.modal = this.createDomNode(this.modal, 'div', 'modal');\r\n        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay');\r\n        this.overlay.style.zIndex = 10;\r\n        this.result = this.createDomNode(this.result, 'div');\r\n        this.btn = this.createDomNode(this.btn, 'button', 'btn__modal');\r\n        this.btn.innerHTML = 'OK';\r\n        this.result.innerHTML = `Your Score: ${this.score}`;\r\n        this.modal.append(this.result);\r\n        this.modal.append(this.btn);\r\n        this.overlay.append(this.modal);     \r\n        document.body.append(this.overlay);\r\n\r\n        this.btn.addEventListener('click', () => {           \r\n            this.overlay.remove();\r\n        });\r\n\r\n    }\r\n\r\n   \r\n}\r\n\r\nObject.assign(Modal.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Modal.js?");

/***/ }),

/***/ "./src/Raindrops.js":
/*!**************************!*\
  !*** ./src/Raindrops.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Raindrops\": () => (/* binding */ Raindrops)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Raindrops {\r\n    constructor() {\r\n        this.raindrops = null;       \r\n    }\r\n\r\n    create() {        \r\n        this.raindrops = this.createDomNode(this.raindrops, 'div', 'raindrops');\r\n        return this.raindrops;\r\n    }  \r\n}\r\n\r\nObject.assign(Raindrops.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Raindrops.js?");

/***/ }),

/***/ "./src/Score.js":
/*!**********************!*\
  !*** ./src/Score.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Score\": () => (/* binding */ Score)\n/* harmony export */ });\nclass Score {\r\n    constructor() {        \r\n        this.number = 0;\r\n        this.score = null;\r\n    }\r\n\r\n    create () {        \r\n        this.score = document.createElement('div');\r\n        this.score.classList.add('score');\r\n        this.score.innerHTML = `Score: ${this.number}`\r\n        document.querySelector('.section-calc').append(this.score);\r\n    }\r\n\r\n    default () {\r\n        this.number = 0;\r\n        this.score.innerHTML = `Score: ${this.number}`\r\n    }\r\n\r\n    add () {\r\n        this.score.innerHTML = `Score: ${this.number += 10}`\r\n    }\r\n\r\n    addBonus() {\r\n        this.score.innerHTML = `Score: ${this.number += 50}`\r\n    }\r\n\r\n    minus () {\r\n        this.score.innerHTML = `Score: ${this.number -= 10}`\r\n    }\r\n\r\n    show () {\r\n      return this.number;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://raindrops/./src/Score.js?");

/***/ }),

/***/ "./src/Sea.js":
/*!********************!*\
  !*** ./src/Sea.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sea\": () => (/* binding */ Sea)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Sea {\r\n    constructor() {\r\n        this.sea = null;        \r\n    }\r\n\r\n    create() {\r\n        this.sea = this.createDomNode(this.sea, 'div', 'sea');        \r\n        this.sea.style.maxHeight = 8 + '%';\r\n        return this.sea;\r\n    }\r\n\r\n    riseLevel() {\r\n        this.sea.style.maxHeight = parseInt(window.getComputedStyle(document.querySelector('.sea')).maxHeight) + 10 + '%';\r\n   \r\n    }\r\n\r\n    default () {\r\n        this.sea.style.maxHeight = 8 + '%';\r\n    }  \r\n\r\n}\r\n\r\nObject.assign(Sea.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\r\n\n\n//# sourceURL=webpack://raindrops/./src/Sea.js?");

/***/ }),

/***/ "./src/Sectioncalc.js":
/*!****************************!*\
  !*** ./src/Sectioncalc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sectioncalc\": () => (/* binding */ Sectioncalc)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Sectioncalc {\r\n    constructor() {\r\n        this.sectionCalc = null;\r\n    }\r\n\r\n    create() {\r\n        this.sectionCalc = this.createDomNode(this.sectionCalc, 'section', 'section-calc');\r\n        return this.sectionCalc;\r\n    }\r\n}\r\n\r\nObject.assign(Sectioncalc.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Sectioncalc.js?");

/***/ }),

/***/ "./src/Sectiongame.js":
/*!****************************!*\
  !*** ./src/Sectiongame.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sectiongame\": () => (/* binding */ Sectiongame)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Sectiongame {\r\n    constructor() {\r\n        this.sectionGame = null;\r\n    }\r\n\r\n    create() {\r\n        this.sectionGame = this.createDomNode(this.sectionGame, 'section', 'section-game');\r\n        return this.sectionGame;\r\n    }\r\n}\r\n\r\nObject.assign(Sectiongame.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Sectiongame.js?");

/***/ }),

/***/ "./src/Space.js":
/*!**********************!*\
  !*** ./src/Space.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Space\": () => (/* binding */ Space)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Space {\r\n    constructor() {\r\n        this.space = null;\r\n    }\r\n\r\n    create() {\r\n        this.space = this.createDomNode(this.space, 'div', 'space');\r\n        return this.space;\r\n    }\r\n}\r\n\r\nObject.assign(Space.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Space.js?");

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDomNodeMixin\": () => (/* binding */ createDomNodeMixin)\n/* harmony export */ });\nlet createDomNodeMixin = {\r\n\r\n    createDomNode(node, element, ...classes) {\r\n        node = document.createElement(element);\r\n        node.classList.add(...classes);\r\n        return node;\r\n    },\r\n\r\n    processing(str) {\r\n        if (str.includes('+')) {\r\n            return +str.split('+')[0] + +str.split('+')[1];\r\n        }\r\n        if (str.includes('-')) {\r\n            return +str.split('-')[0] - +str.split('-')[1];\r\n        }\r\n        if (str.includes('×')) {\r\n            return +str.split('×')[0] * +str.split('×')[1];\r\n        }\r\n        if (str.includes('÷')) {\r\n            return +str.split('÷')[0] / +str.split('÷')[1];\r\n        }\r\n    },\r\n\r\n}\r\n\n\n//# sourceURL=webpack://raindrops/./src/Utils.js?");

/***/ }),

/***/ "./src/Waves.js":
/*!**********************!*\
  !*** ./src/Waves.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Waves\": () => (/* binding */ Waves)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Waves {\r\n    constructor() {\r\n        this.waves = null;\r\n        this.wave1 = null;\r\n        this.wave2 = null;\r\n        this.stone = null;               \r\n    }\r\n\r\n    create() {\r\n        this.waves = this.createDomNode(this.waves, 'div', 'waves');\r\n        this.wave1 = this.createDomNode(this.wave1, 'div', 'wave1');       \r\n        this.wave2 = this.createDomNode(this.wave2, 'div', 'wave2');\r\n        this.stone = this.createDomNode(this.stone, 'div', 'stone');       \r\n        this.waves.append(this.wave1);\r\n        this.waves.append(this.stone);\r\n        this.waves.append(this.wave2);        \r\n        return this.waves;\r\n    }\r\n\r\n    riseLevel() {     \r\n        this.wave1.style.top = parseInt(window.getComputedStyle(document.querySelector('.wave1')).top) - window.screen.height * 0.1 + 'px';\r\n        this.wave2.style.top = parseInt(window.getComputedStyle(document.querySelector('.wave2')).top) - window.screen.height * 0.1 + 'px';\r\n    }\r\n\r\n    default() {\r\n        this.wave1.style.top = 99 + '%';\r\n        this.wave2.style.top = 99 + '%';\r\n    }\r\n\r\n}\r\n\r\nObject.assign(Waves.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Waves.js?");

/***/ }),

/***/ "./src/Wrapper.js":
/*!************************!*\
  !*** ./src/Wrapper.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wrapper\": () => (/* binding */ Wrapper)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Wrapper {\r\n    constructor() {\r\n        this.wrapper = null;\r\n    }\r\n\r\n    create() {\r\n        this.wrapper = this.createDomNode(this.wrapper, 'div', 'wrapper');\r\n        return this.wrapper;\r\n    }\r\n}\r\n\r\nObject.assign(Wrapper.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Wrapper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;