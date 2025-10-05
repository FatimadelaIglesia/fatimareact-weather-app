import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is created by Fatima de la Iglesia and is{" "}
          <a
            href="https://github.com/FatimadelaIglesia/fatimareact-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
