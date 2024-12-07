import React, { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);

  function handleClick(index) {
    if (squares[index] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? "X" : "O";
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", width: "180px", margin: "0 auto" }}>
        {squares.map((square, index) => (
          <Square key={index} value={square} onClick={() => handleClick(index)} />
        ))}
      </div>
      <h2 style={{ fontFamily:"Georgia, serif",textShadow:"2px 2px 2px orange", }}>
        {winner
          ? `Winner: ${winner}`
          : squares.includes(null)
          ? `Next Player: ${isXNext ? "X" : "O"}`
          : "It's a Draw!"}
      </h2>
      <button onClick={resetGame} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "blue", color: "white",fontFamily:"Georgia, serif" }}>
        Restart Game
      </button>
    </div>
  );
}

function calculateWinner(squares) {
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

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
