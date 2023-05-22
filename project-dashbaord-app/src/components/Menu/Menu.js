import Meal from "./Meal.js";
import { Link } from "react-router-dom";

export default function Menu() {
  const menuItems = {
    breakfast: [
      { food: "pancakes", price: 5.0, vegetarian: true },
      { food: "waffles", price: 5.0, vegetarian: true },
      { food: "orange juice", price: 2.0, vegetarian: true },
    ],
    lunch: [
      { food: "turkey sandwich", price: 8.0, vegetarian: false },
      { food: "grilled cheese", price: 6.0, vegetarian: true },
      { food: "hamburger", price: 8.0, vegetarian: false },
    ],
    dinner: [
      { food: "chicken alfredo", price: 10.0, vegetarian: false },
      { food: "tofu stir-fry", price: 9.0, vegetarian: true },
      { food: "chili", price: 8.0, vegetarian: false },
    ],
  };
  return (
    <>
      <h1>Menu</h1>
      <Link to="/">Project Dashboard</Link>
      <p></p>
      <button>Show Only Vegetarian</button>
      <Meal menu={menuItems} />
    </>
  );
}
