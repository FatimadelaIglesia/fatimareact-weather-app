import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [timezone, setTimezone] = useState(null);

  useEffect(() => {
    if (!coordinates) return;

    const { lat, lon } = coordinates;
    const apiKey = "f81614abe2395d5dfecd45b9298041de";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setForecast(response.data.daily);
      setTimezone(response.data.timezone_offset);
      setLoaded(true);
    });
  }, [coordinates]);

  if (!loaded || !forecast || forecast.length === 0) {
    return <p>Loading forecast...</p>;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.slice(1, 6).map((day, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay data={day} timezone={timezone} />
          </div>
        ))}
      </div>
    </div>
  );
}
