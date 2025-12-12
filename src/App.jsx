/* eslint-disable no-unused-vars */

import { useState } from "react";

const Suqare = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-400 h-20 w-20 m-1 leading-9 text-3xl"
    >
      {value}
    </button>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares);
  const [xisNext, setXisNext] = useState(true);
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `"Winner":${winner}`;
  } else {
    status = `"Next-player":${xisNext ? "X" : "O"}`;
  }
  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (newSquares[i] || winner) {
      return;
    }
    if (xisNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setSquares(newSquares);
    setXisNext(!xisNext);
    console.log(squares);
  };

  return (
    <>
      <h1 className="text-amber-900 text-5xl font-extrabold text-center m-5">
        Welcome to Tic Tac Toe
      </h1>
      <h1 className="text-amber-900 text-5xl font-extrabold text-center m-5">
        {status}
      </h1>
      <div className="flex">
        <Suqare value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Suqare value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Suqare value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Suqare value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Suqare value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Suqare value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Suqare value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Suqare value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Suqare value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default App;
