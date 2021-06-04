/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Calc.js":
/*!*********************!*\
  !*** ./src/Calc.js ***!
  \*********************/
/***/ (() => {

eval("\r\n// let buttons = document.querySelectorAll('.btn.number');\r\n// let display = document.getElementById('display');\r\n// let operators = document.querySelectorAll('.operator');\r\n// let drop = document.querySelector('.drop');\r\n\r\n\r\n\r\n// buttons.forEach(button => button.addEventListener('click', () => {\r\n//     if (display.value === '' || display.value === '0') {\r\n//         display.value = button.textContent;\r\n//     } else {\r\n//         display.value += button.textContent;\r\n//     }    \r\n// }));\r\n\r\n// operators.forEach(operator => operator.addEventListener('click', () => {\r\n//     if (operator.textContent === 'DEL') {\r\n//         display.value.length === 1 ? display.value = '' : display.value = display.value.slice(0, display.value.length - 1);\r\n//     }\r\n//     if (operator.textContent === 'CLR') {\r\n//         display.value = '';\r\n//     }\r\n//     if (operator.textContent === 'Enter') {\r\n//         if (display.value !== '') {\r\n//             let result = +display.value;\r\n//             console.log(result);\r\n//         }\r\n             \r\n//     }\r\n// }));\r\n\r\n\r\n\n\n//# sourceURL=webpack://raindrops/./src/Calc.js?");

/***/ }),

/***/ "./src/Init.js":
/*!*********************!*\
  !*** ./src/Init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Raindrops\": () => (/* binding */ Raindrops)\n/* harmony export */ });\nconst Raindrops = {\r\n    elements: {\r\n        raindrops: null,\r\n        wrapper: null,\r\n        section1: null,\r\n        section2: null,\r\n        space: null,\r\n        drop: null,\r\n        span: null,\r\n        sea: null,\r\n        score: null,\r\n        calculator: null,\r\n        screen: null,\r\n        input: null,\r\n        buttons: null,\r\n        button1: null,\r\n        button2: null,\r\n        calc: null\r\n    },\r\n\r\n    prop: {\r\n        start: 0,\r\n        topSea: 0,\r\n        res: 0,\r\n    },\r\n\r\n    init() {\r\n        this.elements.raindrops = document.createElement(\"div\");\r\n        this.elements.raindrops.classList.add(\"raindrops\");\r\n        this.elements.wrapper = document.createElement(\"div\");\r\n        this.elements.wrapper.classList.add(\"wrapper\");\r\n        this.elements.raindrops.prepend(this.elements.wrapper);\r\n        this.elements.section1 = document.createElement(\"section\");\r\n        this.elements.section2 = document.createElement(\"section\");\r\n        this.elements.section1.classList.add(\"section1\");\r\n        this.elements.section2.classList.add(\"section2\");\r\n        this.elements.wrapper.prepend(this.elements.section2);\r\n        this.elements.wrapper.prepend(this.elements.section1);\r\n        this.elements.space = document.createElement(\"div\");\r\n        this.elements.space.classList.add(\"space\");\r\n        this.elements.section1.prepend(this.elements.space);\r\n        this.elements.drop = document.createElement(\"div\");\r\n        this.elements.drop.classList.add(\"drop\");\r\n        this.elements.space.prepend(this.elements.drop);\r\n        this.elements.span = document.createElement(\"span\");\r\n        this.elements.drop.prepend(this.elements.span);\r\n        this.elements.sea = document.createElement(\"div\");\r\n        this.elements.sea.classList.add(\"sea\");\r\n        this.elements.section1.append(this.elements.sea);\r\n        this.elements.score = document.createElement(\"div\");\r\n        this.elements.score.classList.add(\"score\");\r\n        this.elements.score.textContent = \"Score: 0\";\r\n        this.elements.section2.append(this.elements.score);\r\n        this.elements.calculator = document.createElement(\"div\");\r\n        this.elements.calculator.classList.add(\"calculator\");\r\n        this.elements.section2.append(this.elements.calculator);\r\n        this.elements.buttons = document.createElement(\"div\");\r\n        this.elements.buttons.classList.add(\"buttons\");\r\n        this.elements.section2.append(this.elements.buttons);\r\n        this.elements.button1 = document.createElement(\"button\");\r\n        this.elements.button1.classList.add(\"button\", \"button_1\");\r\n        this.elements.buttons.append(this.elements.button1);\r\n        this.elements.button2 = document.createElement(\"button\");\r\n        this.elements.button2.classList.add(\"button\", \"button_2\");\r\n        this.elements.buttons.append(this.elements.button2);\r\n        this.elements.screen = document.createElement(\"div\");\r\n        this.elements.screen.classList.add(\"screen\");\r\n        this.elements.calculator.append(this.elements.screen);\r\n        this.elements.input = document.createElement(\"input\");\r\n        this.elements.input.classList.add(\"screen-input\");\r\n        this.elements.input.id = \"display\";\r\n        this.elements.input.setAttribute(\"value\", \"\");\r\n        this.elements.input.type = \"text\";\r\n        this.elements.input.disabled = \"disabled\";\r\n        this.elements.screen.append(this.elements.input);\r\n        this.elements.calc = document.createElement(\"div\");\r\n        this.elements.calc.classList.add(\"calc\");\r\n        this.elements.calculator.append(this.elements.calc);\r\n        this.elements.calc.append(this._createButtons());\r\n        document.body.prepend(this.elements.raindrops);\r\n\r\n\r\n        this.elements.button1.addEventListener('click', () => {\r\n            this.elements.button2.classList.remove('button_demo_active');\r\n            this.toggleStartStop();\r\n        });\r\n        this.elements.button2.addEventListener('click', () => {\r\n            this.elements.button1.classList.remove('button_active');\r\n            this.toggleDemo();\r\n        });\r\n\r\n\r\n\r\n    },\r\n\r\n    _createButtons() {\r\n        const fragment = document.createDocumentFragment();\r\n        const btnLayout = [\r\n            \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"0\", \"DEL\", \"CLR\",\r\n            \"Enter\"\r\n        ];\r\n\r\n        btnLayout.forEach(key => {\r\n            const btnElement = document.createElement(\"button\");\r\n            +key || key === '0' ? btnElement.classList.add(\"btn\", \"number\") : btnElement.classList.add(\"btn\", \"operator\");\r\n\r\n            switch (key) {\r\n                case \"DEL\":\r\n                    btnElement.innerHTML = key;\r\n                    btnElement.addEventListener(\"click\", () => {\r\n                        this.elements.input.value.length === 1 ? this.elements.input.value = '' : this.elements.input.value = this.elements.input.value.slice(0, this.elements.input.value.length - 1);\r\n                    });\r\n\r\n                    break;\r\n\r\n                case \"CLR\":\r\n\r\n                    btnElement.innerHTML = key;\r\n                    btnElement.addEventListener(\"click\", () => {\r\n                        this.elements.input.value = '';\r\n                    });\r\n\r\n                    break;\r\n\r\n                case \"Enter\":\r\n\r\n                    btnElement.classList.add(\"enter\");\r\n                    btnElement.innerHTML = key;\r\n                    btnElement.addEventListener(\"click\", () => {\r\n                        if (this.elements.input.value !== '') {\r\n                            let result = +this.elements.input.value;\r\n                            console.log(result);\r\n                        }\r\n                    });\r\n\r\n                    break;\r\n\r\n                default:\r\n\r\n                    btnElement.textContent = key;\r\n                    btnElement.addEventListener(\"click\", () => {\r\n                        if (this.elements.input.value === '' || this.elements.input.value === '0') {\r\n                            this.elements.input.value = key;\r\n                        } else {\r\n                            this.elements.input.value += key;\r\n                        }\r\n                    });\r\n                    break;\r\n            }\r\n            fragment.append(btnElement);\r\n        });\r\n        return fragment;\r\n    },\r\n\r\n    toggleStartStop() {\r\n        this.elements.button1.classList.toggle('button_active');\r\n        this.elements.button2.classList.toggle('button_demo_hidden');\r\n    },\r\n\r\n    toggleDemo() {\r\n        this.elements.button2.classList.toggle('button_demo_active');\r\n    },\r\n\r\n    run() {      \r\n        let bottomDrop = Raindrops.elements.drop.getBoundingClientRect().top + pageYOffset + Raindrops.elements.drop.getBoundingClientRect().height;\r\n        Raindrops.prop.topSea = Raindrops.elements.sea.getBoundingClientRect().top + pageYOffset;\r\n        Raindrops.elements.drop.style.zIndex = 1;\r\n        Raindrops.elements.drop.style.top = Raindrops.prop.start + 'vh';\r\n        Raindrops.prop.start += 0.2;\r\n\r\n        if (bottomDrop > Raindrops.prop.topSea) {\r\n            Raindrops.elements.score.innerHTML = `Score: ${Raindrops.prop.res - 1}`\r\n            Raindrops.elements.drop.remove();\r\n            clearInterval(this.timeId, 100);\r\n            Raindrops.elements.sea.style.maxHeight = parseInt(window.getComputedStyle(Raindrops.elements.sea).maxHeight) + 5 + '%';\r\n            Raindrops.createDrop('4×2');\r\n        }\r\n    },\r\n\r\n    createDrop(expression) {\r\n        let d = document.createElement('div');\r\n        d.classList = 'drop';\r\n        d.style.top = 1 + 'vh';\r\n        d.style.left = Math.round(62 * Math.random()) + 'vw';\r\n        Raindrops.elements.span.innerHTML = expression;\r\n        d.append(Raindrops.elements.span);\r\n        Raindrops.elements.section1.prepend(d);\r\n    },\r\n\r\n}\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {\r\n    Raindrops.init();\r\n    let timeId = setInterval(Raindrops.run, 30);\r\n});\n\n//# sourceURL=webpack://raindrops/./src/Init.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Init */ \"./src/Init.js\");\n/* harmony import */ var _Calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calc */ \"./src/Calc.js\");\n/* harmony import */ var _Calc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Calc__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\n// let DROP = document.querySelector('.drop');\r\n// let SEA = document.querySelector('.sea');\r\n// let INNERDROP = document.querySelector('span');\r\n// let SCORE = document.querySelector('.score');\r\n// let section1 = document.querySelector('.section1');\r\n// let btnStartStop = document.querySelector('.button_1');\r\n// let btnDemo = document.querySelector('.button_2');\r\n\r\n// let start = 0;\r\n// let topSea = 0;\r\n// let res = 0;\r\n\r\n// Raindrops.button_1.addEventListener('click', () => {\r\n//     Raindrops.button_2.classList.remove('button_demo_active');\r\n//     toggleStartStop();\r\n// });\r\n// btnDemo.addEventListener('click', () => {\r\n//     btnStartStop.classList.remove('button_active');\r\n//     toggleDemo();\r\n// });\r\n\r\n// function run () {\r\n//     let bottomDrop = DROP.getBoundingClientRect().top + pageYOffset + DROP.getBoundingClientRect().height;\r\n//     topSea = SEA.getBoundingClientRect().top + pageYOffset;\r\n//     DROP.style.zIndex = 1;\r\n//     DROP.style.top = start + 'vh';\r\n//     start += 0.2;\r\n\r\n//     if (bottomDrop > topSea) {\r\n//         SCORE.innerHTML = `Score: ${res - 1}`\r\n//         DROP.remove();\r\n//         clearInterval(timeId, 100);\r\n//         SEA.style.maxHeight = parseInt(window.getComputedStyle(SEA).maxHeight) + 5 + '%';    \r\n//         createDrop('4×2');\r\n//     }\r\n// }\r\n\r\n// function createDrop(expression) {\r\n//     let d = document.createElement('div');\r\n//     d.classList = 'drop';\r\n//     d.style.top = 1 + 'vh';\r\n//     d.style.left = Math.round(62 * Math.random()) + 'vw';\r\n//     INNERDROP.innerHTML = expression;\r\n//     d.appendChild(INNERDROP);  \r\n//     section1.prepend(d);\r\n// }\r\n\r\n// function toggleStartStop () {\r\n//     Raindrops.button_1.classList.toggle('button_active');\r\n//     Raindrops.button_2.classList.toggle('button_demo_hidden');\r\n// }\r\n\r\n// function toggleDemo () {\r\n//     btnDemo.classList.toggle('button_demo_active');\r\n// }\r\n\r\n\r\n// let timeId = setInterval(run, 30)\r\n\n\n//# sourceURL=webpack://raindrops/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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