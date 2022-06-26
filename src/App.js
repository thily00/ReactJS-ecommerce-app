import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
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
  }, [Cart]);

  const AddToCart = (product) => {
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
      toast.success("Ajouté au panier.", {
        style: {
          padding: "15px 50px",
          border: "1px solid lightgreen",
        },
      });
    } else {
      let cart = [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartItems(cart);
      toast.success("Ajouté au panier.", {
        style: {
          padding: "15px 50px",
          border: "1px solid lightgreen",
        },
      });
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
            <Productpage AddToCart={AddToCart} />
          </Route>
          <Route path="/search/:query?" exact>
            <SearchPage />
          </Route>
          <Route path="/cart">
            <Cartpage />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
