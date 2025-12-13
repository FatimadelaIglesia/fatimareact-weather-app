import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const apiKey = "4b3503b2f08a729413c4d33ef1186004";

    // Step 1: Get city coordinates using Current Weather API
    const geoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(geoUrl)
      .then((response) => {
        const { lat, lon } = response.data.coord;

        // Set current weather data
        setWeatherData({
          ready: true,
          coordinates: { lat, lon },
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          city: response.data.name,
          date: new Date(response.data.dt * 1000),
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
        });

        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("City not found or API key invalid.");
        setWeatherData({ ready: false });
      });
  }, [city]);

  function handleSubmit(event) {
    event.preventDefault();
    // useEffect will fetch weather automatically when city changes
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (error) {
    return (
      <div className="Weather">
        <p>{error}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={handleCityChange}
            value={city}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }

  if (!weatherData.ready) {
    return <p>Loading weather...</p>;
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus
              onChange={handleCityChange}
              value={city}
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

      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} />
    </div>
  );
}
