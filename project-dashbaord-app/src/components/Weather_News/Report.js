import Weather from "./Weather.js";
import News from "./News.js";
import React, { useState, useEffect } from "react";
import "./Report.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function Report() {
  const [city, setCity] = useState("");
  const [zipOrStateCode, setZipOrStateCode] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [locationData, setLocationData] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    let apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=";
    let queryParam = "";

    if (city) {
      queryParam = city;
      if (zipOrStateCode && countryCode) {
        queryParam += "," + zipOrStateCode + "," + countryCode;
      } else if (countryCode) {
        queryParam += "," + countryCode;
      }
    } else if (zipOrStateCode && countryCode) {
      apiUrl = "http://api.openweathermap.org/geo/1.0/zip?zip=";
      queryParam = zipOrStateCode + "," + countryCode;
    } else {
      console.log("Insufficient information to search location");
      return;
    }

    const finalUrl =
      apiUrl +
      queryParam +
      (city ? "&limit=1" : "") +
      "&APPID=8199e76eb9b411d9fcbdeadb7c6c39d0";
    setUrl(finalUrl);
  }, [city, zipOrStateCode, countryCode]);

  function handleClick() {
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setLocationData(
          city ? [data[0].lat, data[0].lon] : [data.lat, data.lon]
        )
      )
      .catch((error) => console.log("Error: " + error));
  }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleZipChange = (event) => {
    setZipOrStateCode(event.target.value);
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  return (
    <div className="main" style={{ textAlign: "center" }}>
      <header>
        <h1>Weather & News Report</h1>
      </header>
      <Link to="/">Project Dashboard</Link>
      <p style={{ fontWeight: "bold" }}>
        Valid Entries: United States (City + State Code, City + State Code +
        Country Code, Zip Code + Country Code), Outside United States (City +
        Country Code){" "}
      </p>
      <div style={{ margin: "10px" }}>
        <TextField
          value={city}
          onChange={handleCityChange}
          label="City"
          variant="outlined"
        />
      </div>
      <div style={{ margin: "10px" }}>
        <TextField
          type="text"
          value={zipOrStateCode}
          onChange={handleZipChange}
          label="Zip Code or State Code"
          variant="outlined"
        />
      </div>
      <div style={{ margin: "10px" }}>
        <TextField
          type="text"
          value={countryCode}
          onChange={handleCountryCodeChange}
          label="Country Code"
          variant="outlined"
        />
      </div>
      <div style={{ margin: "10px" }}>
        <Button variant="contained" onClick={() => handleClick()}>
          Generate Weather Report
        </Button>
      </div>
      {locationData.length === 2 && ( // Only render Weather component if location data is available
        <>
          <p style={{ fontWeight: "bold" }}>
            {"Latitude is: " + locationData[0]}
          </p>
          <p style={{ fontWeight: "bold" }}>
            {"Longitude is: " + locationData[1]}
          </p>
          <Weather lat={locationData[0]} lon={locationData[1]} />
        </>
      )}
      <div className="news">
        <h2>Top 5 News Stories Of The Day (NYT)</h2>
        <News />
      </div>
    </div>
  );
}

export default Report;
