import React /*{ useState }*/ from "react";
import "./Responsive.css";
import "./Weather.css";
import "./Header.css";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  /* const [temperature, setTemperature] = useState();*/
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
  function handleResponse(response) {
    console.log(response.data.weather.temp);
  }

  let key = "b5d468da4868eefa0bc957f375b485fb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${WeatherData.city}&appid=${key}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  console.log(apiUrl);

  return (
    <div className="wrapper">
      <h1>{WeatherData.city}</h1>
      <section className="units">
        <div>
          <button className="btn btn-primary ">C°</button>
        </div>
        <div>
          <button className="btn btn-primary ">F</button>
        </div>
      </section>
      <hr />

      <h2 className="text-center">{WeatherData.date}</h2>
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
