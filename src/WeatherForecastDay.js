import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay({ data, timezone }) {
  function maxTemperature() {
    return `${Math.round(data.temp.max)}°`;
  }

  function minTemperature() {
    return `${Math.round(data.temp.min)}°`;
  }

  function day() {
    const date = new Date((data.dt + timezone) * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getUTCDay()];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
