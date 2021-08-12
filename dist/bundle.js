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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/js/app */ \"./src/js/app.js\");\n\n\nconst app = new _src_js_app__WEBPACK_IMPORTED_MODULE_0__.App();\napp.init();\n\n\n//# sourceURL=webpack://fancyweather/./main.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _imageApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageApi */ \"./src/js/imageApi.js\");\n/* harmony import */ var _temp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temp */ \"./src/js/temp.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today */ \"./src/js/today.js\");\n/* eslint-disable class-methods-use-this */\n\n\n\n\nclass App {\n  constructor() {\n    this.imageApi = _imageApi__WEBPACK_IMPORTED_MODULE_0__;\n  }\n\n  init() {\n    fetch('https://ipinfo.io?token=ab67f61347a9fa')\n      .then((response) => response.json())\n      .then((com) => {\n        _imageApi__WEBPACK_IMPORTED_MODULE_0__.init(com.city);\n        _today__WEBPACK_IMPORTED_MODULE_2__.init(com.city);\n        _temp__WEBPACK_IMPORTED_MODULE_1__.init();\n      });\n  }\n}\n\n\n//# sourceURL=webpack://fancyweather/./src/js/app.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnTemp\": () => (/* binding */ btnTemp),\n/* harmony export */   \"btnRefresh\": () => (/* binding */ btnRefresh),\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"daysTemp\": () => (/* binding */ daysTemp),\n/* harmony export */   \"titleCity\": () => (/* binding */ titleCity),\n/* harmony export */   \"titleDate\": () => (/* binding */ titleDate),\n/* harmony export */   \"week\": () => (/* binding */ week),\n/* harmony export */   \"months\": () => (/* binding */ months)\n/* harmony export */ });\nconst btnTemp = document.querySelectorAll('.options-button__temp');\r\nconst btnRefresh = document.querySelector('.options-button__refresh');\r\nconst input = document.querySelector('input');\r\nconst daysTemp = document.querySelectorAll('.group-days__day__temp');\r\nconst titleCity = document.querySelector('.title__city');\r\nconst titleDate = document.querySelector('.title__line__date');\r\nconst week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\r\nconst months = [\r\n  'January',\r\n  'February',\r\n  'March',\r\n  'April',\r\n  'May',\r\n  'June',\r\n  'July',\r\n  'August',\r\n  'September',\r\n  'October',\r\n  'November',\r\n  'December',\r\n];\r\n\n\n//# sourceURL=webpack://fancyweather/./src/js/constants.js?");

/***/ }),

/***/ "./src/js/imageApi.js":
/*!****************************!*\
  !*** ./src/js/imageApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\n\nfunction init(city) {\n  const cityInner = city;\n\n  function random(length) {\n    return Math.round(Math.random() * length);\n  }\n\n  function getImage(str) {\n    const lacation = str || cityInner;\n    fetch(\n      `https://pixabay.com/api/?key=22803653-ca6c414c80e4b5e1b9317fb1d&q=${lacation}&image_type=photo`,\n    )\n      .then((response) => response.json())\n      .then((com) => {\n        document.body.style.backgroundImage = `url(\"${\n          com.hits[random(com.hits.length)].largeImageURL\n        }\")`;\n      });\n  }\n\n  document.addEventListener('keydown', (e) => {\n    if (e.key === 'Enter' && _constants__WEBPACK_IMPORTED_MODULE_0__.input.value !== '') {\n      getImage(_constants__WEBPACK_IMPORTED_MODULE_0__.input.value);\n      _constants__WEBPACK_IMPORTED_MODULE_0__.input.value = '';\n    }\n  });\n\n  _constants__WEBPACK_IMPORTED_MODULE_0__.btnRefresh.addEventListener('click', () => {\n    _constants__WEBPACK_IMPORTED_MODULE_0__.btnRefresh.classList.add('options-button__refresh_dis');\n    setTimeout(\n      () => _constants__WEBPACK_IMPORTED_MODULE_0__.btnRefresh.classList.remove('options-button__refresh_dis'),\n      500,\n    );\n    getImage();\n  });\n\n  getImage();\n}\n\n\n//# sourceURL=webpack://fancyweather/./src/js/imageApi.js?");

/***/ }),

/***/ "./src/js/temp.js":
/*!************************!*\
  !*** ./src/js/temp.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\r\n\r\nfunction init() {\r\n  function convertFahrenheit(celsius) {\r\n    return Math.round(1.8 * +celsius + 32);\r\n  }\r\n\r\n  function temp() {\r\n    _constants__WEBPACK_IMPORTED_MODULE_0__.btnTemp.forEach((elem) => elem.addEventListener('click', () => {\r\n      if (elem.innerText === 'oF') {\r\n        if (!elem.classList.contains('options-button__temp_active')) {\r\n          _constants__WEBPACK_IMPORTED_MODULE_0__.daysTemp.forEach((elm) => {\r\n            const el = elm;\r\n            el.innerText = convertFahrenheit(el.innerText);\r\n          });\r\n        }\r\n      }\r\n    }));\r\n  }\r\n  temp();\r\n\r\n  _constants__WEBPACK_IMPORTED_MODULE_0__.btnTemp.forEach((item) => {\r\n    item.addEventListener('click', () => {\r\n      _constants__WEBPACK_IMPORTED_MODULE_0__.btnTemp.forEach((elem) => elem.classList.remove('options-button__temp_active'));\r\n      item.classList.add('options-button__temp_active');\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://fancyweather/./src/js/temp.js?");

/***/ }),

/***/ "./src/js/today.js":
/*!*************************!*\
  !*** ./src/js/today.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\r\n\r\nfunction init(city) {\r\n  function setDate() {\r\n    const today = new Date();\r\n    return `${_constants__WEBPACK_IMPORTED_MODULE_0__.week[today.getDay()]} ${today.getDate()} ${\r\n      _constants__WEBPACK_IMPORTED_MODULE_0__.months[today.getMonth()]\r\n    }`;\r\n  }\r\n  _constants__WEBPACK_IMPORTED_MODULE_0__.titleCity.innerText = `${city}`;\r\n  _constants__WEBPACK_IMPORTED_MODULE_0__.titleDate.innerText = setDate();\r\n}\r\n\n\n//# sourceURL=webpack://fancyweather/./src/js/today.js?");

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