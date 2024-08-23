import React from 'react';

// Square component representing each cell in the Tic-Tac-Toe board
function Square({ value, onClick }) {
  return (
    <div className="square" onClick={onClick}>
      {value}
    </div>
  );
}

export default Square;
