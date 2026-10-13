import "./item.css";

function Item(props) {
  return (
    <div className="Item">
      <h1>{props.name}</h1>
      <h2>${props.price.toFixed(2)}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Item;