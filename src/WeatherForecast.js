import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!coordinates) return;

    const apiKey = "4b3503b2f08a729413c4d33ef1186004";
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        setForecast(response.data.daily); // 7-day forecast
        setLoaded(true);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to fetch forecast.");
      });
  }, [coordinates]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!loaded) {
    return <p>Loading forecast...</p>;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.slice(1, 6).map((day, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay data={day} />
          </div>
        ))}
      </div>
    </div>
  );
}
