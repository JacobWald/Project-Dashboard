export default function Food(props) {
  return (
    <>
      <p>{props.food + " ($" + props.price + ")"}</p>
    </>
  );
}
