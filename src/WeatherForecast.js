import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [timezone, setTimezone] = useState(null);

  useEffect(() => {
    if (!props.coordinates) return;

    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;

    const apiKey = "c6f8ef4575250284954db9f4dfa7a996";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setTimezone(response.data.timezone_offset);
    setLoaded(true);
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.map((day, index) => {
          if (index > 0 && index < 6) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={day} timezone={timezone} />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
