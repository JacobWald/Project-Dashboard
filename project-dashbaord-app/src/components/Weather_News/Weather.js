import React, { useState, useEffect } from "react";
import Hourly from "./Hourly";
import Daily from "./Daily";
import "./Weather.css";

function Weather({ lat, lon }) {
  const API_KEY = process.env.REACT_APP_weather_key;
  const finalURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial&exclude=minutely,alerts&appid=" +
    API_KEY;

  const [weatherReport, setWeatherReport] = useState({});
  const [todayHourlyWeather, setTodayHourlyWeather] = useState([]);
  const [tomorrowHourlyWeather, setTomorrowHourlyWeather] = useState([]);
  const [dailyWeather, setDailyWeather] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {
        setWeatherReport(data);
        setIsDataLoaded(true);
      })
      .catch((error) => console.log("Error: " + error));
  }, [finalURL]);

  useEffect(() => {
    if (Object.keys(weatherReport).length !== 0) {
      const currentWeather = weatherReport.current;
      if (currentWeather) {
        const hourlyWeather = weatherReport.hourly;

        const timeStamp = currentWeather.dt;
        const date = new Date(timeStamp * 1000);
        date.setHours(23, 0, 0, 0);

        const endOfDayIndex =
          24 -
          Math.floor(
            ((timeStamp + weatherReport.timezone_offset) % 86400) / 3600
          );

        setTodayHourlyWeather(hourlyWeather.slice(0, endOfDayIndex));

        setTomorrowHourlyWeather(
          hourlyWeather.slice(endOfDayIndex, endOfDayIndex + 24)
        );

        setDailyWeather(weatherReport.daily);
      }
    }
  }, [weatherReport]);

  const renderHourlyWeather = (weatherData) => {
    return (
      <>
        <div className="sub-column left-column">
          <h3>Time</h3>
          {isDataLoaded && weatherData.length !== 0 ? (
            weatherData.map((element, index) => (
              <Hourly
                key={index}
                hourWeather={element}
                timezone={weatherReport.timezone}
                showTime
                showTemperature={false}
                showWind={false}
                showWeather={false}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="sub-column middle-column">
          <h3>Temp(°F)</h3>
          {isDataLoaded && weatherData.length !== 0 ? (
            weatherData.map((element, index) => (
              <Hourly
                key={index}
                hourWeather={element}
                timezone={weatherReport.timezone}
                showTime={false}
                showTemperature
                showWind={false}
                showWeather={false}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="sub-column right-column">
          <h3>Wind(mph)</h3>
          {isDataLoaded && weatherData.length !== 0 ? (
            weatherData.map((element, index) => (
              <Hourly
                key={index}
                hourWeather={element}
                timezone={weatherReport.timezone}
                showTime={false}
                showTemperature={false}
                showWind
                showWeather={false}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="sub-column right-column">
          <h3>Weather</h3>
          {isDataLoaded && weatherData.length !== 0 ? (
            weatherData.map((element, index) => (
              <Hourly
                key={index}
                hourWeather={element}
                timezone={weatherReport.timezone}
                showTime={false}
                showTemperature={false}
                showWind={false}
                showWeather
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Today</h2>
        <div className="sub-columns">
          {renderHourlyWeather(todayHourlyWeather)}
        </div>
      </div>
      <div className="box">
        <h2>Tomorrow</h2>
        <div className="sub-columns">
          {renderHourlyWeather(tomorrowHourlyWeather)}
        </div>
      </div>
      <div className="box">
        <h2>Weekly</h2>
        <div className="sub-columns">
          <div className="sub-column left-column">
            <h3>Day</h3>
            {isDataLoaded && dailyWeather.length !== 0 ? (
              dailyWeather.map((element, index) => (
                <Daily
                  key={index}
                  dayWeather={element}
                  showDay
                  showLow={false}
                  showHigh={false}
                  showWeather={false}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="sub-column middle-column">
            <h3>Low(°F)</h3>
            {isDataLoaded && dailyWeather.length !== 0 ? (
              dailyWeather.map((element, index) => (
                <Daily
                  key={index}
                  dayWeather={element}
                  showDay={false}
                  showLow
                  showHigh={false}
                  showWeather={false}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="sub-column middle-column">
            <h3>High(°F)</h3>
            {isDataLoaded && dailyWeather.length !== 0 ? (
              dailyWeather.map((element, index) => (
                <Daily
                  key={index}
                  dayWeather={element}
                  showDay={false}
                  showLow={false}
                  showHigh
                  showWeather={false}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="sub-column right-column">
            <h3>Weather</h3>
            {isDataLoaded && dailyWeather.length !== 0 ? (
              dailyWeather.map((element, index) => (
                <Daily
                  key={index}
                  dayWeather={element}
                  showDay={false}
                  showLow={false}
                  showHigh={false}
                  showWeather
                />
              ))
            ) : (
              <p>Loading ...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
