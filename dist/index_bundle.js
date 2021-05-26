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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Gameboard.js */ \"./src/scripts/Gameboard.js\");\n/* harmony import */ var _scripts_GameController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/GameController.js */ \"./src/scripts/GameController.js\");\n/* harmony import */ var _scripts_Player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Player.js */ \"./src/scripts/Player.js\");\n/* harmony import */ var _scripts_playsHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/playsHandler.js */ \"./src/scripts/playsHandler.js\");\n/* harmony import */ var _scripts_resetHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/resetHandler.js */ \"./src/scripts/resetHandler.js\");\n\n\n\n\n // Global variables, to be able to use inside the click event the data generated in submit event.\n\nvar Players;\nvar gameBoard;\nvar gameController;\nvar d = document,\n    $formGame = d.getElementById(\"game-form\"),\n    $gameboard = d.getElementById(\"gameboard\");\n$gameboard.classList.add(\"none\");\n$formGame.addEventListener(\"submit\", function (ev) {\n  ev.preventDefault();\n  Players = {\n    player1: (0,_scripts_Player_js__WEBPACK_IMPORTED_MODULE_2__.default)({\n      name: ev.target.name1.value || \"Trickster\",\n      isCross: true\n    }),\n    player2: (0,_scripts_Player_js__WEBPACK_IMPORTED_MODULE_2__.default)({\n      name: ev.target.name2.value || \"Joanna\",\n      isCross: false\n    })\n  };\n  $gameboard.classList.add(\"grid\");\n  document.querySelector(\".status-text\").textContent = \"\".concat(Players.player1.getName(), \" You Start the Game \").concat(Players.player1.getMySymbol());\n  gameBoard = (0,_scripts_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  gameController = (0,_scripts_GameController_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n  $formGame.classList.add(\"none\");\n});\n$gameboard.addEventListener(\"click\", function (ev) {\n  return (0,_scripts_playsHandler_js__WEBPACK_IMPORTED_MODULE_3__.default)(ev, gameBoard, gameController, Players);\n});\nd.addEventListener(\"click\", function (ev) {\n  return (0,_scripts_resetHandler_js__WEBPACK_IMPORTED_MODULE_4__.default)(ev, gameBoard, gameController, Players);\n});\n\n//# sourceURL=webpack://tictactoe/./src/index.js?");

/***/ }),

/***/ "./src/scripts/GameController.js":
/*!***************************************!*\
  !*** ./src/scripts/GameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameController)\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction GameController() {\n  var $boardRows;\n\n  var resetUI = function resetUI(gameBoard) {\n    gameBoard.setBoard([[\"\", \"\", \"\"], [\"\", \"\", \"\"], [\"\", \"\", \"\"]]);\n    var currentBoard = gameBoard.getBoard().flat();\n    var $boxes = document.querySelectorAll(\".box\");\n    currentBoard.forEach(function (box, index) {\n      return $boxes[index].textContent = box;\n    });\n  };\n\n  var updateBoard = function updateBoard(gameboard) {\n    var newBoard = [];\n    $boardRows = document.querySelectorAll(\".box-row\");\n    $boardRows.forEach(function (row) {\n      var $boxes = row.querySelectorAll(\".box\");\n      var newRow = [];\n      $boxes.forEach(function (box) {\n        return newRow.push(box.textContent);\n      });\n      newBoard.push(newRow);\n    });\n    gameboard.setBoard(newBoard);\n  };\n\n  var nextTurn = function nextTurn(gameboard, _ref) {\n    var player1 = _ref.player1,\n        player2 = _ref.player2;\n\n    if (player1.isMyTurn()) {\n      player1.setMyTurn(false);\n      player2.setMyTurn(true);\n    } else {\n      player1.setMyTurn(true);\n      player2.setMyTurn(false);\n    }\n\n    gameboard.incrementTurn();\n  };\n\n  var checkWinner = function checkWinner(gameboard, Players) {\n    // Its imposible to win in less than 5 turns so no need to check\n    if (gameboard.getNumberOfTurns() < 5) return null;\n\n    var _createArrays = createArrays(gameboard),\n        _createArrays2 = _slicedToArray(_createArrays, 3),\n        currentBoard = _createArrays2[0],\n        transposeCurrentBoard = _createArrays2[1],\n        diagonals = _createArrays2[2]; // console.log(currentBoard, transposeCurrentBoard, diagonals);\n\n\n    return checkRows(currentBoard, Players) || checkRows(transposeCurrentBoard, Players) || checkRows(diagonals, Players);\n\n    function createArrays(gameboard) {\n      // Theres room to improve this :(\n      var currentBoard = gameboard.getBoard();\n      var transposeCurrentBoard = currentBoard[0].map(function (_, colIndex) {\n        return currentBoard.map(function (row) {\n          return row[colIndex];\n        });\n      }); // We need the transposed version of the board to search if any player has won in vertical\n      // X | O | O\n      // X | X | O  ✅   https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript\n      // X | O | X\n      // Traverse multidimensional array\n      // https://stackoverflow.com/questions/10021847/for-loop-in-multidimensional-javascript-array\n      // I know these are O(n2) but these are small arrays and doesnt need to escalate soooo sue me UwU\n\n      var diagonalTopBottom = [];\n\n      for (var i = 0; i < currentBoard.length; i++) {\n        var rows = currentBoard[i];\n\n        for (var j = 0; j < rows.length; j++) {\n          if (i === j) diagonalTopBottom.push(rows[j]);\n        }\n      }\n\n      var diagonalBottomTop = [];\n\n      for (var _i2 = 0; _i2 < currentBoard.length; _i2++) {\n        var _rows = currentBoard[_i2];\n\n        for (var _j = 0; _j < _rows.length; _j++) {\n          if (_i2 === 0 && _j === 2) diagonalBottomTop.push(currentBoard[_i2][_j]);\n          if (_i2 === 1 && _j === 1) diagonalBottomTop.push(currentBoard[_i2][_j]);\n          if (_i2 === 2 && _j === 0) diagonalBottomTop.push(currentBoard[_i2][_j]);\n        }\n      }\n\n      var diagonals = [diagonalBottomTop, diagonalTopBottom];\n      return [currentBoard, transposeCurrentBoard, diagonals];\n    }\n\n    function checkRows(gameboard, _ref2) {\n      var player1 = _ref2.player1,\n          player2 = _ref2.player2;\n      var winner = null;\n      console.log(gameboard);\n      gameboard.forEach(function (row) {\n        var numOfCrosses = 0;\n        var numOfCircles = 0;\n        row.forEach(function (box) {\n          if (box === \"\") return;\n          if (box === player1.getMySymbol()) numOfCrosses++;\n          if (box === player2.getMySymbol()) numOfCircles++;\n        });\n        if (numOfCrosses === 3) winner = player1.getName();\n        if (numOfCircles === 3) winner = player2.getName();\n      });\n      return winner;\n    }\n  };\n\n  return {\n    updateBoard: updateBoard,\n    checkWinner: checkWinner,\n    nextTurn: nextTurn,\n    resetUI: resetUI\n  };\n}\n\n//# sourceURL=webpack://tictactoe/./src/scripts/GameController.js?");

/***/ }),

/***/ "./src/scripts/Gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nfunction Gameboard() {\n  var numberOfTurns = 0;\n  var board = [[\"\", \"\", \"\"], [\"\", \"\", \"\"], [\"\", \"\", \"\"]];\n\n  var getBoard = function getBoard() {\n    return board;\n  };\n\n  var incrementTurn = function incrementTurn() {\n    return numberOfTurns++;\n  };\n\n  var getNumberOfTurns = function getNumberOfTurns() {\n    return numberOfTurns;\n  };\n\n  var setBoard = function setBoard(newBoard) {\n    return board = newBoard;\n  };\n\n  return {\n    getBoard: getBoard,\n    setBoard: setBoard,\n    incrementTurn: incrementTurn,\n    getNumberOfTurns: getNumberOfTurns\n  };\n}\n\n//# sourceURL=webpack://tictactoe/./src/scripts/Gameboard.js?");

/***/ }),

/***/ "./src/scripts/Player.js":
/*!*******************************!*\
  !*** ./src/scripts/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nfunction Player(_ref) {\n  var name = _ref.name,\n      isCross = _ref.isCross;\n  var symbol = isCross ? \"X\" : \"O\";\n  var myTurn = symbol === \"X\" ? true : false;\n\n  var getName = function getName() {\n    return name;\n  };\n\n  var isMyTurn = function isMyTurn() {\n    return myTurn;\n  };\n\n  var getMySymbol = function getMySymbol() {\n    return symbol;\n  };\n\n  var setMyTurn = function setMyTurn(turn) {\n    return myTurn = turn;\n  };\n\n  return {\n    getName: getName,\n    setMyTurn: setMyTurn,\n    isMyTurn: isMyTurn,\n    getMySymbol: getMySymbol\n  };\n}\n\n//# sourceURL=webpack://tictactoe/./src/scripts/Player.js?");

/***/ }),

/***/ "./src/scripts/playsHandler.js":
/*!*************************************!*\
  !*** ./src/scripts/playsHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar $statusText = document.querySelector(\".status-text\");\n\nvar playsHandler = function playsHandler(ev, gameBoard, gameController, Players) {\n  var player1 = Players.player1,\n      player2 = Players.player2;\n\n  if (ev.target.matches(\".box, .box *\")) {\n    if (ev.target.textContent) return console.log(\"Invalid box, already had been played\");\n    console.log(player1.getName(), player2.getName());\n\n    if (player1.isMyTurn()) {\n      ev.target.textContent = player1.getMySymbol();\n      $statusText.textContent = \"\".concat(player2.getName(), \" Pick a Box \\\"\").concat(player2.getMySymbol(), \"\\\"\");\n      gameController.nextTurn(gameBoard, Players);\n    } else {\n      ev.target.textContent = player2.getMySymbol();\n      $statusText.textContent = \"\".concat(player1.getName(), \" Pick a Box \\\"\").concat(player1.getMySymbol(), \"\\\"\");\n      gameController.nextTurn(gameBoard, Players);\n    }\n\n    gameController.updateBoard(gameBoard);\n    var winner = gameController.checkWinner(gameBoard, Players);\n\n    if (gameBoard.getNumberOfTurns() === 9) {\n      if (!winner) $statusText.textContent = \"Its a Draw AHOLES$\";\n      setTimeout(function () {\n        document.getElementById(\"gameboard\").classList.remove(\"grid\");\n        document.querySelector(\".winner-overlay\").classList.remove(\"none\");\n        document.querySelector(\".status-text\").textContent = \"\";\n      }, 2000);\n    }\n\n    if (winner) {\n      $statusText.textContent = \"\".concat(winner, \" HAS WON THE GAME\");\n      setTimeout(function () {\n        document.getElementById(\"gameboard\").classList.remove(\"grid\");\n        document.querySelector(\".winner-overlay\").classList.remove(\"none\");\n        document.querySelector(\".status-text\").textContent = \"\";\n      }, 2000);\n    } // console.log(winner);\n\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playsHandler);\n\n//# sourceURL=webpack://tictactoe/./src/scripts/playsHandler.js?");

/***/ }),

/***/ "./src/scripts/resetHandler.js":
/*!*************************************!*\
  !*** ./src/scripts/resetHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar resetHandler = function resetHandler(ev, gameBoard, gameController, Players) {\n  if (ev.target !== document.getElementById(\"restart\")) return;\n  var $formGame = document.getElementById(\"game-form\");\n  $formGame.classList.remove(\"none\");\n  document.querySelector(\".status-text\").textContent = \"\";\n  gameController.resetUI(gameBoard); // gameBoard.setBoard([\n  //   [\"\", \"\", \"\"],\n  //   [\"\", \"\", \"\"],\n  //   [\"\", \"\", \"\"],\n  // ]);\n\n  document.querySelector(\".winner-overlay\").classList.add(\"none\");\n  console.log(\"Resetea\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetHandler);\n\n//# sourceURL=webpack://tictactoe/./src/scripts/resetHandler.js?");

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