import "../App.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function Productlist() {
  const [data, setData] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/products?limit=20`)
      .then((response) => response.json())
      .then((response) => handleProducts(response));
  }, []);

  function handleProducts(response) {
    console.log(response.products);
    setData(response.products);
  }

  return (
    <div className="container">
      <div className="row products gy-3 gx-3">
        {data &&
          data.map((product) => {
            return (
              <div className="col-lg-3 col-md-6" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <div className="product">
                    <img src={product.images.photos[0]} />
                    <p className="product_title">{product.title}</p>
                    <p className="product_category">{product.category}</p>
                    <div className="product_rating">
                      <Rating
                        readonly={true}
                        size={20}
                        initialValue={product.rating}
                      />
                      <span className="product_raters">
                        {" "}
                        ({product.raters ? product.raters : 0})
                      </span>
                    </div>
                    {product.priceDiscount ? (
                      <div className="prices">
                        <span className="product_price">
                          {product.priceDiscount}
                        </span>
                        <span className="product_dicountPrice">
                          {product.price}
                        </span>
                      </div>
                    ) : (
                      <div className="prices">
                        <span className="product_price">{product.price}</span>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Productlist;
