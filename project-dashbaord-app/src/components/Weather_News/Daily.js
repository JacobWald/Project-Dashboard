import React from "react";

function Daily({ dayWeather, showDay, showLow, showHigh, showWeather }) {
  const unixTimeStamp = dayWeather.dt;
  const date = new Date(unixTimeStamp * 1000);

  const month = date.getMonth() + 1; // Note: Months are zero-based
  const day = date.getDate();

  const finalURL =
    "https://openweathermap.org/img/wn/" +
    dayWeather.weather[0].icon +
    "@2x.png";

  const IconComponent = ({ iconURL }) => {
    return <img src={iconURL} alt="Icon" />;
  };

  return (
    <div className="info">
      {showDay && <p>{month + "/" + day}</p>}
      {showLow && <p>{Math.round(dayWeather.temp.min)}</p>}
      {showHigh && <p>{Math.round(dayWeather.temp.max)}</p>}
      {showWeather && (
        <div>
          <IconComponent iconURL={finalURL} />
        </div>
      )}
    </div>
  );
}

export default Daily;
