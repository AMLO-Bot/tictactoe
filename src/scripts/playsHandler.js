const $statusText = document.querySelector(".status-text");

const playsHandler = (ev, gameBoard, gameController, Players) => {
  const { player1, player2 } = Players;

  if (ev.target.matches(".box, .box *")) {
    if (ev.target.textContent)
      return console.log("Invalid box, already had been played");
    console.log(player1.getName(), player2.getName());

    if (player1.isMyTurn()) {
      ev.target.textContent = player1.getMySymbol();
      $statusText.textContent = `${player2.getName()} Pick a Box "${player2.getMySymbol()}"`;
      gameController.nextTurn(gameBoard, Players);
    } else {
      ev.target.textContent = player2.getMySymbol();
      $statusText.textContent = `${player1.getName()} Pick a Box "${player1.getMySymbol()}"`;
      gameController.nextTurn(gameBoard, Players);
    }
    gameController.updateBoard(gameBoard);

    let winner = gameController.checkWinner(gameBoard, Players);

    if (gameBoard.getNumberOfTurns() === 9) {
      if (!winner) $statusText.textContent = `Its a Draw AHOLES$`;
      setTimeout(() => {
        document.getElementById("gameboard").classList.remove("grid");
        document.querySelector(".winner-overlay").classList.remove("none");
        document.querySelector(".status-text").textContent = "";
      }, 2000);
    }

    if (winner) {
      $statusText.textContent = `${winner} HAS WON THE GAME`;
      setTimeout(() => {
        document.getElementById("gameboard").classList.remove("grid");
        document.querySelector(".winner-overlay").classList.remove("none");
        document.querySelector(".status-text").textContent = "";
      }, 2000);
    }
    // console.log(winner);
  }
};

export default playsHandler;
