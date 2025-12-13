import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "c6f8ef4575250284954db9f4dfa7a996";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />{" "}
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"></span>19℃
            <span className="WeatherForecast-temperature-min"></span>10℃
          </div>
        </div>
      </div>
    </div>
  );
}
