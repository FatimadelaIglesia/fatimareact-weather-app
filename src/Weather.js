import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
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
      <h1>London</h1>
      <ul>
        <li>Saturday 22:45</li>
        <li>Partially cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://www.gstatic.com/weather/conditions2023/2023.2/svg/partly_cloudy_night_light.svg"
              alt="Partially cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">11</span>
              <span className="unit">℃</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:5%</li>
            <li>Humidity:71%</li>
            <li>Wind: 6km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
