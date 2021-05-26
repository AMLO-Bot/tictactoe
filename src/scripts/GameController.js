export default function GameController() {
  let $boardRows;

  const resetUI = (gameBoard) => {
    gameBoard.setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);

    let currentBoard = gameBoard.getBoard().flat();
    let $boxes = document.querySelectorAll(".box");
    currentBoard.forEach((box, index) => ($boxes[index].textContent = box));
  };

  const updateBoard = (gameboard) => {
    let newBoard = [];

    $boardRows = document.querySelectorAll(".box-row");
    $boardRows.forEach((row) => {
      let $boxes = row.querySelectorAll(".box");
      let newRow = [];

      $boxes.forEach((box) => newRow.push(box.textContent));
      newBoard.push(newRow);
    });
    gameboard.setBoard(newBoard);
  };

  const nextTurn = (gameboard, { player1, player2 }) => {
    if (player1.isMyTurn()) {
      player1.setMyTurn(false);
      player2.setMyTurn(true);
    } else {
      player1.setMyTurn(true);
      player2.setMyTurn(false);
    }
    gameboard.incrementTurn();
  };

  const checkWinner = (gameboard, Players) => {
    // Its imposible to win in less than 5 turns so no need to check
    if (gameboard.getNumberOfTurns() < 5) return null;

    let [currentBoard, transposeCurrentBoard, diagonals] =
      createArrays(gameboard);

    // console.log(currentBoard, transposeCurrentBoard, diagonals);

    return (
      checkRows(currentBoard, Players) ||
      checkRows(transposeCurrentBoard, Players) ||
      checkRows(diagonals, Players)
    );

    function createArrays(gameboard) {
      // Theres room to improve this :(
      let currentBoard = gameboard.getBoard();

      let transposeCurrentBoard = currentBoard[0].map((_, colIndex) =>
        currentBoard.map((row) => row[colIndex])
      );
      // We need the transposed version of the board to search if any player has won in vertical
      // X | O | O
      // X | X | O  ✅   https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
      // X | O | X

      // Traverse multidimensional array
      // https://stackoverflow.com/questions/10021847/for-loop-in-multidimensional-javascript-array
      // I know these are O(n2) but these are small arrays and doesnt need to escalate soooo sue me UwU
      let diagonalTopBottom = [];
      for (let i = 0; i < currentBoard.length; i++) {
        let rows = currentBoard[i];
        for (let j = 0; j < rows.length; j++) {
          if (i === j) diagonalTopBottom.push(rows[j]);
        }
      }

      let diagonalBottomTop = [];
      for (let i = 0; i < currentBoard.length; i++) {
        let rows = currentBoard[i];
        for (let j = 0; j < rows.length; j++) {
          if (i === 0 && j === 2) diagonalBottomTop.push(currentBoard[i][j]);
          if (i === 1 && j === 1) diagonalBottomTop.push(currentBoard[i][j]);
          if (i === 2 && j === 0) diagonalBottomTop.push(currentBoard[i][j]);
        }
      }
      let diagonals = [diagonalBottomTop, diagonalTopBottom];

      return [currentBoard, transposeCurrentBoard, diagonals];
    }

    function checkRows(gameboard, { player1, player2 }) {
      let winner = null;
      console.log(gameboard);
      gameboard.forEach((row) => {
        let numOfCrosses = 0;
        let numOfCircles = 0;

        row.forEach((box) => {
          if (box === "") return;
          if (box === player1.getMySymbol()) numOfCrosses++;
          if (box === player2.getMySymbol()) numOfCircles++;
        });

        if (numOfCrosses === 3) winner = player1.getName();
        if (numOfCircles === 3) winner = player2.getName();
      });

      return winner;
    }
  };

  return { updateBoard, checkWinner, nextTurn, resetUI };
}
