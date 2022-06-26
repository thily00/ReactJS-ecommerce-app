import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import SearchPage from "./pages/searchPage";
import Cartpage from "./pages/Cartpage";
import "./App.scss";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  let Cart = localStorage.getItem("cart");

  useEffect(() => {
    Cart != null && setCartItems(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const onAdd = (product) => {
    if (Cart != null) {
      let oldCart = JSON.parse(localStorage.getItem("cart"));
      const exist = oldCart.find((x) => x.id === product.id);
      if (exist) {
        oldCart = oldCart.map((x) =>
          x.id === product.id ? { ...x, qty: product.qty } : x
        );
      } else {
        oldCart.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(oldCart));
      setCartItems(oldCart);
    } else {
      let cart = [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartItems(cart);
    }
  };

  return (
    <>
      <Router>
        <Header cartItems={cartItems} />
        <Switch>
          <Route path="/home/:category?" exact>
            <Homepage />
          </Route>
          <Route path="/product/:id">
            <Productpage onAdd={onAdd} />
          </Route>
          <Route path="/search/:query?" exact>
            <SearchPage />
          </Route>
          <Route path="/cart">
            <Cartpage cartItems={cartItems} />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
