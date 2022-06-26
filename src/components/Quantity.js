import "../styles/quantity.scss";

export default function Quantity({ stock, quantity, setQuantity }) {
  let increment = () => {
    setQuantity(quantity + 1);
  };

  let decrement = () => {
    if (quantity - 1 > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity">
      <span className="minus" onClick={decrement}>
        -
      </span>
      <span>{quantity}</span>
      <span className="plus" onClick={increment}>
        +
      </span>
    </div>
  );
}
