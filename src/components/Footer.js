import logo from "../assets/logo_white.png";
import "../styles/footer.scss";

function Footer({ cartItems }) {
  return (
    <div className="footer">
      <img src={logo} alt="logo" />
      <p>Copyright 2022, Hotaku Shop</p>
    </div>
  );
}

export default Footer;
