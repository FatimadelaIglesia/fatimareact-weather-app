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

    const apiKey = "3944928100fff63d399c10d8e59aaf14";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        // one forecast per day (8 x 3h = 24h)
        const dailyForecast = response.data.list.filter(
          (item, index) => index % 8 === 0
        );

        setForecast(dailyForecast);
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
