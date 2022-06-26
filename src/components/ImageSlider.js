import { useEffect } from "react";
import "../styles/ImageSlider.scss";
function ImageSlider({ product }) {
  useEffect(() => {
    const slides = document.querySelectorAll(".slider_slide");
    const thumbs = document.querySelectorAll(".slider_thumb");
    if (thumbs.length !== 0) {
      let activeThumb = thumbs[0];
      activeThumb.classList.add("active");

      thumbs.forEach((thumb, index) => {
        thumb.addEventListener("mouseover", function () {
          activeThumb.classList.remove("active");
          activeThumb = thumb;
          activeThumb.classList.add("active");
          const thumbIndex = index;
          slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${
              100 * (index - thumbIndex)
            }%)`;
          });
        });
      });
    }
  }, []);

  return (
    product && (
      <div className="slider_container">
        <div className="slider">
          {product.images.photos.map((image, index) => {
            return (
              <div
                className="slider_slide"
                style={{ transform: `translateX(${100 * index}%)` }}
                key={index}
              >
                <img src={image} alt="slider img" />
              </div>
            );
          })}
        </div>
        <div className="slider_thumbs">
          {product.images.thumbs.map((thumb, index) => {
            return (
              <div className="slider_thumb" key={index}>
                <img src={thumb} alt="slider thumb img" />
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}

export default ImageSlider;
