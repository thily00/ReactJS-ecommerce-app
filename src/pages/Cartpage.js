import toast from "react-hot-toast";
import "../styles/cartPage.scss";

function Cartpage({ cartItems, setCartItems }) {
  const totalPrices = cartItems.reduce(
    (a, c) =>
      c.priceDiscount != null
        ? a + c.qty * c.priceDiscount.slice(0, -1)
        : a + c.qty * c.price.slice(0, -1),
    0
  );

  let increment = (index) => {
    if (cartItems[index].stock >= cartItems[index].qty + 1) {
      let newCart = [...cartItems];
      newCart[index].qty += 1;
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCartItems(newCart);
    } else {
      toast.error(
        `il y en a que ${cartItems[index].stock} article(s) en stock`,
        {
          style: {
            padding: "15px 50px",
            border: "1px solid red",
          },
        }
      );
    }
  };

  let decrement = (index) => {
    if (cartItems[index].qty - 1 > 0) {
      let newCart = [...cartItems];
      newCart[index].qty -= 1;
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCartItems(newCart);
    }
  };

  let deleteProuct = (index) => {
    let newCart = [...cartItems];
    newCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartItems(newCart);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="carts">
          {cartItems &&
            cartItems.map((cartItem, index) => {
              return (
                <div key={cartItem.id} className="cart">
                  <img src={cartItem.images.photos[0]} alt="item" />
                  <p>{cartItem.title}</p>
                  <div className="quantity">
                    <span className="minus" onClick={() => decrement(index)}>
                      -
                    </span>
                    <span>{cartItem.qty}</span>
                    <span className="plus" onClick={() => increment(index)}>
                      +
                    </span>
                  </div>
                  <h3>
                    {cartItem.priceDiscount != null
                      ? (
                          cartItem.priceDiscount.slice(0, -1) * cartItem.qty
                        ).toFixed(2)
                      : (cartItem.price.slice(0, -1) * cartItem.qty).toFixed(2)}
                    €
                  </h3>
                  <span
                    onClick={() => deleteProuct(index)}
                    style={{ cursor: "pointer" }}
                  >
                    X
                  </span>
                </div>
              );
            })}
        </div>
        <hr style={{ margin: "20px 0px" }} />
        <p className="totalPrice">Total : {totalPrices}€</p>
      </div>
    </div>
  );
}

export default Cartpage;
