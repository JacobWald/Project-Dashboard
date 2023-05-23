import { Routes, Route } from "react-router-dom";
import TriviaPage from "./pages/TriviaPage.js";
import WEATHER_NEWS from "./pages/WEATHER_NEWS.js";
import MenuPage from "./pages/MenuPage.js";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav style={{ textAlign: "center" }}>
        <h1>Project Directory</h1>
        <Link to="/">Dashboard</Link>
        <span style={{ margin: "0 10px" }}>|</span>
        <Link to="/weather_news">Weather And News</Link>
        <span style={{ margin: "0 10px" }}>|</span>
        <Link to="/trivia">Trivia App</Link>
        <span style={{ margin: "0 10px" }}>|</span>
        <Link to="/menu">Menu App</Link>
      </nav>
      <Routes>
        <Route path="/" />
        <Route path="weather_news" element={<WEATHER_NEWS />}></Route>
        <Route path="trivia" element={<TriviaPage />}></Route>
        <Route path="menu" element={<MenuPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
