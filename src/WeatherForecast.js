import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (!coordinates) return;

    const { lat, lon } = coordinates;
    const apiKey = "4b3503b2f08a729413c4d33ef1186004";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        setForecast(response.data.daily);
        setLoaded(true);
      })
      .catch((err) => {
        console.error("Forecast error:", err);
        setLoaded(false);
      });
  }, [coordinates]);

  if (!loaded || !forecast) {
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
