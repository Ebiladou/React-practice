import React from "react";
import Square from "./Square";
import CalWinner from "./CalWinner";
//import { useState } from "react";

function Board({ xIsNext, square, onPlay }) {

  function handleClick(i) {
    if (CalWinner(square) || square[i]) {
      return;
    }
    

    const nextSquare = square.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onPlay(nextSquare);
  }

  const winner = CalWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="row">
        <Square value={square[0]} squareClick={() => handleClick(0)} />
        <Square value={square[1]} squareClick={() => handleClick(1)} />
        <Square value={square[2]} squareClick={() => handleClick(2)} />
      </div>

      <div className="row">
        <Square value={square[3]} squareClick={() => handleClick(3)} />
        <Square value={square[4]} squareClick={() => handleClick(4)} />
        <Square value={square[5]} squareClick={() => handleClick(5)} />
      </div>

      <div className="row">
        <Square value={square[6]} squareClick={() => handleClick(6)} />
        <Square value={square[7]} squareClick={() => handleClick(7)} />
        <Square value={square[8]} squareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
