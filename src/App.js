import "./styles.css";
import { StrictMode } from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <p>
            This project was coded by{" "}
            <a href="https://github.com/FatimadelaIglesia" target="_blank">
              Fatima de la Iglesia
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/FatimadelaIglesia/fatimareact-weather-app"
              target="_blank"
            >
              on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://fatimareactweatherapp.netlify.app/"
              target="_blank"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
