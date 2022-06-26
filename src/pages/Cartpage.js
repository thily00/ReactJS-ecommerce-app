import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import "../styles/cartPage.scss";

function Cartpage() {
  const [cartItems, setCartItems] = useState(null);
  let Cart = JSON.parse(localStorage.getItem("cart"));

  console.log(Cart);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")));
  }, []);

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

  return (
    <div className="container">
      <div className="row">
        <div className="carts">
          {cartItems &&
            cartItems.map((cartItem, index) => {
              return (
                <div key={cartItem.id} className="cart">
                  <img src={cartItem.images.photos[0]} alt="item" />
                  <h3>{cartItem.title}</h3>
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
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Cartpage;
