import React, { useState } from 'react'; // Import React and the useState hook
import './App.css';

function App() {
  // useState initializes state with 0 as the starting value for counter
  const [counter, setCounter] = useState(0);

  // Function to increment the counter value
  function increment(){
    setCounter(counter + 1);
  }
 // Function to decrement the counter value
  function decrement(){
    setCounter(counter - 1);
  } 

  // Function to reset the counter value
  function reset(){
    setCounter(0);
  }

  return (
    <div>
      {/* Display the current counter value */}
      <h1>Counter: {counter}</h1>
      
      {/* Buttons to increment and decrement the counter */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App; // Export the App component for use in index.js
