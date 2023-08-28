import React from 'react'

function Square({value, squareClick }) {

  return (
    <button className="squares" onClick={squareClick}>{value}</button>
  );
};

export default Square