import "./App.scss";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cartpage";
import Product from "./pages/Productpage";
// import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
