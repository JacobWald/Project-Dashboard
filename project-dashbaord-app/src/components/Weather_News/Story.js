import React from "react";
import "./News.css";

function Story({ story }) {
  const finalURL = story.multimedia[0].url;

  const IconComponent = ({ iconURL }) => {
    return <img src={iconURL} alt="Icon" />;
  };

  return (
    <div className="storyInfo">
      <h1>{story.title}</h1>
      <p className="by">{story.byline}</p>
      <p>{"Description: " + story.abstract}</p>
      <div>
        <span>Link: </span>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          {story.url}
        </a>
      </div>
      <p></p>
      <div className="img">
        <IconComponent iconURL={finalURL} />
      </div>
    </div>
  );
}

export default Story;
