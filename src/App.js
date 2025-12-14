import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/FatimadelaIglesia"
              target="_blank"
              rel="noreferrer"
            >
              Fatima de la Iglesia
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/FatimadelaIglesia/fatimareact-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://fatimareactweatherapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
