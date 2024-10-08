import React from 'react';
import Square from './Square';

// Board component representing the entire Tic-Tac-Toe grid
function Board({ squares, onSquareClick }) {
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onSquareClick(i)} />;
  };

  return (
    <>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
}

export default Board;
