export default function Player({ name, isCross }) {
  let symbol = isCross ? "X" : "O";
  let myTurn = symbol === "X" ? true : false;
  const getName = () => name;
  const isMyTurn = () => myTurn;
  const getMySymbol = () => symbol;
  const setMyTurn = (turn) => (myTurn = turn);
  return { getName, setMyTurn, isMyTurn, getMySymbol };
}
