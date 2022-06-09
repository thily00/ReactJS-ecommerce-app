function Header() {
  return (
    <header className="header">
      <span>logo</span>
      <form className="searchForm">
        <label className="searchIcon">
          <i class="icon ion-md-search"></i>
        </label>
        <input
          className="searchBar"
          type="search"
          placeholder="Rechercher un produit ..."
        />
      </form>
      <nav>
        <ul>
          <li>Cart</li>
          <li>Whislist</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
