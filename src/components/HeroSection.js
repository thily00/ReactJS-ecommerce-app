import "../styles/heroSection.scss";
import banner1 from "../assets/banner/banner1.png";

export default function HeroSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="banner">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={banner1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={banner1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={banner1} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span>ok</span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
