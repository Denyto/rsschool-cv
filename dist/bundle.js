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

/***/ "./src/Buttons.js":
/*!************************!*\
  !*** ./src/Buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Buttons\": () => (/* binding */ Buttons)\n/* harmony export */ });\n/* harmony import */ var _Raindrops__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Raindrops */ \"./src/Raindrops.js\");\n\r\n\r\nclass Buttons extends _Raindrops__WEBPACK_IMPORTED_MODULE_0__.Raindrops {\r\n    constructor() {\r\n        super();\r\n        this.buttons = null;\r\n        this.button1 = null;\r\n        this.button2 = null;\r\n    }\r\n\r\n    initButtons() {\r\n        this.buttons = this.createDomNode(this.buttons, 'div', 'buttons'); \r\n        this.button1 = this.createDomNode(this.button1, \"button\", \"button\", \"button_1\");\r\n        this.buttons.append(this.button1);\r\n        this.button2 = this.createDomNode(this.button2, \"button\", \"button\", \"button_2\");\r\n        this.buttons.append(this.button2);\r\n        document.querySelector('.section2').append(this.buttons);\r\n\r\n            this.button1.addEventListener('click', () => {\r\n            this.button2.classList.remove('button_demo_active');\r\n            this.toggleStartStop();\r\n        });\r\n        this.button2.addEventListener('click', () => {\r\n            this.button1.classList.remove('button_active');\r\n            this.toggleDemo();\r\n        });\r\n    }\r\n\r\n    toggleStartStop() {\r\n        this.button1.classList.toggle('button_active');\r\n        this.button2.classList.toggle('button_demo_hidden');\r\n    }\r\n\r\n    toggleDemo() {\r\n        this.button2.classList.toggle('button_demo_active');\r\n    }\r\n}\n\n//# sourceURL=webpack://raindrops/./src/Buttons.js?");

/***/ }),

/***/ "./src/Calc.js":
/*!*********************!*\
  !*** ./src/Calc.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calculator\": () => (/* binding */ Calculator)\n/* harmony export */ });\n/* harmony import */ var _Raindrops__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Raindrops */ \"./src/Raindrops.js\");\n\r\n\r\nclass Calculator extends _Raindrops__WEBPACK_IMPORTED_MODULE_0__.Raindrops {\r\n    constructor () {\r\n        super();\r\n        this.calculator = null;\r\n        this.screen = null;\r\n        this.calc = null;\r\n        this.input = null;\r\n    }\r\n\r\n    initCalculator () {\r\n        this.calculator = this.createDomNode(this.calculator, 'div', 'calculator');\r\n        this.screen = this.createDomNode(this.screen, 'div', 'screen');\r\n        this.calc = this.createDomNode(this.calc, 'div', 'calc');\r\n        this.calc.append(this.createButtons());\r\n        this.input = this.createDomNode(this.input, 'input', 'screen-input');\r\n        this.input.id = \"display\";\r\n        this.input.setAttribute(\"value\", \"\");\r\n        this.input.type = \"text\";\r\n        this.input.disabled = \"disabled\";\r\n        this.appendCalcElements();\r\n   \r\n    }\r\n\r\n    createButtons () {\r\n        const fragment = document.createDocumentFragment();\r\n        const btnLayout = [\r\n            \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"0\", \"DEL\", \"CLR\",\r\n            \"Enter\"\r\n        ];\r\n\r\n        btnLayout.forEach(key => {\r\n            const btnElement = document.createElement(\"button\");\r\n            +key || key === '0' ? btnElement.classList.add(\"btn\", \"number\") : btnElement.classList.add(\"btn\", \"operator\");\r\n\r\n            switch (key) {\r\n                case \"DEL\":\r\n                    btnElement.innerHTML = key;\r\n                    btnElement.addEventListener(\"click\", () => {\r\n                        this.input.value.length === 1 ? this.input.value = '' : this.input.value = this.input.value.slice(0, this.input.value.length - 1);\r\n                    });\r\n\r\n                    break;\r\n\r\n                case \"CLR\":\r\n\r\n                    btnElement.innerHTML = key;\r\n                    btnElement.addEventListener(\"click\", () => {\r\n                        this.input.value = '';\r\n                    });\r\n\r\n                    break;\r\n\r\n                case \"Enter\":\r\n\r\n                    btnElement.classList.add(\"enter\");\r\n                    btnElement.innerHTML = key;\r\n                    btnElement.addEventListener(\"click\", () => {\r\n                        if (this.input.value !== '') {\r\n                            let result = +this.input.value;\r\n                            console.log(result);\r\n                        }\r\n                    });\r\n\r\n                    break;\r\n\r\n                default:\r\n\r\n                    btnElement.textContent = key;\r\n                    btnElement.addEventListener(\"click\", () => {\r\n                        if (this.input.value === '' || this.input.value === '0') {\r\n                            this.input.value = key;\r\n                        } else {\r\n                            this.input.value += key;\r\n                        }\r\n                    });\r\n                    break;\r\n            }\r\n            fragment.append(btnElement);\r\n        });\r\n        return fragment;\r\n    }\r\n\r\n    appendCalcElements () {\r\n        this.calculator.append(this.screen);\r\n        this.calculator.append(this.calc);\r\n        this.screen.append(this.input);\r\n        document.querySelector('.section2').append(this.calculator);\r\n    }\r\n}\n\n//# sourceURL=webpack://raindrops/./src/Calc.js?");

/***/ }),

/***/ "./src/Drop.js":
/*!*********************!*\
  !*** ./src/Drop.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Drop\": () => (/* binding */ Drop)\n/* harmony export */ });\n/* harmony import */ var _Raindrops__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Raindrops */ \"./src/Raindrops.js\");\n\r\n\r\nclass Drop extends _Raindrops__WEBPACK_IMPORTED_MODULE_0__.Raindrops {\r\n    constructor(expression, id) {\r\n        super();\r\n        this.id = id;\r\n        this.expression = expression;\r\n        this.drop = null;\r\n        this.space = null;\r\n        this.span = null;\r\n        this.topSea = 0;\r\n        this.start = 0;\r\n        this.result = 0;\r\n        this.timeId = 0;\r\n        this.zIndex = 0;\r\n    }\r\n\r\n    initDrop() {\r\n        this.drop = this.createDomNode(this.drop, 'div', 'drop');\r\n        this.drop.setAttribute('id', this.id);\r\n        this.drop.style.left = Math.round(62 * Math.random()) + 'vw';\r\n        this.span = document.createElement('span');\r\n        this.span.innerHTML = this.expression;\r\n        this.drop.prepend(this.span);\r\n        document.querySelector('.space').append(this.drop);        \r\n        this.run();\r\n    }\r\n\r\n    move() {        \r\n        let bottomDrop = this.drop.getBoundingClientRect().top + pageYOffset + this.drop.getBoundingClientRect().height;\r\n        this.topSea = document.querySelector('.sea').getBoundingClientRect().top + pageYOffset;\r\n        \r\n        this.drop.style.top = this.start + 'vh';\r\n        this.start += 0.2;\r\n\r\n        if (bottomDrop > this.topSea) {\r\n            document.querySelector('.score').innerHTML = `Score: ${this.result - 1}`\r\n            this.drop.remove();\r\n            clearInterval(this.timeId, 100);\r\n            console.log('ok');\r\n            document.querySelector('.sea').style.maxHeight = parseInt(window.getComputedStyle(document.querySelector('.sea')).maxHeight) + 5 + '%';\r\n        }\r\n    }\r\n\r\n    run() {\r\n        this.timeId = setInterval(() => {     \r\n            this.move();\r\n        }, 100);\r\n    }\r\n\r\n    stop() {\r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://raindrops/./src/Drop.js?");

/***/ }),

/***/ "./src/Raindrops.js":
/*!**************************!*\
  !*** ./src/Raindrops.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Raindrops\": () => (/* binding */ Raindrops)\n/* harmony export */ });\nclass Raindrops {\r\n    constructor() {\r\n        this.raindrops = null;\r\n        this.wrapper = null;\r\n        this.section1 = null;\r\n        this.section2 = null;\r\n        this.space = null; \r\n        this.span = null;\r\n        this.sea = null;\r\n        this.start = 0;\r\n        this.topSea = 0;\r\n        this.res = 0;\r\n    }\r\n\r\n\r\n\r\n    initRaindrops() {\r\n        this.raindrops = this.createDomNode(this.raindrops, 'div', 'raindrops');\r\n        this.wrapper = this.createDomNode(this.wrapper, 'div', 'wrapper');\r\n        this.section1 = this.createDomNode(this.section1, 'section', 'section1');\r\n        this.section2 = this.createDomNode(this.section2, 'section', 'section2');\r\n        this.raindrops.prepend(this.wrapper);   \r\n        this.wrapper.prepend(this.section2);\r\n        this.wrapper.prepend(this.section1);\r\n        this.space = this.createDomNode(this.space, 'div', 'space');\r\n        this.section1.prepend(this.space);\r\n        this.sea = this.createDomNode(this.sea, 'div', 'sea');     \r\n        this.section1.append(this.sea);\r\n        document.body.prepend(this.raindrops);\r\n    }\r\n\r\n\r\n    // createDrop(expression) {\r\n    //     let d = document.createElement('div');\r\n    //     d.classList = 'drop';\r\n    //     d.style.top = 1 + 'vh';\r\n    //     d.style.left = Math.round(62 * Math.random()) + 'vw';\r\n    //     Raindrops.elements.span.innerHTML = expression;\r\n    //     d.append(Raindrops.elements.span);\r\n    //     Raindrops.elements.section1.prepend(d);\r\n    // }\r\n\r\n    createDomNode(node, element, ...classes) {\r\n        node = document.createElement(element);\r\n        node.classList.add(...classes);\r\n        return node;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://raindrops/./src/Raindrops.js?");

/***/ }),

/***/ "./src/Score.js":
/*!**********************!*\
  !*** ./src/Score.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Score\": () => (/* binding */ Score)\n/* harmony export */ });\n/* harmony import */ var _Raindrops__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Raindrops */ \"./src/Raindrops.js\");\n\r\n\r\nclass Score extends _Raindrops__WEBPACK_IMPORTED_MODULE_0__.Raindrops {\r\n    constructor(number = 0) {\r\n        super();\r\n        this.number = number;\r\n        this.score = null;\r\n    }\r\n\r\n    initScore () {\r\n        this.score = document.createElement('div');\r\n        this.score.classList.add('score');\r\n        this.score.innerHTML = `Score: ${this.number}`\r\n        document.querySelector('.section2').append(this.score);\r\n    }\r\n}\n\n//# sourceURL=webpack://raindrops/./src/Score.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Raindrops__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Raindrops */ \"./src/Raindrops.js\");\n/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Score */ \"./src/Score.js\");\n/* harmony import */ var _Calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calc */ \"./src/Calc.js\");\n/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Buttons */ \"./src/Buttons.js\");\n/* harmony import */ var _Drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Drop */ \"./src/Drop.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {\r\n    generateRaindrops();\r\n    generateScore();\r\n    generateCalculator();\r\n    generateButtons();\r\n    generateDrop();  \r\n    setTimeout(generateDrop, Math.random() * 20000);\r\n    setTimeout(generateDrop, Math.random() * 20000);\r\n\r\n});\r\n\r\nconst generateRaindrops = () => {\r\n    let raindrops = new _Raindrops__WEBPACK_IMPORTED_MODULE_0__.Raindrops;\r\n    raindrops.initRaindrops();\r\n};\r\n\r\nconst generateCalculator = () => {\r\n    let calc = new _Calc__WEBPACK_IMPORTED_MODULE_2__.Calculator;    \r\n    calc.initCalculator();\r\n}\r\n\r\nconst generateScore = () => {\r\n    let score = new _Score__WEBPACK_IMPORTED_MODULE_1__.Score();\r\n    score.initScore();\r\n};\r\n\r\nconst generateButtons = () => {\r\n    let buttons = new _Buttons__WEBPACK_IMPORTED_MODULE_3__.Buttons;\r\n    buttons.initButtons();\r\n};\r\n\r\nconst generateDrop = () => {\r\n    let drop = new _Drop__WEBPACK_IMPORTED_MODULE_4__.Drop('1+2', Math.random());\r\n    drop.initDrop();   \r\n}\r\n\r\n\n\n//# sourceURL=webpack://raindrops/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;