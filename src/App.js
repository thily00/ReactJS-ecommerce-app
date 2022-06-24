import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import SearchPage from "./pages/searchPage";
import Cartpage from "./pages/Cartpage";
import "./App.scss";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/home/:category?" exact>
            <Homepage />
          </Route>
          <Route path="/product/:id">
            <Productpage />
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
      </Router>
    </>
  );
}
