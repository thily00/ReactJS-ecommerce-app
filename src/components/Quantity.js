import "../styles/quantity.scss";

export default function Quantity({ quantity, setQuantity }) {
  let increment = () => {
    setQuantity(quantity + 1);
  };

  let decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="quantity">
      <span className="minus" onClick={decrement}>
        {" "}
        -{" "}
      </span>
      <span>{quantity}</span>
      <span className="plus" onClick={increment}>
        {" "}
        +{" "}
      </span>
    </div>
  );
}
