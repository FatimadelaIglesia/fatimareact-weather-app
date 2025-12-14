import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  const { lat, lon } = props.coordinates || {};

  useEffect(() => {
    if (!lat || !lon) return;

    setLoaded(false);

    const apiKey = "515c9ddbeb3cda9061acfab71031839e";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then((response) => {
        setForecast(response.data.daily);
        setLoaded(true);
      })

      .catch((error) => {
        console.error("Error fetching forecast:", error);
      });
  }, [lat, lon]);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.slice(0, 5).map((dailyForecast, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
        ))}
      </div>
    </div>
  );
}
