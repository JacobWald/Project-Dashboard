import Food from "./Food.js";

export default function Meal(props) {
  return (
    <>
      <h2>Breakfast</h2>
      {props.menu.breakfast.map((element, index) => (
        <Food food={element.food} price={element.price} />
      ))}
      <h3>Lunch</h3>
      {props.menu.lunch.map((element, index) => (
        <Food food={element.food} price={element.price} />
      ))}
      <h4>Dinner</h4>
      {props.menu.dinner.map((element, index) => (
        <Food food={element.food} price={element.price} />
      ))}
    </>
  );
}
