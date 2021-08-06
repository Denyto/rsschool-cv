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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("const btnTemp = document.querySelectorAll('.options-button__temp');\nconst btnRefresh = document.querySelector('.options-button__refresh');\n\nbtnTemp.forEach((item) => {\n  item.addEventListener('click', () => {\n    btnTemp.forEach((a) => a.classList.remove('options-button__temp_active'));\n    item.classList.add('options-button__temp_active');\n  });\n});\n\nfunction random(length) {\n  return Math.round(Math.random() * length);\n}\n\nbtnRefresh.addEventListener('click', () => {\n  btnRefresh.classList.add('options-button__refresh_dis');\n  setTimeout(\n    () => btnRefresh.classList.remove('options-button__refresh_dis'),\n    500,\n  );\n  fetch(\n    'https://pixabay.com/api/?key=22803653-ca6c414c80e4b5e1b9317fb1d&q=summer&image_type=photo',\n  )\n    .then((response) => response.json())\n    .then((com) => {\n      document.body.style.backgroundImage = `url(\"${\n        com.hits[random(com.hits.length)].largeImageURL\n      }\")`;\n    });\n});\n\n\n//# sourceURL=webpack://fancyweather/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;