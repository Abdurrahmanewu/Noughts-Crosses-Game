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
  const [suqares, setSuqares] = useState(Array(9).fill(null));
  const [xisNext, setXisNext] = useState(true);
  const winner = calculateWinner(suqares);
  let status;
  if (winner) {
    status = `"Winner":${winner}`;
  } else {
    status = `"Next-player":${xisNext ? "X" : "O"}`;
  }
  const handleClick = (i) => {
    const newSquares = suqares.slice();
    if (newSquares[i] || winner) {
      return;
    }
    if (xisNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setSuqares(newSquares);
    setXisNext(!xisNext);
    console.log(suqares);
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
        <Suqare value={suqares[0]} onSquareClick={() => handleClick(0)} />
        <Suqare value={suqares[1]} onSquareClick={() => handleClick(1)} />
        <Suqare value={suqares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Suqare value={suqares[3]} onSquareClick={() => handleClick(3)} />
        <Suqare value={suqares[4]} onSquareClick={() => handleClick(4)} />
        <Suqare value={suqares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Suqare value={suqares[6]} onSquareClick={() => handleClick(6)} />
        <Suqare value={suqares[7]} onSquareClick={() => handleClick(7)} />
        <Suqare value={suqares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default App;
