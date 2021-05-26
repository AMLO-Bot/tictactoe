const resetHandler = (ev, gameBoard, gameController, Players) => {
  if (ev.target !== document.getElementById("restart")) return;
  const $formGame = document.getElementById("game-form");
  $formGame.classList.remove("none");

  document.querySelector(".status-text").textContent = "";
  gameController.resetUI(gameBoard);
  // gameBoard.setBoard([
  //   ["", "", ""],
  //   ["", "", ""],
  //   ["", "", ""],
  // ]);
  document.querySelector(".winner-overlay").classList.add("none");
  console.log("Resetea");
};

export default resetHandler;
