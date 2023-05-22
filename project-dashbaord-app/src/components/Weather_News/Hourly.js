import React from "react";
import "./Weather.css";

function Hourly({
  hourWeather,
  showTime,
  showTemperature,
  showWind,
  showWeather,
  timezone,
}) {
  const unixTime = hourWeather.dt;
  const date = new Date(unixTime * 1000);
  const localDate = new Date(
    date.toLocaleString("en-US", { timeZone: timezone })
  );
  const time = localDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const finalURL =
    "https://openweathermap.org/img/wn/" +
    hourWeather.weather[0].icon +
    "@2x.png";

  const IconComponent = ({ iconURL }) => {
    return <img src={iconURL} alt="Icon" />;
  };

  return (
    <div className="info">
      {showTime && <p>{time}</p>}
      {showTemperature && <p>{Math.round(hourWeather.temp)}</p>}
      {showWind && <p>{Math.round(hourWeather.wind_speed)}</p>}
      {showWeather && (
        <div>
          <IconComponent iconURL={finalURL} />
        </div>
      )}
    </div>
  );
}

export default Hourly;
