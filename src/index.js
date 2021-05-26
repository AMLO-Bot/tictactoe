import styles from "./index.css";
import Gameboard from "./scripts/Gameboard.js";
import GameController from "./scripts/GameController.js";
import Player from "./scripts/Player.js";
import playsHandler from "./scripts/playsHandler.js";
import resetHandler from "./scripts/resetHandler.js";

// Global variables, to be able to use inside the click event the data generated in submit event.
let Players;
let gameBoard;
let gameController;

const d = document,
  $formGame = d.getElementById("game-form"),
  $gameboard = d.getElementById("gameboard");

$gameboard.classList.add("none");

$formGame.addEventListener("submit", (ev) => {
  ev.preventDefault();

  Players = {
    player1: Player({
      name: ev.target.name1.value || "Trickster",
      isCross: true,
    }),
    player2: Player({
      name: ev.target.name2.value || "Joanna",
      isCross: false,
    }),
  };
  $gameboard.classList.add("grid");
  document.querySelector(
    ".status-text"
  ).textContent = `${Players.player1.getName()} You Start the Game ${Players.player1.getMySymbol()}`;
  gameBoard = Gameboard();
  gameController = GameController();
  $formGame.classList.add("none");
});

$gameboard.addEventListener("click", (ev) =>
  playsHandler(ev, gameBoard, gameController, Players)
);

d.addEventListener("click", (ev) =>
  resetHandler(ev, gameBoard, gameController, Players)
);
