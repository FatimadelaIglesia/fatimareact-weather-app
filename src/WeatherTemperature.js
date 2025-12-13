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
            <button
              type="button"
              onClick={showFahrenheit}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              °F
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={showCelsius}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              °C
            </button>{" "}
            | °F
          </>
        )}
      </span>
    </div>
  );
}
