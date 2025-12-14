import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature?.current || 0,
      humidity: response.data.temperature?.humidity || 0,
      wind: response.data.wind.speed || 0,
      city: response.data.city || city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition?.description || "",
      iconURL:
        response.data.condition?.icon_url ||
        "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      iconCode: response.data.condition?.icon || "",
    });
  }
  function search() {
    const apiKey = "cb286bad3607984b41ed10c8de5cf00e";

    let apiURL = `https://api.openweathermap.org/data/2.5/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={WeatherData} />
        <WeatherForecast
          coordinates={{
            lon: WeatherData.coordinates.longitude,
            lat: WeatherData.coordinates.latitude,
          }}
        />
      </div>
    );
  } else {
    search();
  }
}
