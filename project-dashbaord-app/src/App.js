import { BrowserRouter, Routes, Route } from "react-router-dom";
import TriviaPage from "./pages/TriviaPage.js";
import HomePage from "./pages/HomePage.js";
import Weather_News from "./pages/Weather_News.js";
import MenuPage from "./pages/MenuPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="weather_news" element={<Weather_News />}></Route>
        <Route path="trivia" element={<TriviaPage />}></Route>
        <Route path="menu" element={<MenuPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
