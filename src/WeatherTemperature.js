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
        <button
          type="button"
          onClick={showCelsius}
          className={unit === "celsius" ? "active" : ""}
        >
          ℃
        </button>
        {" | "}
        <button
          type="button"
          onClick={showFahrenheit}
          className={unit === "fahrenheit" ? "active" : ""}
        >
          °F
        </button>
      </span>
    </div>
  );
}
