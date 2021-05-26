export default function Gameboard() {
  let numberOfTurns = 0;
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const getBoard = () => board;
  const incrementTurn = () => numberOfTurns++;
  const getNumberOfTurns = () => numberOfTurns;
  const setBoard = (newBoard) => (board = newBoard);
  return { getBoard, setBoard, incrementTurn, getNumberOfTurns };
}
