import "../App.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
                    <p className="product_price">{product.title}</p>
                    <p className="product_category">{product.category}</p>
                    <strong>{product.price}</strong>
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
