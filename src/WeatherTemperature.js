import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const { unit, showFahrenheit, showCelsius } = props;
  const fahrenheit = (props.celsius * 9) / 5 + 32;

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ℃ ∣{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C /
          </a>{" "}
          ∣ °F
        </span>
      </div>
    );
  }
}
