import React, { useState } from "react";

export default function WeatherTemperature({ celsius }) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (celsius * 9) / 5 + 32;
  }

  return (
    <div className="WeatherTemperature">
      <span className="temperature">
        {unit === "celsius" ? Math.round(celsius) : Math.round(fahrenheit())}
      </span>
      <span className="unit">
        {unit === "celsius" ? (
          <>
            ℃ |{" "}
            <a href="#" onClick={showFahrenheit}>
              °F
            </a>
          </>
        ) : (
          <>
            <a href="#" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </>
        )}
      </span>
    </div>
  );
}
