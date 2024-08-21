import React from 'react';

// TemperatureInput component for rendering an input field
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <fieldset>
      {/* Label indicating the temperature scale */}
      <legend>Enter temperature in {scale}:</legend>
      
      {/* Input field where users enter the temperature */}
      <input
        type="number"  // Restrict input to numbers
        value={temperature}  // Set the current value of the input field
        onChange={(e) => onTemperatureChange(e.target.value)}  // Handle changes and call the function passed as a prop
      />
    </fieldset>
  );
}

export default TemperatureInput;
