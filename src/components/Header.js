import { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/icons/cart.png";
import whislist from "../assets/icons/whislist.png";
import search from "../assets/icons/search.png";
import "../styles/header.scss";

function Header() {
  const [categories, setCategories] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;
  const history = useHistory();

  let getCategories = () => {
    fetch(`${API_URL}/categories`)
      .then((res) => res.json())
      .then((categories) => setCategories(categories.categories));
  };

  let handleSearch = (event) => {
    event.preventDefault();
    const query = event.currentTarget.elements.search.value;
    history.push(`/search/${query}`);
  };

  let checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container-fluid header">
      <div className="container">
        <div className="row">
          <header>
            <form onSubmit={handleSearch} className="searchForm">
              <label className="searchIcon">
                <img src={search} />
              </label>
              <input
                className="searchBar"
                id="search"
                type="search"
                placeholder="Rechercher un produit ..."
              />
            </form>
            <Link to="/home">
              <img src={logo} className="logo" alt="logo" />
            </Link>

            <nav>
              <ul>
                <li>
                  <NavLink to="/cart">
                    <img src={cart} />
                  </NavLink>
                </li>
                <li>
                  <img src={whislist} />
                </li>
              </ul>
            </nav>
          </header>
          <ul className="categories">
            <NavLink activeClassName="activeLink" isActive={checkActive} to="/">
              <li className="categorie">Tous</li>
            </NavLink>
            {categories &&
              categories.map((category) => {
                return (
                  <NavLink
                    activeClassName="activeLink"
                    key={category}
                    to={`/home/${category}`}
                  >
                    <li className="categorie">{category}</li>
                  </NavLink>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
