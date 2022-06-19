import logo from "../assets/logo.png";
import cart from "../assets/icons/cart.png";
import whislist from "../assets/icons/whislist.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <form className="searchForm">
        <label className="searchIcon">
          <i className="icon ion-md-search"></i>
        </label>
        <input
          className="searchBar"
          type="search"
          placeholder="Rechercher un produit ..."
        />
      </form>
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
  );
}

export default Header;
