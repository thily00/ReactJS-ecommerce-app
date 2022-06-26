import "../styles/heroSection.scss";
import banner1 from "../assets/banner/banner1.png";

export default function HeroSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="banner">
          <img src={banner1} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
}
