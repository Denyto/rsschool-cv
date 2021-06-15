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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/App */ \"./src/App.js\");\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {\r\n    const app = new _src_App__WEBPACK_IMPORTED_MODULE_0__.App;\r\n    app.init();\r\n\r\n    document.querySelector('.button__startstop').addEventListener('click', () => { app.start() });\r\n\r\n\r\n    document.querySelector('.enter').addEventListener(\"click\", () => {\r\n\r\n\r\n        if (document.querySelector('.screen-input').value !== '') {\r\n            let result = +document.querySelector('.screen-input').value;\r\n            if (document.querySelector('.drop:first-child')) {\r\n                if (+document.querySelector('.drop:first-child').innerText === result) {\r\n                    document.querySelector('.drop:first-child').remove();\r\n                    document.querySelector('.ok').play();\r\n                    app.result();\r\n                } else {\r\n                    document.querySelector('.mistake').play();\r\n                    document.querySelector('.drop:first-child').style.borderColor = 'red';\r\n                }\r\n            }\r\n        }\r\n\r\n    });\r\n\r\n\r\n\r\n});\n\n//# sourceURL=webpack://raindrops/./index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Score */ \"./src/Score.js\");\n/* harmony import */ var _Calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calc */ \"./src/Calc.js\");\n/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Buttons */ \"./src/Buttons.js\");\n/* harmony import */ var _Drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Drop */ \"./src/Drop.js\");\n/* harmony import */ var _Sea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sea */ \"./src/Sea.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n    constructor() {\r\n        this.timeId;\r\n        this.raindrops = null;\r\n        this.wrapper = null;\r\n        this.sectionGame = null;\r\n        this.sectionCalc = null;\r\n        this.space = null;\r\n        this.scoreApp = new _Score__WEBPACK_IMPORTED_MODULE_1__.Score;\r\n        this.calculatorApp = new _Calc__WEBPACK_IMPORTED_MODULE_2__.Calculator;\r\n        this.buttonsApp = new _Buttons__WEBPACK_IMPORTED_MODULE_3__.Buttons;\r\n        this.dropApp = new _Drop__WEBPACK_IMPORTED_MODULE_4__.Drop();\r\n        this.seaApp = new _Sea__WEBPACK_IMPORTED_MODULE_5__.Sea;\r\n        this.toggle = true;\r\n    }\r\n\r\n    init() {\r\n        this.raindrops = this.createDomNode(this.raindrops, 'div', 'raindrops');\r\n        this.wrapper = this.createDomNode(this.wrapper, 'div', 'wrapper');\r\n        this.sectionGame = this.createDomNode(this.sectionGame, 'section', 'section-game');\r\n        this.sectionCalc = this.createDomNode(this.sectionCalc, 'section', 'section-calc');\r\n        this.raindrops.prepend(this.wrapper);\r\n        this.wrapper.prepend(this.sectionCalc);\r\n        this.wrapper.prepend(this.sectionGame);\r\n        this.space = this.createDomNode(this.space, 'div', 'space');\r\n        this.sectionGame.prepend(this.space);\r\n        this.sectionGame.append(this.seaApp.create());\r\n        document.body.prepend(this.raindrops);\r\n        this.scoreApp.create();\r\n        this.calculatorApp.create();\r\n        this.buttonsApp.create();\r\n    }\r\n\r\n    start() {\r\n        if (this.toggle) {\r\n            this.toggle = false;\r\n            this.timeId = setInterval(() => {\r\n                this.createDrobs().create(() => {\r\n                  \r\n                    document.querySelector('.mistake').play();\r\n                    this.seaApp.riseLevel();\r\n                    this.scoreApp.minus();  \r\n                    \r\n                });\r\n                \r\n            }, 3000);         \r\n\r\n        } else {\r\n            clearInterval(this.timeId);\r\n            this.calculatorApp.default();\r\n            this.scoreApp.default();\r\n            this.seaApp.default();\r\n\r\n            this.dropApp.default();\r\n            this.toggle = true;\r\n        }\r\n    }\r\n\r\n    createDrobs() {\r\n        this.dropApp = new _Drop__WEBPACK_IMPORTED_MODULE_4__.Drop();\r\n        return this.dropApp;\r\n    }\r\n\r\nresult () {\r\n   \r\n    this.scoreApp.add();\r\n    this.calculatorApp.default();\r\n}\r\n\r\n\r\n}\r\n\r\nObject.assign(App.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/App.js?");

/***/ }),

/***/ "./src/Buttons.js":
/*!************************!*\
  !*** ./src/Buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Buttons\": () => (/* binding */ Buttons)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Buttons {\r\n    constructor() {\r\n        this.buttons = null;\r\n        this.buttonGame = null;\r\n        this.buttonDemo = null;\r\n    }\r\n\r\n    create () {\r\n        this.buttons = this.createDomNode(this.buttons, 'div', 'buttons'); \r\n        this.buttonGame = this.createDomNode(this.buttonGame, \"button\", \"button\", \"button__startstop\");\r\n        this.buttons.append(this.buttonGame);\r\n        this.buttonDemo = this.createDomNode(this.buttonDemo, \"button\", \"button\", \"button__demo\");\r\n        this.buttons.append(this.buttonDemo);\r\n        document.querySelector('.section-calc').append(this.buttons);\r\n\r\n        this.buttonGame.addEventListener('click', () => {\r\n            this.buttonDemo.classList.remove('button__demo_active');\r\n            this.toggleStartStop();\r\n        });\r\n        this.buttonDemo.addEventListener('click', () => {\r\n            this.buttonGame.classList.remove('button__startstop_active');\r\n            this.toggleDemo();\r\n        });\r\n    }\r\n\r\n    toggleStartStop() {\r\n        this.buttonGame.classList.toggle('button__startstop_active');\r\n        this.buttonDemo.classList.toggle('button__demo_hidden');\r\n    }\r\n\r\n    toggleDemo() {\r\n        this.buttonDemo.classList.toggle('button__demo_active');\r\n    }\r\n}\r\n\r\nObject.assign(Buttons.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Buttons.js?");

/***/ }),

/***/ "./src/Calc.js":
/*!*********************!*\
  !*** ./src/Calc.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calculator\": () => (/* binding */ Calculator)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Calculator {\r\n    constructor () {     \r\n        this.calculator = null;\r\n        this.screen = null;\r\n        this.calc = null;\r\n        this.input = null;\r\n    }\r\n\r\n    create () {\r\n        this.calculator = this.createDomNode(this.calculator, 'div', 'calculator');\r\n        this.screen = this.createDomNode(this.screen, 'div', 'screen');\r\n        this.calc = this.createDomNode(this.calc, 'div', 'calc');\r\n        this.calc.append(this.createButtons());\r\n        this.input = this.createDomNode(this.input, 'input', 'screen-input');\r\n        this.input.id = \"display\";\r\n        this.input.setAttribute(\"value\", \"\");\r\n        this.input.type = \"text\";\r\n        this.input.disabled = \"disabled\";\r\n        this.appendCalcElements();\r\n   \r\n    }\r\n\r\n    createButtons () {\r\n        const fragment = document.createDocumentFragment();\r\n        const btnLayout = [\r\n            \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"0\", \"DEL\", \"CLR\",\r\n            \"Enter\"\r\n        ];\r\n\r\n        btnLayout.forEach(key => {\r\n            const btnElement = document.createElement(\"button\");\r\n            +key || key === '0' ? btnElement.classList.add(\"btn\", \"number\") : btnElement.classList.add(\"btn\", \"operator\");\r\n\r\n            switch (key) {\r\n                case \"DEL\":\r\n                    btnElement.innerHTML = key;\r\n                    btnElement.addEventListener(\"click\", () => {\r\n                        this.input.value.length === 1 ? this.input.value = '' : this.input.value = this.input.value.slice(0, this.input.value.length - 1);\r\n                    });\r\n\r\n                    break;\r\n\r\n                case \"CLR\":\r\n\r\n                    btnElement.innerHTML = key;\r\n                    btnElement.addEventListener(\"click\", () => {\r\n                        this.input.value = '';\r\n                    });\r\n\r\n                    break;\r\n\r\n                case \"Enter\":\r\n\r\n                    btnElement.classList.add(\"enter\");\r\n                    btnElement.innerHTML = key;\r\n                    // btnElement.addEventListener(\"click\", () => {\r\n                    //     if (this.input.value !== '') {\r\n                    //         let result = +this.input.value;\r\n                    //         console.log(+document.querySelector('.drop:first-child').innerText === result);\r\n                    //         console.log(+document.querySelector('.drop:first-child').innerText);\r\n                    //     }\r\n                    // });\r\n\r\n                    break;\r\n\r\n                default:\r\n\r\n                    btnElement.textContent = key;\r\n                    btnElement.addEventListener(\"click\", () => {\r\n                        if (this.input.value === '' || this.input.value === '0') {\r\n                            this.input.value = key;\r\n                        } else {\r\n                            this.input.value += key;\r\n                        }\r\n                    });\r\n                    break;\r\n            }\r\n            fragment.append(btnElement);\r\n        });\r\n        return fragment;\r\n    }\r\n\r\n    appendCalcElements () {\r\n        this.calculator.append(this.screen);\r\n        this.calculator.append(this.calc);\r\n        this.screen.append(this.input);\r\n        document.querySelector('.section-calc').append(this.calculator);\r\n    }\r\n\r\n    default () {\r\n        this.input.value = '';\r\n    }\r\n}\r\n\r\nObject.assign(Calculator.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Calc.js?");

/***/ }),

/***/ "./src/Drop.js":
/*!*********************!*\
  !*** ./src/Drop.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Drop\": () => (/* binding */ Drop)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\n\r\nclass Drop {\r\n\r\n    constructor() {\r\n        this.expression = `${Math.round(Math.random() * 100)}`;\r\n        this.drop = null;\r\n        this.space = null;\r\n        this.span = null;        \r\n        this.start = 1;\r\n        this.timeId;\r\n        this.droplevel = 1;\r\n        this.sealevel;\r\n\r\n    }\r\n\r\n    create(callback) {\r\n        this.drop = this.createDomNode(this.drop, 'div', 'drop');\r\n        this.drop.style.left = Math.round(62 * Math.random()) + 'vw';\r\n        this.span = document.createElement('span');\r\n        this.span.innerHTML = this.expression;\r\n        this.drop.prepend(this.span);\r\n        document.querySelector('.space').append(this.drop);\r\n        this.move(callback);\r\n    }\r\n\r\n    move(callback) {\r\n\r\n        this.timeId = setInterval(() => {            \r\n            this.sealevel = document.querySelector('.sea').getBoundingClientRect().top + pageYOffset;\r\n            this.droplevel = this.drop.getBoundingClientRect().top + pageYOffset + this.drop.getBoundingClientRect().height;\r\n\r\n            this.drop.style.top = this.start + 'vh';\r\n            this.start += 0.2;\r\n\r\n            \r\n            if (this.droplevel > this.sealevel) {\r\n                this.drop.remove();\r\n                clearInterval(this.timeId);\r\n                callback();\r\n\r\n            }\r\n            if (this.start > 90) {\r\n                \r\n                this.drop.remove();\r\n                clearInterval(this.timeId);\r\n            }\r\n        }, 20);\r\n    }\r\n\r\n    default() {\r\n        document.querySelectorAll('.drop').forEach(item => {\r\n            clearInterval(this.timeId);\r\n            item.remove();\r\n        });\r\n    }\r\n\r\n\r\n\r\n}\r\n\r\nObject.assign(Drop.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n//# sourceURL=webpack://raindrops/./src/Drop.js?");

/***/ }),

/***/ "./src/Score.js":
/*!**********************!*\
  !*** ./src/Score.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Score\": () => (/* binding */ Score)\n/* harmony export */ });\nclass Score {\r\n    constructor() {        \r\n        this.number = 0;\r\n        this.score = null;\r\n    }\r\n\r\n    create () {        \r\n        this.score = document.createElement('div');\r\n        this.score.classList.add('score');\r\n        this.score.innerHTML = `Score: ${this.number}`\r\n        document.querySelector('.section-calc').append(this.score);\r\n    }\r\n\r\n    default () {\r\n        this.number = 0;\r\n        this.score.innerHTML = `Score: ${this.number}`\r\n    }\r\n\r\n    add () {\r\n        this.score.innerHTML = `Score: ${this.number += 10}`\r\n    }\r\n\r\n    minus () {\r\n        this.score.innerHTML = `Score: ${this.number -= 10}`\r\n    }\r\n}\r\n0\n\n//# sourceURL=webpack://raindrops/./src/Score.js?");

/***/ }),

/***/ "./src/Sea.js":
/*!********************!*\
  !*** ./src/Sea.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sea\": () => (/* binding */ Sea)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\r\n\r\nclass Sea {\r\n    constructor() {\r\n        this.sea = null;        \r\n    }\r\n\r\n    create() {\r\n        this.sea = this.createDomNode(this.sea, 'div', 'sea');        \r\n        this.sea.style.maxHeight = 10 + '%';\r\n        return this.sea;\r\n    }\r\n\r\n    riseLevel() {\r\n        this.sea.style.maxHeight = parseInt(window.getComputedStyle(document.querySelector('.sea')).maxHeight) + 7 + '%';\r\n    }\r\n\r\n    default () {\r\n        this.sea.style.maxHeight = 10 + '%';\r\n    }\r\n\r\n}\r\n\r\nObject.assign(Sea.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\r\n\n\n//# sourceURL=webpack://raindrops/./src/Sea.js?");

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDomNodeMixin\": () => (/* binding */ createDomNodeMixin)\n/* harmony export */ });\nlet createDomNodeMixin = {\r\n\r\n    createDomNode (node, element, ...classes) {\r\n        node = document.createElement(element);\r\n        node.classList.add(...classes);\r\n        return node;\r\n    },\r\n\r\n}\r\n\n\n//# sourceURL=webpack://raindrops/./src/Utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;