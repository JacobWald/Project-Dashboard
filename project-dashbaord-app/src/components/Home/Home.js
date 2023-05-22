import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px" }}>Project Dashboard</h1>
      <Link to="/weather_news">Weather And News</Link>
      <span style={{ margin: "0 10px" }}>|</span>
      <Link to="/trivia">Trivia Game</Link>
      <span style={{ margin: "0 10px" }}>|</span>
      <Link to="/menu">Menu App</Link>
    </div>
  );
}

export default Home;
