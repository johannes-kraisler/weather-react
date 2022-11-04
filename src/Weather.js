import React, { useState } from "react";
import DateTime from "./DateTime.js";
import Loader from "./Loader.js";
import "./Responsive.css";
import "./Weather.css";
import "./Header.css";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      imgUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png`,
      humidity: response.data.main.humidity,
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="wrapper">
        <h1>Toronto</h1>
        <section className="units">
          <div>
            <button className="btn btn-primary ">C°</button>
          </div>
          <div>
            <button className="btn btn-primary ">F</button>
          </div>
        </section>
        <hr />
        <h2 className="text-center">
          <DateTime />
        </h2>
        <hr />
        <div className="inner-info">
          <div className="row">
            <div className="col-6">
              <h1>{weatherData.temperature}°C</h1>
            </div>
            <div className="col-6 icon-main">
              <img src={weatherData.imgUrl} alt="icon-weather" width="120" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ul>
                <li className="text-capitalize">{weatherData.description}</li>
                <li>Humidity: {weatherData.humidity} %</li>
              </ul>
            </div>
            <div className="col-6 right-section">
              <ul>
                <li>Max temp {weatherData.maxTemp} °C</li>
                <li>Min temp {weatherData.minTemp} °C</li>
              </ul>
            </div>
          </div>
          <hr />
          <div></div>
        </div>
      </div>
    );
  } else {
    let key = "e947cb2640f1db92e6a19005bc43b435";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${key}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    return (
      <div>
        <Loader />
      </div>
    );
  }
}
