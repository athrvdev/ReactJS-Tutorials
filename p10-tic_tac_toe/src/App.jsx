import React, { useState } from 'react';
import Board from './Board';
import './App.css'

// Helper function to determine if a player has won
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Main App component to manage the game state
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));  // State for the board
  const [xIsNext, setXIsNext] = useState(true);  // State to track which player's turn it is

  // Handle a square click event
  const handleClick = (i) => {
    const newSquares = squares.slice();  // Create a copy of the current board state
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;  // Return early if there's already a winner or the square is filled
    }
    newSquares[i] = xIsNext ? 'X' : 'O';  // Set the current square to 'X' or 'O'
    setSquares(newSquares);  // Update the board state
    setXIsNext(!xIsNext);  // Switch turns
  };

  const winner = calculateWinner(squares);  // Check if there's a winner
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onSquareClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
}

export default App;
