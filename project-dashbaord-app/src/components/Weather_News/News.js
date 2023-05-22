import Story from "./Story.js";
import "./News.css";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

function News() {
  const [topNewsStories, setTopNewsStories] = useState({});
  const [reports, setReports] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [disable, setDisable] = useState(false);
  const API_KEY = process.env.REACT_APP_news_key;

  const finalURL =
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + API_KEY;

  useEffect(() => {
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {
        setTopNewsStories(data);
        setIsDataLoaded(true);
      })
      .catch((error) => console.log("Error: " + error));
  }, [finalURL]);

  function handleClick() {
    if (topNewsStories.results) {
      const copiedResults = [...topNewsStories.results]; // Make a copy of the results array
      if (clickCount < 6) {
        const newReports = copiedResults.splice(0, 5 + clickCount * 5); // Use splice on the copied array
        setClickCount(clickCount + 1);
        setReports(newReports);
        setIsClicked(true);
      } else {
        setDisable(true);
      }
    }
  }

  return (
    <div className="story">
      {isDataLoaded &&
        reports.length !== 0 &&
        reports.map((element, index) => <Story key={index} story={element} />)}
      <div style={{ margin: "10px" }}>
        <Button
          variant="contained"
          onClick={() => handleClick()}
          disabled={disable}
        >
          {isClicked
            ? "Generate Next 5 News Stories"
            : "Generate Top 5 News Stories"}
        </Button>
      </div>
    </div>
  );
}

export default News;
