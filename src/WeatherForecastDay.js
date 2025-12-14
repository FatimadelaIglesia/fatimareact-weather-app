import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay({ data }) {
  function formatDay(timestamp) {
    const date = new Date(timestamp * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  return (
    <div className="WeatherForecast-day">
      <div>{formatDay(data.time)}</div>
      <WeatherIcon code={data.condition.icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(data.temperature.maximum)}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
