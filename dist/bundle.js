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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/App */ \"./src/App.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const app = new _src_App__WEBPACK_IMPORTED_MODULE_0__.App();\n  app.initComponents();\n  const melody = document.getElementById('melody');\n  const calc = document.querySelector('.calc');\n  const ocean = document.getElementById('ocean');\n\n  calc.addEventListener('click', (e) => app.calculationGame(e));\n  window.addEventListener('keydown', (e) => app.calculationGame(e));\n  window.addEventListener('keydown', (e) => {\n    if (e.code === 'Escape' && !melody.paused) {\n      app.setDefaultGame();\n      melody.pause();\n      melody.currentTime = 0;\n    }\n  });\n\n  function checkPlaying() {\n    if (melody.paused || ocean.paused) {\n      melody.play();\n      ocean.play();\n    } else {\n      melody.pause();\n      melody.currentTime = 0;\n    }\n  }\n\n  document.querySelector('.button-startstop').addEventListener('click', () => {\n    melody.play();\n    ocean.play();\n    app.startGame(() => checkPlaying());\n  });\n\n  document.querySelector('.button-demo').addEventListener('click', () => {\n    checkPlaying();\n    app.setDemoMode(() => checkPlaying());\n  });\n\n  function moveClouds() {\n    let y = 0;\n    const waves = document.querySelector('.waves');\n\n    function move() {\n      y += 0.5;\n      waves.style.backgroundPosition = `${y}px 0px`;\n      requestAnimationFrame(move);\n    }\n    requestAnimationFrame(move);\n  }\n\n  moveClouds();\n});\n\n\n//# sourceURL=webpack://raindrops/./main.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n/* harmony import */ var _Raindrops__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Raindrops */ \"./src/Raindrops.js\");\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ \"./src/Wrapper.js\");\n/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Score */ \"./src/Score.js\");\n/* harmony import */ var _Calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Calc */ \"./src/Calc.js\");\n/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Buttons */ \"./src/Buttons.js\");\n/* harmony import */ var _Drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Drop */ \"./src/Drop.js\");\n/* harmony import */ var _Sea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sea */ \"./src/Sea.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modal */ \"./src/Modal.js\");\n/* harmony import */ var _Sectiongame__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Sectiongame */ \"./src/Sectiongame.js\");\n/* harmony import */ var _Sectioncalc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Sectioncalc */ \"./src/Sectioncalc.js\");\n/* harmony import */ var _Space__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Space */ \"./src/Space.js\");\n/* harmony import */ var _Waves__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Waves */ \"./src/Waves.js\");\n/* harmony import */ var _Exp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Exp */ \"./src/Exp.js\");\n/* harmony import */ var _Fullscreen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Fullscreen */ \"./src/Fullscreen.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass App {\n  constructor() {\n    this.timeId = null;\n    this.timeIdDemo = null;\n    this.raindropsApp = new _Raindrops__WEBPACK_IMPORTED_MODULE_1__.Raindrops().create();\n    this.wrapper = new _Wrapper__WEBPACK_IMPORTED_MODULE_2__.Wrapper().create();\n    this.sectionGame = new _Sectiongame__WEBPACK_IMPORTED_MODULE_9__.Sectiongame().create();\n    this.sectionCalc = new _Sectioncalc__WEBPACK_IMPORTED_MODULE_10__.Sectioncalc().create();\n    this.spaceApp = new _Space__WEBPACK_IMPORTED_MODULE_11__.Space();\n    this.scoreApp = new _Score__WEBPACK_IMPORTED_MODULE_3__.Score();\n    this.calculatorApp = new _Calc__WEBPACK_IMPORTED_MODULE_4__.Calculator();\n    this.fullScreen = new _Fullscreen__WEBPACK_IMPORTED_MODULE_14__.FullScreen();\n    this.buttonsApp = new _Buttons__WEBPACK_IMPORTED_MODULE_5__.Buttons();\n    this.dropApp = new _Drop__WEBPACK_IMPORTED_MODULE_6__.Drop();\n    this.seaApp = new _Sea__WEBPACK_IMPORTED_MODULE_7__.Sea();\n    this.toggleStart = true;\n    this.toggDemo = true;\n    this.tick = 3000;\n    this.waves = new _Waves__WEBPACK_IMPORTED_MODULE_12__.default();\n    this.speedTick = 40;\n    this.counterdrop = 1;\n  }\n\n  initComponents() {\n    this.raindropsApp.prepend(this.wrapper);\n    this.wrapper.prepend(this.sectionCalc);\n    this.wrapper.prepend(this.sectionGame);\n    this.sectionGame.prepend(this.spaceApp.create());\n    this.sectionGame.append(this.seaApp.create());\n    document.body.prepend(this.raindropsApp);\n    this.scoreApp.create();\n    this.calculatorApp.create();\n    this.buttonsApp.create();\n    this.fullScreen.create();\n    document.querySelector('.section-game').prepend(this.waves.create());\n  }\n\n  startGame(stopMelody) {\n    clearInterval(this.timeIdDemo);\n    this.dropApp.default();\n    this.speedTick = 40;\n    if (this.toggleStart) {\n      this.calculatorApp.default();\n      this.scoreApp.default();\n      this.toggleStart = false;\n      this.counterdrop = 1;\n      this.timeId = setInterval(() => {\n        this.selectDrop(stopMelody);\n      }, this.tick);\n    } else {\n      stopMelody();\n      this.setDefaultGame();\n    }\n  }\n\n  setDemoMode(stopMelody) {\n    if (this.toggDemo) {\n      this.toggDemo = false;\n      this.timeIdDemo = setInterval(() => {\n        this.selectDrop(stopMelody);\n        this.calculationDemo();\n      }, this.tick);\n    } else {\n      this.setDefaultGame();\n    }\n  }\n\n  selectDrop(stopMelody) {\n    this.counterdrop += 1;\n    if (this.counterdrop % 5 === 0) {\n      this.createDrobs().create(\n        () => {\n          this.addMistake();\n        },\n        () => {\n          this.setGameover();\n        },\n        100,\n        this.createExpression(['×', '÷']),\n        true,\n      );\n    } else {\n      this.createDrobs().create(\n        () => {\n          this.addMistake();\n        },\n        () => {\n          this.setGameover();\n          stopMelody();\n        },\n        this.setSpeedDrop(),\n        this.createExpression(['+', '-']),\n        '',\n      );\n    }\n  }\n\n  createDrobs() {\n    this.dropApp = new _Drop__WEBPACK_IMPORTED_MODULE_6__.Drop();\n    return this.dropApp;\n  }\n\n  calculationGame(e) {\n    if (!this.toggleStart) {\n      this.calculatorApp.calculate(\n        () => this.scoreApp.add(),\n        () => this.scoreApp.addBonus(),\n        e,\n      );\n    }\n  }\n\n  calculationDemo() {\n    this.calculatorApp.calculate(\n      () => this.scoreApp.add(),\n      () => this.scoreApp.addBonus(),\n    );\n  }\n\n  setSpeedDrop() {\n    const score = this.scoreApp.show();\n    if (score <= 50) return this.speedTick;\n    this.speedTick -= score > 100 ? 0.3 : 0.1;\n    return this.speedTick;\n  }\n\n  addMistake() {\n    document.getElementById('mistake').play();\n    this.seaApp.riseLevel();\n    this.waves.riseLevel();\n    this.scoreApp.minus();\n    this.calculatorApp.default();\n  }\n\n  setGameover() {\n    document.getElementById('gameover').play();\n    setTimeout(() => {\n      this.setDefaultGame();\n    }, 100);\n  }\n\n  setDefaultGame() {\n    new _Modal__WEBPACK_IMPORTED_MODULE_8__.Modal(\n      this.scoreApp.show(),\n      this.scoreApp.showCountCorrectAnswer(),\n      this.counterdrop - 1,\n    ).create();\n    clearInterval(this.timeId);\n    clearInterval(this.timeIdDemo);\n    this.buttonsApp.default();\n    this.calculatorApp.default();\n    this.scoreApp.default();\n    this.seaApp.default();\n    this.waves.default();\n    this.dropApp.default();\n    this.toggleStart = true;\n    this.toggDemo = true;\n    this.speedTick = 40;\n    this.counterdrop = 1;\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  createExpression(array) {\n    const exp = new _Exp__WEBPACK_IMPORTED_MODULE_13__.Expression(array).create();\n    return exp;\n  }\n}\n\nObject.assign(App.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n\n//# sourceURL=webpack://raindrops/./src/App.js?");

/***/ }),

/***/ "./src/Buttons.js":
/*!************************!*\
  !*** ./src/Buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Buttons\": () => (/* binding */ Buttons)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\n\nclass Buttons {\n  constructor() {\n    this.buttons = null;\n    this.buttonGame = null;\n    this.buttonDemo = null;\n  }\n\n  create() {\n    this.buttons = this.createDomNode(this.buttons, 'div', 'buttons');\n    this.buttonGame = this.createDomNode(\n      this.buttonGame,\n      'button',\n      'button',\n      'button-startstop',\n    );\n    this.buttons.append(this.buttonGame);\n    this.buttonDemo = this.createDomNode(\n      this.buttonDemo,\n      'button',\n      'button',\n      'button-demo',\n    );\n    this.buttons.append(this.buttonDemo);\n    document.querySelector('.section-calc').append(this.buttons);\n\n    this.buttonGame.addEventListener('click', () => {\n      this.buttonDemo.classList.remove('button__demo_active');\n      this.toggleStartStop();\n    });\n    this.buttonDemo.addEventListener('click', () => {\n      this.buttonGame.classList.remove('button__startstop_active');\n      this.toggleDemo();\n    });\n  }\n\n  toggleStartStop() {\n    this.buttonGame.classList.toggle('button__startstop_active');\n    this.buttonDemo.classList.toggle('button__demo_hidden');\n  }\n\n  toggleDemo() {\n    this.buttonDemo.classList.toggle('button__demo_active');\n  }\n\n  default() {\n    this.buttonDemo.classList.remove('button__demo_active');\n    this.buttonGame.classList.remove('button__startstop_active');\n    this.buttonDemo.classList.remove('button__demo_hidden');\n  }\n}\n\nObject.assign(Buttons.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n\n//# sourceURL=webpack://raindrops/./src/Buttons.js?");

/***/ }),

/***/ "./src/Calc.js":
/*!*********************!*\
  !*** ./src/Calc.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calculator\": () => (/* binding */ Calculator)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n/* eslint-disable no-nested-ternary */\n\n\nclass Calculator {\n  constructor() {\n    this.calculator = null;\n    this.screen = null;\n    this.calc = null;\n    this.input = null;\n  }\n\n  create() {\n    this.calculator = this.createDomNode(this.calculator, 'div', 'calculator');\n    this.screen = this.createDomNode(this.screen, 'div', 'screen');\n    this.calc = this.createDomNode(this.calc, 'div', 'calc');\n    this.calc.append(this.createButtons());\n    this.input = this.createDomNode(this.input, 'input', 'screen-input');\n    this.input.id = 'display';\n    this.input.setAttribute('value', '');\n    this.input.type = 'text';\n    this.input.disabled = 'disabled';\n    this.appendCalcElements();\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  createButtons() {\n    const fragment = document.createDocumentFragment();\n    const btnLayout = [\n      '1',\n      '2',\n      '3',\n      '4',\n      '5',\n      '6',\n      '7',\n      '8',\n      '9',\n      '0',\n      'DEL',\n      'CLR',\n      'Enter',\n    ];\n\n    btnLayout.forEach((key) => {\n      const btnElement = document.createElement('button');\n      if (+key || key === '0') {\n        btnElement.classList.add('btn', 'number');\n      } else {\n        btnElement.classList.add('btn', 'operator');\n      }\n      switch (key) {\n        case 'CLR' || 0:\n          btnElement.innerHTML = key;\n          break;\n        case 'Enter':\n          btnElement.classList.add('enter');\n          btnElement.innerHTML = key;\n          break;\n        default:\n          btnElement.textContent = key;\n          break;\n      }\n      fragment.append(btnElement);\n    });\n    return fragment;\n  }\n\n  appendCalcElements() {\n    this.calculator.append(this.screen);\n    this.calculator.append(this.calc);\n    this.screen.append(this.input);\n    document.querySelector('.section-calc').append(this.calculator);\n  }\n\n  default() {\n    this.input.value = '';\n  }\n\n  calculate(scoreAdd, scoreAddBonus, e) {\n    if (!e) {\n      const allScreenDrobsDemo = [];\n      document.querySelectorAll('.drop').forEach((item) => {\n        allScreenDrobsDemo.push(+item.getAttribute('data-result'));\n      });\n      const i = Math.round(Math.random() * (allScreenDrobsDemo.length - 1));\n      if (!allScreenDrobsDemo[i] && allScreenDrobsDemo[i] !== 0) {\n        this.input.value = '';\n      } else {\n        setTimeout(() => {\n          this.input.value = allScreenDrobsDemo[i];\n        }, 500);\n      }\n\n      setTimeout(() => {\n        if (\n          document.querySelector(`.drop[data-result=\"${allScreenDrobsDemo[i]}\"]`)\n        ) {\n          document.querySelector(\n            `.drop[data-result=\"${allScreenDrobsDemo[i]}\"]`,\n          ).style.border = '3px solid yellow';\n          setTimeout(() => {\n            if (\n              document\n                .querySelector(`.drop[data-result=\"${allScreenDrobsDemo[i]}\"]`)\n                .getAttribute('data-bonus')\n            ) {\n              setTimeout(() => {\n                document\n                  .querySelectorAll('.drop')\n                  .forEach((item) => item.remove());\n                document.getElementById('bonus').play();\n                scoreAddBonus();\n              }, 2000);\n            } else {\n              document\n                .querySelector(`.drop[data-result=\"${allScreenDrobsDemo[i]}\"]`)\n                .remove();\n              document.getElementById('ok').play();\n              this.input.value = '';\n              scoreAdd();\n            }\n          }, 1000);\n        }\n      }, 2000);\n    } else {\n      let key;\n      if (e.type === 'keydown') {\n        key = (e.keyCode > 47 && e.keyCode < 58) || (e.keyCode > 95 && e.keyCode < 106)\n          ? e.key\n          : e.code === 'Enter'\n            ? e.code\n            : e.code === 'Backspace'\n              ? 'DEL'\n              : e.code === 'Space'\n                ? 'Enter'\n                : e.code === 'Delete'\n                  ? 'CLR'\n                  : e.code === 'NumpadEnter'\n                    ? 'Enter'\n                    : '';\n      }\n      if (e.type === 'click') {\n        key = e.target.innerText;\n      }\n      switch (key) {\n        case 'DEL':\n          if (this.input.value.length === 1) {\n            this.input.value = '';\n          } else {\n            this.input.value = this.input.value.slice(0, this.input.value.length - 1);\n          }\n          break;\n        case 'CLR':\n          this.input.value = '';\n          break;\n        case 'Enter':\n          if (this.input.value !== '') {\n            const userResult = +this.input.value;\n            const allScreenDrobs = document.querySelectorAll('.drop');\n            const rightResultsDrops = [];\n            const rightResultsBonusDrops = [];\n            allScreenDrobs.forEach((item) => {\n              if (item.getAttribute('data-bonus')) {\n                rightResultsBonusDrops.push(+item.getAttribute('data-result'));\n              } else {\n                rightResultsDrops.push(+item.getAttribute('data-result'));\n              }\n            });\n            if (rightResultsBonusDrops.includes(userResult)) {\n              document\n                .querySelectorAll('.drop')\n                .forEach((item) => setTimeout(() => item.remove(), 100));\n              document.getElementById('bonus').play();\n              scoreAddBonus();\n              this.default();\n            } else if (rightResultsDrops.includes(userResult)) {\n              setTimeout(\n                () => document\n                  .querySelector(`.drop[data-result=\"${userResult}\"]`)\n                  .remove(),\n                100,\n              );\n              document.getElementById('ok').play();\n              scoreAdd();\n              this.default();\n            } else {\n              this.default();\n              document.getElementById('mistake').play();\n            }\n          }\n          break;\n        default:\n          if (this.input.value === '' || this.input.value === '0') {\n            this.input.value = key;\n          } else {\n            this.input.value += key;\n          }\n          break;\n      }\n    }\n  }\n}\n\nObject.assign(Calculator.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n\n//# sourceURL=webpack://raindrops/./src/Calc.js?");

/***/ }),

/***/ "./src/Drop.js":
/*!*********************!*\
  !*** ./src/Drop.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Drop\": () => (/* binding */ Drop)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\n\nclass Drop {\n  constructor() {\n    this.drop = null;\n    this.space = null;\n    this.span = null;\n    this.start = 1;\n    this.timeId = null;\n    this.droplevel = 1;\n    this.sealevel = null;\n  }\n\n  create(playMistake, setGameover, speed, expression, isBonusDrop) {\n    this.createDrop(expression, isBonusDrop);\n    if (isBonusDrop) {\n      this.span.classList.add('span-bonus');\n      this.drop.classList.add('drop-bonus');\n    }\n    this.moveDrop(playMistake, setGameover, speed);\n  }\n\n  moveDrop(playMistake, setGameover, speed) {\n    this.timeId = setInterval(() => {\n      this.sealevel = document.querySelector('.sea').getBoundingClientRect().top\n        + pageYOffset;\n      this.droplevel = this.drop.getBoundingClientRect().top\n        + pageYOffset\n        + this.drop.getBoundingClientRect().height;\n      this.drop.style.top = `${this.start}vh`;\n      this.start += 0.2;\n\n      if (this.droplevel > this.sealevel) {\n        this.drop.remove();\n        clearInterval(this.timeId);\n        playMistake();\n        if (parseInt(document.querySelector('.sea').style.maxHeight, 10) > 30) {\n          setGameover();\n        }\n      }\n      if (this.start > 90) {\n        this.drop.remove();\n        clearInterval(this.timeId);\n      }\n    }, speed);\n  }\n\n  default() {\n    document.querySelectorAll('.drop').forEach((item) => {\n      clearInterval(this.timeId);\n      item.remove();\n    });\n  }\n\n  createDrop(expression, isBonusDrop) {\n    const { num1, randomSymbol, num2 } = expression;\n    this.drop = this.createDomNode(this.drop, 'div', 'drop');\n    this.drop.style.left = `${Math.round(62 * Math.random())}vw`;\n    this.span = document.createElement('span');\n    this.span.innerHTML = this.createStringInsideDrop(num1, randomSymbol, num2);\n    this.drop.setAttribute(\n      'data-result',\n      this.createSolutionDataResult(num1, randomSymbol, num2),\n    );\n    this.drop.setAttribute('data-bonus', isBonusDrop);\n    this.drop.prepend(this.span);\n    document.querySelector('.space').append(this.drop);\n  }\n}\n\nObject.assign(Drop.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n\n//# sourceURL=webpack://raindrops/./src/Drop.js?");

/***/ }),

/***/ "./src/Exp.js":
/*!********************!*\
  !*** ./src/Exp.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Expression\": () => (/* binding */ Expression)\n/* harmony export */ });\nclass Expression {\n  constructor(symbols) {\n    this.symbols = symbols;\n  }\n\n  create() {\n    const randomSymbol = this.symbols[Math.round(Math.random())];\n    return {\n      num1: this.getRandomNum(),\n      randomSymbol,\n      num2: this.getRandomNum(),\n    };\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  getRandomNum() {\n    return Math.ceil(Math.random() * 10);\n  }\n}\n\n\n//# sourceURL=webpack://raindrops/./src/Exp.js?");

/***/ }),

/***/ "./src/Fullscreen.js":
/*!***************************!*\
  !*** ./src/Fullscreen.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FullScreen\": () => (/* binding */ FullScreen)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\n\nclass FullScreen {\n  constructor() {\n    this.buttonFullscreen = null;\n  }\n\n  create() {\n    this.buttonFullscreen = this.createDomNode(\n      this.buttonFullscreen,\n      'div',\n      'fullscreen-button',\n    );\n    document.querySelector('.buttons').append(this.buttonFullscreen);\n\n    this.buttonFullscreen.addEventListener(\n      'click',\n      (event) => {\n        if (!event.target.classList.contains('fullscreen-button')) return;\n        if (document.fullscreenElement) {\n          document.exitFullscreen();\n        } else {\n          document.documentElement.requestFullscreen();\n        }\n      },\n      false,\n    );\n  }\n}\n\nObject.assign(FullScreen.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n\n//# sourceURL=webpack://raindrops/./src/Fullscreen.js?");

/***/ }),

/***/ "./src/Modal.js":
/*!**********************!*\
  !*** ./src/Modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\n\nclass Modal {\n  constructor(score, correctAnswer, counterDrop) {\n    this.overlay = null;\n    this.modal = null;\n    this.btn = null;\n    this.scoreResult = null;\n    this.correctResult = null;\n    this.dropsResult = null;\n    this.score = score;\n    this.correctAnswer = correctAnswer;\n    this.counterDrop = counterDrop;\n  }\n\n  create() {\n    this.modal = this.createDomNode(this.modal, 'div', 'modal');\n    this.overlay = this.createDomNode(this.overlay, 'div', 'overlay');\n    this.overlay.style.zIndex = 10;\n    this.scoreResult = this.createDomNode(this.scoreResult, 'div');\n    this.correctResult = this.createDomNode(this.correctResult, 'div');\n    this.dropsResult = this.createDomNode(this.dropsResult, 'div');\n    this.btn = this.createDomNode(this.btn, 'button', 'btn__modal');\n    this.btn.innerHTML = 'OK';\n    this.scoreResult.innerHTML = `Your Score: ${this.score}`;\n    this.correctResult.innerHTML = `Correct Answers: ${this.correctAnswer}`;\n    this.dropsResult.innerHTML = `Drops: ${this.counterDrop}`;\n    this.modal.append(this.scoreResult);\n    this.modal.append(this.correctResult);\n    this.modal.append(this.dropsResult);\n    this.modal.append(this.btn);\n    this.overlay.append(this.modal);\n    document.body.append(this.overlay);\n\n    this.btn.addEventListener('click', () => {\n      this.overlay.remove();\n    });\n  }\n}\n\nObject.assign(Modal.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n\n//# sourceURL=webpack://raindrops/./src/Modal.js?");

/***/ }),

/***/ "./src/Raindrops.js":
/*!**************************!*\
  !*** ./src/Raindrops.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Raindrops\": () => (/* binding */ Raindrops)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\n\nclass Raindrops {\n  constructor() {\n    this.raindrops = null;\n  }\n\n  create() {\n    this.raindrops = this.createDomNode(this.raindrops, 'div', 'raindrops');\n    return this.raindrops;\n  }\n}\n\nObject.assign(Raindrops.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n\n//# sourceURL=webpack://raindrops/./src/Raindrops.js?");

/***/ }),

/***/ "./src/Score.js":
/*!**********************!*\
  !*** ./src/Score.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Score\": () => (/* binding */ Score)\n/* harmony export */ });\nclass Score {\n  constructor() {\n    this.number = 0;\n    this.countCorrectAnswer = 0;\n    this.score = null;\n  }\n\n  create() {\n    this.score = document.createElement('div');\n    this.score.classList.add('score');\n    this.score.innerHTML = `Score: ${this.number}`;\n    document.querySelector('.section-calc').append(this.score);\n  }\n\n  default() {\n    this.number = 0;\n    this.countCorrectAnswer = 0;\n    this.score.innerHTML = `Score: ${this.number}`;\n  }\n\n  add() {\n    this.score.innerHTML = `Score: ${(this.number += 10)}`;\n    this.countCorrectAnswer += 1;\n  }\n\n  addBonus() {\n    this.score.innerHTML = `Score: ${(this.number += 50)}`;\n    this.countCorrectAnswer += 1;\n  }\n\n  minus() {\n    this.score.innerHTML = `Score: ${(this.number -= 10)}`;\n  }\n\n  show() {\n    return this.number;\n  }\n\n  showCountCorrectAnswer() {\n    return this.countCorrectAnswer;\n  }\n}\n\n\n//# sourceURL=webpack://raindrops/./src/Score.js?");

/***/ }),

/***/ "./src/Sea.js":
/*!********************!*\
  !*** ./src/Sea.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sea\": () => (/* binding */ Sea)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\n\nclass Sea {\n  constructor() {\n    this.sea = null;\n  }\n\n  create() {\n    this.sea = this.createDomNode(this.sea, 'div', 'sea');\n    this.default();\n    return this.sea;\n  }\n\n  riseLevel() {\n    this.sea.style.maxHeight = `${\n      parseInt(\n        window.getComputedStyle(document.querySelector('.sea')).maxHeight,\n        10,\n      ) + 10\n    }%`;\n  }\n\n  default() {\n    this.sea.style.maxHeight = '8%';\n  }\n}\nObject.assign(Sea.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n\n//# sourceURL=webpack://raindrops/./src/Sea.js?");

/***/ }),

/***/ "./src/Sectioncalc.js":
/*!****************************!*\
  !*** ./src/Sectioncalc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sectioncalc\": () => (/* binding */ Sectioncalc)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\n\nclass Sectioncalc {\n  constructor() {\n    this.sectionCalc = null;\n  }\n\n  create() {\n    this.sectionCalc = this.createDomNode(\n      this.sectionCalc,\n      'section',\n      'section-calc',\n    );\n    return this.sectionCalc;\n  }\n}\nObject.assign(Sectioncalc.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n\n//# sourceURL=webpack://raindrops/./src/Sectioncalc.js?");

/***/ }),

/***/ "./src/Sectiongame.js":
/*!****************************!*\
  !*** ./src/Sectiongame.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sectiongame\": () => (/* binding */ Sectiongame)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\n\nclass Sectiongame {\n  constructor() {\n    this.sectionGame = null;\n  }\n\n  create() {\n    this.sectionGame = this.createDomNode(\n      this.sectionGame,\n      'section',\n      'section-game',\n    );\n    return this.sectionGame;\n  }\n}\n\nObject.assign(Sectiongame.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n\n//# sourceURL=webpack://raindrops/./src/Sectiongame.js?");

/***/ }),

/***/ "./src/Space.js":
/*!**********************!*\
  !*** ./src/Space.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Space\": () => (/* binding */ Space)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\n\nclass Space {\n  constructor() {\n    this.space = null;\n  }\n\n  create() {\n    this.space = this.createDomNode(this.space, 'div', 'space');\n    return this.space;\n  }\n}\n\nObject.assign(Space.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n\n//# sourceURL=webpack://raindrops/./src/Space.js?");

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDomNodeMixin\": () => (/* binding */ createDomNodeMixin)\n/* harmony export */ });\nconst createDomNodeMixin = {\n  createDomNode(node, element, ...classes) {\n    let nodeInside = node;\n    nodeInside = document.createElement(element);\n    if (classes.length) {\n      nodeInside.classList.add(...classes);\n    }\n    return nodeInside;\n  },\n\n  createStringInsideDrop(x, y, z) {\n    let result;\n    switch (y) {\n      case '-':\n        result = x > z ? `${x}${y}${z}` : `${z}${y}${x}`;\n        break;\n      case '÷':\n        result = x > z && z !== 0 ? `${x * z}${y}${z}` : `${(x + 1) * z}${y}${x + 1}`;\n        break;\n      default:\n        result = `${x}${y}${z}`;\n        break;\n    }\n    return result;\n  },\n\n  createSolutionDataResult(x, y, z) {\n    let result;\n    switch (y) {\n      case '-':\n        result = x > z ? x - z : z - x;\n        break;\n      case '÷':\n        result = x > z ? x : ((x + 1) * z) / (x + 1);\n        break;\n      case '×':\n        result = x * z;\n        break;\n      default:\n        result = x + z;\n        break;\n    }\n    return result;\n  },\n};\n\n\n//# sourceURL=webpack://raindrops/./src/Utils.js?");

/***/ }),

/***/ "./src/Waves.js":
/*!**********************!*\
  !*** ./src/Waves.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Waves)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\n\nclass Waves {\n  constructor() {\n    this.waves = null;\n    this.wave1 = null;\n    this.wave2 = null;\n    this.stone = null;\n  }\n\n  create() {\n    this.waves = this.createDomNode(this.waves, 'div', 'waves');\n    this.wave1 = this.createDomNode(this.wave1, 'div', 'wave1');\n    this.wave2 = this.createDomNode(this.wave2, 'div', 'wave2');\n    this.stone = this.createDomNode(this.stone, 'div', 'stone');\n    this.waves.append(this.wave1);\n    this.waves.append(this.stone);\n    this.waves.append(this.wave2);\n    return this.waves;\n  }\n\n  riseLevel() {\n    this.wave1.style.top = `${\n      parseInt(\n        window.getComputedStyle(document.querySelector('.wave1')).top,\n        10,\n      )\n      - window.screen.height * 0.1\n    }px`;\n    this.wave2.style.top = `${\n      parseInt(\n        window.getComputedStyle(document.querySelector('.wave2')).top,\n        10,\n      )\n      - window.screen.height * 0.1\n    }px`;\n  }\n\n  default() {\n    this.wave1.style.top = `${99}%`;\n    this.wave2.style.top = `${99}%`;\n  }\n}\n\nObject.assign(Waves.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n\n//# sourceURL=webpack://raindrops/./src/Waves.js?");

/***/ }),

/***/ "./src/Wrapper.js":
/*!************************!*\
  !*** ./src/Wrapper.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wrapper\": () => (/* binding */ Wrapper)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\n\nclass Wrapper {\n  constructor() {\n    this.wrapper = null;\n  }\n\n  create() {\n    this.wrapper = this.createDomNode(this.wrapper, 'div', 'wrapper');\n    return this.wrapper;\n  }\n}\n\nObject.assign(Wrapper.prototype, _Utils__WEBPACK_IMPORTED_MODULE_0__.createDomNodeMixin);\n\n\n//# sourceURL=webpack://raindrops/./src/Wrapper.js?");

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