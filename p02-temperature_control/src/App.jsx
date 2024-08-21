import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import './App.css';

// Main App component
function App() {
  // State to store the current temperature value
  const [temperature, setTemperature] = useState('');

  // State to store the current temperature scale ('c' for Celsius, 'f' for Fahrenheit)
  const [scale, setScale] = useState('c');

  // Function to handle changes in the Celsius input field
  const handleCelsiusChange = (temperature) => {
    setScale('c');  // Set the scale to 'c' for Celsius
    setTemperature(temperature);  // Update the temperature state with the new value
  };

  // Function to handle changes in the Fahrenheit input field
  const handleFahrenheitChange = (temperature) => {
    setScale('f');  // Set the scale to 'f' for Fahrenheit
    setTemperature(temperature);  // Update the temperature state with the new value
  };

  // Function to convert Fahrenheit to Celsius
  const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

  // Function to convert Celsius to Fahrenheit
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  // Determine the Celsius value based on the current scale
  const celsius = scale === 'f' ? toCelsius(temperature) : temperature;

  // Determine the Fahrenheit value based on the current scale
  const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;

  return (
    <div>
      {/* Render the Celsius input field and pass the necessary props */}
      <TemperatureInput
        scale="Celsius"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      {/* Render the Fahrenheit input field and pass the necessary props */}
      <TemperatureInput
        scale="Fahrenheit"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default App;
