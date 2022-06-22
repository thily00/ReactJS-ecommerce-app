import "./App.scss";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cartpage";
import Productpage from "./pages/Productpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/:category?">
            <Homepage />
          </Route>
          <Route path="/product/:id">
            <Productpage />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
