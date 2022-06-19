import "../styles/heroSection.scss";
import banner from "../assets/banner.webp";

export default function HeroSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="banner">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
}
