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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tictactoe/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _scripts_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Gameboard.js */ \"./src/scripts/Gameboard.js\");\n/* harmony import */ var _scripts_GameController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/GameController.js */ \"./src/scripts/GameController.js\");\n/* harmony import */ var _scripts_Player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/Player.js */ \"./src/scripts/Player.js\");\n/* harmony import */ var _scripts_playsHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/playsHandler.js */ \"./src/scripts/playsHandler.js\");\n/* harmony import */ var _scripts_resetHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/resetHandler.js */ \"./src/scripts/resetHandler.js\");\n\n\n\n\n\n\n\n// Global variables, to be able to use inside the click event the data generated in submit event.\nlet Players;\nlet gameBoard;\nlet gameController;\n\nconst d = document,\n  $formGame = d.getElementById(\"game-form\"),\n  $gameboard = d.getElementById(\"gameboard\");\n\n$gameboard.classList.add(\"none\");\n\n$formGame.addEventListener(\"submit\", (ev) => {\n  ev.preventDefault();\n\n  Players = {\n    player1: (0,_scripts_Player_js__WEBPACK_IMPORTED_MODULE_3__.default)({\n      name: ev.target.name1.value || \"Trickster\",\n      isCross: true,\n    }),\n    player2: (0,_scripts_Player_js__WEBPACK_IMPORTED_MODULE_3__.default)({\n      name: ev.target.name2.value || \"Joanna\",\n      isCross: false,\n    }),\n  };\n  $gameboard.classList.add(\"grid\");\n  document.querySelector(\n    \".status-text\"\n  ).textContent = `${Players.player1.getName()} You Start the Game ${Players.player1.getMySymbol()}`;\n  gameBoard = (0,_scripts_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n  gameController = (0,_scripts_GameController_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n  $formGame.classList.add(\"none\");\n});\n\n$gameboard.addEventListener(\"click\", (ev) =>\n  (0,_scripts_playsHandler_js__WEBPACK_IMPORTED_MODULE_4__.default)(ev, gameBoard, gameController, Players)\n);\n\nd.addEventListener(\"click\", (ev) =>\n  (0,_scripts_resetHandler_js__WEBPACK_IMPORTED_MODULE_5__.default)(ev, gameBoard, gameController, Players)\n);\n\n\n//# sourceURL=webpack://tictactoe/./src/index.js?");

/***/ }),

/***/ "./src/scripts/GameController.js":
/*!***************************************!*\
  !*** ./src/scripts/GameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameController)\n/* harmony export */ });\nfunction GameController() {\n  let $boardRows;\n\n  const resetUI = (gameBoard) => {\n    gameBoard.setBoard([\n      [\"\", \"\", \"\"],\n      [\"\", \"\", \"\"],\n      [\"\", \"\", \"\"],\n    ]);\n\n    let currentBoard = gameBoard.getBoard().flat();\n    let $boxes = document.querySelectorAll(\".box\");\n    currentBoard.forEach((box, index) => ($boxes[index].textContent = box));\n  };\n\n  const updateBoard = (gameboard) => {\n    let newBoard = [];\n\n    $boardRows = document.querySelectorAll(\".box-row\");\n    $boardRows.forEach((row) => {\n      let $boxes = row.querySelectorAll(\".box\");\n      let newRow = [];\n\n      $boxes.forEach((box) => newRow.push(box.textContent));\n      newBoard.push(newRow);\n    });\n    gameboard.setBoard(newBoard);\n  };\n\n  const nextTurn = (gameboard, { player1, player2 }) => {\n    if (player1.isMyTurn()) {\n      player1.setMyTurn(false);\n      player2.setMyTurn(true);\n    } else {\n      player1.setMyTurn(true);\n      player2.setMyTurn(false);\n    }\n    gameboard.incrementTurn();\n  };\n\n  const checkWinner = (gameboard, Players) => {\n    // Its imposible to win in less than 5 turns so no need to check\n    if (gameboard.getNumberOfTurns() < 5) return null;\n\n    let [currentBoard, transposeCurrentBoard, diagonals] =\n      createArrays(gameboard);\n\n    // console.log(currentBoard, transposeCurrentBoard, diagonals);\n\n    return (\n      checkRows(currentBoard, Players) ||\n      checkRows(transposeCurrentBoard, Players) ||\n      checkRows(diagonals, Players)\n    );\n\n    function createArrays(gameboard) {\n      // Theres room to improve this :(\n      let currentBoard = gameboard.getBoard();\n\n      let transposeCurrentBoard = currentBoard[0].map((_, colIndex) =>\n        currentBoard.map((row) => row[colIndex])\n      );\n      // We need the transposed version of the board to search if any player has won in vertical\n      // X | O | O\n      // X | X | O  ✅   https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript\n      // X | O | X\n\n      // Traverse multidimensional array\n      // https://stackoverflow.com/questions/10021847/for-loop-in-multidimensional-javascript-array\n      // I know these are O(n2) but these are small arrays and doesnt need to escalate soooo sue me UwU\n      let diagonalTopBottom = [];\n      for (let i = 0; i < currentBoard.length; i++) {\n        let rows = currentBoard[i];\n        for (let j = 0; j < rows.length; j++) {\n          if (i === j) diagonalTopBottom.push(rows[j]);\n        }\n      }\n\n      let diagonalBottomTop = [];\n      for (let i = 0; i < currentBoard.length; i++) {\n        let rows = currentBoard[i];\n        for (let j = 0; j < rows.length; j++) {\n          if (i === 0 && j === 2) diagonalBottomTop.push(currentBoard[i][j]);\n          if (i === 1 && j === 1) diagonalBottomTop.push(currentBoard[i][j]);\n          if (i === 2 && j === 0) diagonalBottomTop.push(currentBoard[i][j]);\n        }\n      }\n      let diagonals = [diagonalBottomTop, diagonalTopBottom];\n\n      return [currentBoard, transposeCurrentBoard, diagonals];\n    }\n\n    function checkRows(gameboard, { player1, player2 }) {\n      let winner = null;\n      console.log(gameboard);\n      gameboard.forEach((row) => {\n        let numOfCrosses = 0;\n        let numOfCircles = 0;\n\n        row.forEach((box) => {\n          if (box === \"\") return;\n          if (box === player1.getMySymbol()) numOfCrosses++;\n          if (box === player2.getMySymbol()) numOfCircles++;\n        });\n\n        if (numOfCrosses === 3) winner = player1.getName();\n        if (numOfCircles === 3) winner = player2.getName();\n      });\n\n      return winner;\n    }\n  };\n\n  return { updateBoard, checkWinner, nextTurn, resetUI };\n}\n\n\n//# sourceURL=webpack://tictactoe/./src/scripts/GameController.js?");

/***/ }),

/***/ "./src/scripts/Gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nfunction Gameboard() {\n  let numberOfTurns = 0;\n  let board = [\n    [\"\", \"\", \"\"],\n    [\"\", \"\", \"\"],\n    [\"\", \"\", \"\"],\n  ];\n  const getBoard = () => board;\n  const incrementTurn = () => numberOfTurns++;\n  const getNumberOfTurns = () => numberOfTurns;\n  const setBoard = (newBoard) => (board = newBoard);\n  return { getBoard, setBoard, incrementTurn, getNumberOfTurns };\n}\n\n\n//# sourceURL=webpack://tictactoe/./src/scripts/Gameboard.js?");

/***/ }),

/***/ "./src/scripts/Player.js":
/*!*******************************!*\
  !*** ./src/scripts/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nfunction Player({ name, isCross }) {\n  let symbol = isCross ? \"X\" : \"O\";\n  let myTurn = symbol === \"X\" ? true : false;\n  const getName = () => name;\n  const isMyTurn = () => myTurn;\n  const getMySymbol = () => symbol;\n  const setMyTurn = (turn) => (myTurn = turn);\n  return { getName, setMyTurn, isMyTurn, getMySymbol };\n}\n\n\n//# sourceURL=webpack://tictactoe/./src/scripts/Player.js?");

/***/ }),

/***/ "./src/scripts/playsHandler.js":
/*!*************************************!*\
  !*** ./src/scripts/playsHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst $statusText = document.querySelector(\".status-text\");\n\nconst playsHandler = (ev, gameBoard, gameController, Players) => {\n  const { player1, player2 } = Players;\n\n  if (ev.target.matches(\".box, .box *\")) {\n    if (ev.target.textContent)\n      return console.log(\"Invalid box, already had been played\");\n    console.log(player1.getName(), player2.getName());\n\n    if (player1.isMyTurn()) {\n      ev.target.textContent = player1.getMySymbol();\n      $statusText.textContent = `${player2.getName()} Pick a Box \"${player2.getMySymbol()}\"`;\n      gameController.nextTurn(gameBoard, Players);\n    } else {\n      ev.target.textContent = player2.getMySymbol();\n      $statusText.textContent = `${player1.getName()} Pick a Box \"${player1.getMySymbol()}\"`;\n      gameController.nextTurn(gameBoard, Players);\n    }\n    gameController.updateBoard(gameBoard);\n\n    let winner = gameController.checkWinner(gameBoard, Players);\n\n    if (gameBoard.getNumberOfTurns() === 9) {\n      if (!winner) $statusText.textContent = `Its a Draw AHOLES$`;\n      setTimeout(() => {\n        document.getElementById(\"gameboard\").classList.remove(\"grid\");\n        document.querySelector(\".winner-overlay\").classList.remove(\"none\");\n        document.querySelector(\".status-text\").textContent = \"\";\n      }, 2000);\n    }\n\n    if (winner) {\n      $statusText.textContent = `${winner} HAS WON THE GAME`;\n      setTimeout(() => {\n        document.getElementById(\"gameboard\").classList.remove(\"grid\");\n        document.querySelector(\".winner-overlay\").classList.remove(\"none\");\n        document.querySelector(\".status-text\").textContent = \"\";\n      }, 2000);\n    }\n    // console.log(winner);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playsHandler);\n\n\n//# sourceURL=webpack://tictactoe/./src/scripts/playsHandler.js?");

/***/ }),

/***/ "./src/scripts/resetHandler.js":
/*!*************************************!*\
  !*** ./src/scripts/resetHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst resetHandler = (ev, gameBoard, gameController, Players) => {\n  if (ev.target !== document.getElementById(\"restart\")) return;\n  const $formGame = document.getElementById(\"game-form\");\n  $formGame.classList.remove(\"none\");\n\n  document.querySelector(\".status-text\").textContent = \"\";\n  gameController.resetUI(gameBoard);\n  // gameBoard.setBoard([\n  //   [\"\", \"\", \"\"],\n  //   [\"\", \"\", \"\"],\n  //   [\"\", \"\", \"\"],\n  // ]);\n  document.querySelector(\".winner-overlay\").classList.add(\"none\");\n  console.log(\"Resetea\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetHandler);\n\n\n//# sourceURL=webpack://tictactoe/./src/scripts/resetHandler.js?");

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