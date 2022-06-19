import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import cart from "../assets/icons/cart.png";
import whislist from "../assets/icons/whislist.png";
import search from "../assets/icons/search.png";
import "../styles/header.scss";

function Header() {
  const [categories, setCategories] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;

  let getCategories = () => {
    fetch(`${API_URL}/categories`)
      .then((res) => res.json())
      .then((categories) => setCategories(categories.categories));
  };

  useEffect(() => {
    getCategories();
  });

  return (
    <div className="container-fluid header">
      <div className="container">
        <div className="row">
          <header>
            <form className="searchForm">
              <label className="searchIcon">
                <img src={search} />
              </label>
              <input
                className="searchBar"
                type="search"
                placeholder="Rechercher un produit ..."
              />
            </form>
            <img src={logo} className="logo" alt="logo" />

            <nav>
              <ul>
                <li>
                  <img src={cart} />
                </li>
                <li>
                  <img src={whislist} />
                </li>
              </ul>
            </nav>
          </header>
          <ul className="categories">
            <li>Tous</li>
            {categories &&
              categories.map((category) => {
                return <li key={category}>{category}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
