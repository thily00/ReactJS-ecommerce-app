import "../styles/cartPage.scss";
import Quantity from "../components/Quantity";
import ProductCard from "../components/ProductCard";

function Cartpage({ cartItems }) {
  // const [quantity, setQuantity] = useState(1);
  console.log(cartItems);

  function setQuantity(index, quantity) {
    cartItems[index].qty = quantity;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="carts">
          {cartItems &&
            cartItems.map((cartItem) => {
              return (
                <div key={cartItem.id} className="cart">
                  <img src={cartItem.images.photos[0]} alt="item" />
                  <h3>{cartItem.title}</h3>
                  <Quantity quantity={cartItem.qty} />
                  <h3>{cartItem.price}</h3>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Cartpage;
