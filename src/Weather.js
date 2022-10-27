import React from "react";
import "./Responsive.css";

export default function Weather() {
  let WeatherData = {
    city: "Madrid",
    date: "Thu, August 25, 20:39",
    description: "Cloudy",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    temperature: 20,
    humidity: 60,
    maxTemp: 22,
    minTemp: 12,
  };

  return (
    <div className="wrapper">
      <h1>{WeatherData.city}</h1>
      <section className="units">
        <button className="btn btn-success">C°</button>
        <button className="btn btn-success">F°</button>
      </section>
      <hr />

      <h2>{WeatherData.date}</h2>
      <hr />
      <div className="inner-info">
        <div className="row">
          <div className="col-6">
            <h1>{WeatherData.temperature}°C</h1>
          </div>
          <div className="col-6 icon-main">
            <img src={WeatherData.imgUrl} alt="icon-weather" width="120" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>{WeatherData.description}</li>
              <li>Humidity: {WeatherData.humidity} %</li>
            </ul>
          </div>
          <div className="col-6 right-section">
            <ul>
              <li>Max temp {WeatherData.maxTemp} °C</li>
              <li>Min temp {WeatherData.minTemp} °C</li>
            </ul>
          </div>
        </div>
        <hr />
        <div></div>
      </div>
    </div>
  );
}
