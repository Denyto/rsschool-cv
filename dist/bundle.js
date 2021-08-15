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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _imageApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageApi */ \"./src/js/imageApi.js\");\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title */ \"./src/js/title.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather */ \"./src/js/weather.js\");\n/* eslint-disable class-methods-use-this */\n\n\n\n\nclass App {\n  constructor() {\n    this.imageApi = _imageApi__WEBPACK_IMPORTED_MODULE_0__;\n  }\n\n  init() {\n    fetch('https://ipinfo.io?token=ab67f61347a9fa')\n      .then((response) => response.json())\n      .then((com) => {\n        this.imageApi.init(com.city);\n        _title__WEBPACK_IMPORTED_MODULE_1__.init(com.city);\n        _weather__WEBPACK_IMPORTED_MODULE_2__.init();\n      });\n  }\n}\n\n\n//# sourceURL=webpack://fancyweather/./src/js/app.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnTemp\": () => (/* binding */ btnTemp),\n/* harmony export */   \"btnRefresh\": () => (/* binding */ btnRefresh),\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"daysTemp\": () => (/* binding */ daysTemp),\n/* harmony export */   \"todayTemp\": () => (/* binding */ todayTemp),\n/* harmony export */   \"todayHumidity\": () => (/* binding */ todayHumidity),\n/* harmony export */   \"todayWind\": () => (/* binding */ todayWind),\n/* harmony export */   \"todayFeelsLike\": () => (/* binding */ todayFeelsLike),\n/* harmony export */   \"todayDescription\": () => (/* binding */ todayDescription),\n/* harmony export */   \"titleCity\": () => (/* binding */ titleCity),\n/* harmony export */   \"titleDate\": () => (/* binding */ titleDate),\n/* harmony export */   \"time\": () => (/* binding */ time),\n/* harmony export */   \"groupDays\": () => (/* binding */ groupDays),\n/* harmony export */   \"week\": () => (/* binding */ week),\n/* harmony export */   \"months\": () => (/* binding */ months)\n/* harmony export */ });\nconst btnTemp = document.querySelectorAll('.options-button__temp');\r\nconst btnRefresh = document.querySelector('.options-button__refresh');\r\nconst input = document.querySelector('input');\r\nconst daysTemp = document.querySelectorAll('.group-days__day__temp');\r\nconst todayTemp = document.querySelector('.today__temp');\r\nconst todayHumidity = document.querySelector('.humidity');\r\nconst todayWind = document.querySelector('.wind');\r\nconst todayFeelsLike = document.querySelector('.feels-like');\r\nconst todayDescription = document.querySelector('.description');\r\nconst titleCity = document.querySelector('.title__city');\r\nconst titleDate = document.querySelector('.title__line__date');\r\nconst time = document.querySelector('.title__line__time');\r\nconst groupDays = document.querySelectorAll('h3');\r\n\r\nconst week = [\r\n  'Sunday',\r\n  'Monday',\r\n  'Tuesday',\r\n  'Wednesday',\r\n  'Thursday',\r\n  'Friday',\r\n  'Saturday',\r\n];\r\nconst months = [\r\n  'January',\r\n  'February',\r\n  'March',\r\n  'April',\r\n  'May',\r\n  'June',\r\n  'July',\r\n  'August',\r\n  'September',\r\n  'October',\r\n  'November',\r\n  'December',\r\n];\r\n\n\n//# sourceURL=webpack://fancyweather/./src/js/constants.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\r\n\r\nfunction init() {\r\n  function convertFahrenheit(celsius) {\r\n    return Math.round(1.8 * +celsius + 32);\r\n  }\r\n\r\n  function temp() {\r\n    const [temp1, temp2, temp3, tempToday] = [\r\n      _constants__WEBPACK_IMPORTED_MODULE_0__.daysTemp[0].innerText,\r\n      _constants__WEBPACK_IMPORTED_MODULE_0__.daysTemp[1].innerText,\r\n      _constants__WEBPACK_IMPORTED_MODULE_0__.daysTemp[2].innerText,\r\n      _constants__WEBPACK_IMPORTED_MODULE_0__.todayTemp.innerText,\r\n    ];\r\n    _constants__WEBPACK_IMPORTED_MODULE_0__.btnTemp.forEach((elem) => elem.addEventListener('click', () => {\r\n      if (elem.innerText === 'oF') {\r\n        if (!elem.classList.contains('options-button__temp_active')) {\r\n          [\r\n            _constants__WEBPACK_IMPORTED_MODULE_0__.daysTemp[0].innerText,\r\n            _constants__WEBPACK_IMPORTED_MODULE_0__.daysTemp[1].innerText,\r\n            _constants__WEBPACK_IMPORTED_MODULE_0__.daysTemp[2].innerText,\r\n            _constants__WEBPACK_IMPORTED_MODULE_0__.todayTemp.innerText,\r\n          ] = [\r\n            convertFahrenheit(temp1),\r\n            convertFahrenheit(temp2),\r\n            convertFahrenheit(temp3),\r\n            convertFahrenheit(tempToday),\r\n          ];\r\n        }\r\n      }\r\n      if (elem.innerText === 'oC') {\r\n        [\r\n          _constants__WEBPACK_IMPORTED_MODULE_0__.daysTemp[0].innerText,\r\n          _constants__WEBPACK_IMPORTED_MODULE_0__.daysTemp[1].innerText,\r\n          _constants__WEBPACK_IMPORTED_MODULE_0__.daysTemp[2].innerText,\r\n          _constants__WEBPACK_IMPORTED_MODULE_0__.todayTemp.innerText,\r\n        ] = [temp1, temp2, temp3, tempToday];\r\n      }\r\n    }));\r\n  }\r\n  temp();\r\n\r\n  _constants__WEBPACK_IMPORTED_MODULE_0__.btnTemp.forEach((item) => {\r\n    item.addEventListener('click', () => {\r\n      _constants__WEBPACK_IMPORTED_MODULE_0__.btnTemp.forEach((elem) => elem.classList.remove('options-button__temp_active'));\r\n      item.classList.add('options-button__temp_active');\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://fancyweather/./src/js/temp.js?");

/***/ }),

/***/ "./src/js/title.js":
/*!*************************!*\
  !*** ./src/js/title.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\r\n\r\nfunction init(city) {\r\n  const today = new Date();\r\n  const weekDay = today.getDay();\r\n\r\n  function setDate() {\r\n    return `${_constants__WEBPACK_IMPORTED_MODULE_0__.week[weekDay].substring(0, 3)} ${today.getDate()} ${\r\n      _constants__WEBPACK_IMPORTED_MODULE_0__.months[today.getMonth()]\r\n    }`;\r\n  }\r\n\r\n  function setDayWeek() {\r\n    if (weekDay === 4) {\r\n      return [_constants__WEBPACK_IMPORTED_MODULE_0__.week[5], _constants__WEBPACK_IMPORTED_MODULE_0__.week[6], _constants__WEBPACK_IMPORTED_MODULE_0__.week[0]];\r\n    }\r\n    if (weekDay === 5) {\r\n      return [_constants__WEBPACK_IMPORTED_MODULE_0__.week[6], _constants__WEBPACK_IMPORTED_MODULE_0__.week[0], _constants__WEBPACK_IMPORTED_MODULE_0__.week[1]];\r\n    }\r\n    if (weekDay === 6) {\r\n      return [_constants__WEBPACK_IMPORTED_MODULE_0__.week[0], _constants__WEBPACK_IMPORTED_MODULE_0__.week[1], _constants__WEBPACK_IMPORTED_MODULE_0__.week[2]];\r\n    }\r\n    return [\r\n      _constants__WEBPACK_IMPORTED_MODULE_0__.week[weekDay + 1],\r\n      _constants__WEBPACK_IMPORTED_MODULE_0__.week[weekDay + 2],\r\n      _constants__WEBPACK_IMPORTED_MODULE_0__.week[weekDay + 3],\r\n    ];\r\n  }\r\n\r\n  _constants__WEBPACK_IMPORTED_MODULE_0__.titleCity.innerText = `${city}`;\r\n  _constants__WEBPACK_IMPORTED_MODULE_0__.titleDate.innerText = setDate();\r\n\r\n  [\r\n    _constants__WEBPACK_IMPORTED_MODULE_0__.groupDays[0].innerText,\r\n    _constants__WEBPACK_IMPORTED_MODULE_0__.groupDays[1].innerText,\r\n    _constants__WEBPACK_IMPORTED_MODULE_0__.groupDays[2].innerText,\r\n  ] = setDayWeek();\r\n\r\n  function addZero(n) {\r\n    return (n < 10 ? '0' : '') + n;\r\n  }\r\n\r\n  function showTime() {\r\n    const todayTime = new Date();\r\n    const hour = todayTime.getHours();\r\n    const min = todayTime.getMinutes();\r\n    const sec = todayTime.getSeconds();\r\n\r\n    _constants__WEBPACK_IMPORTED_MODULE_0__.time.innerText = `${hour}:${addZero(min)}:${addZero(sec)}`;\r\n  }\r\n\r\n  setInterval(showTime, 1000);\r\n}\r\n\n\n//# sourceURL=webpack://fancyweather/./src/js/title.js?");

/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _temp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temp */ \"./src/js/temp.js\");\n\r\n\r\n\r\nfunction init() {\r\n  navigator.geolocation.getCurrentPosition((position) => {\r\n    const { latitude, longitude } = position.coords;\r\n    const urlGeoPosition = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=f7d59d43b1eeefc141d7a88d5ca3dc4c`;\r\n    fetch(urlGeoPosition)\r\n      .then((response) => response.json())\r\n      .then((com) => {\r\n        _constants__WEBPACK_IMPORTED_MODULE_0__.todayTemp.innerText = Math.round(com.current.temp);\r\n        _constants__WEBPACK_IMPORTED_MODULE_0__.todayHumidity.innerText = `HUMIDITY: ${com.current.humidity}%`;\r\n        _constants__WEBPACK_IMPORTED_MODULE_0__.todayWind.innerText = `WIND: ${com.current.wind_speed}m/s`;\r\n        _constants__WEBPACK_IMPORTED_MODULE_0__.todayFeelsLike.innerHTML = `<p>FEELS LIKE: ${Math.floor(com.current.feels_like)}</p>\r\n        <div class=\"feels-like-temp\"></div>`;\r\n        _constants__WEBPACK_IMPORTED_MODULE_0__.todayDescription.innerText = com.current.weather[0].description;\r\n        [\r\n          _constants__WEBPACK_IMPORTED_MODULE_0__.daysTemp[0].innerText,\r\n          _constants__WEBPACK_IMPORTED_MODULE_0__.daysTemp[1].innerText,\r\n          _constants__WEBPACK_IMPORTED_MODULE_0__.daysTemp[2].innerText,\r\n        ] = [\r\n          Math.round(com.daily[1].temp.day),\r\n          Math.round(com.daily[2].temp.day),\r\n          Math.round(com.daily[3].temp.day),\r\n        ];\r\n        _temp__WEBPACK_IMPORTED_MODULE_1__.init();\r\n      });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://fancyweather/./src/js/weather.js?");

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