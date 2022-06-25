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

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
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
            <Cartpage />
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
