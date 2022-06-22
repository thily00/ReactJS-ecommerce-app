import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

import ImageSlider from "../components/ImageSlider";

function Productpage() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getProduct();
  }, []);

  let getProduct = async () => {
    await fetch(`${API_URL}/products/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response);
      });
  };

  console.log(id);
  return (
    product && (
      <div style={{ marginTop: "150px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <ImageSlider product={product} />
            </div>
            <div className="col-md-6 col-sm-12">
              <p>{product.category}</p>
              <p>{product.title}</p>
              <div className="product_rating">
                <Rating
                  readonly={true}
                  size={20}
                  initialValue={product.rating}
                />
                <span className="product_raters">
                  {" "}
                  ({product.raters ? product.raters : 0} note)
                </span>
              </div>
              <p>{product.description}</p>
              <button>AJOUTER AU PANIER</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Productpage;
