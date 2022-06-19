import "../App.scss";
import { useState, useEffect } from "react";

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
    <div className="container px-4">
      <div className="row gy-3 gx-5">
        {data &&
          data.map((product) => {
            return (
              <div className="col-lg-3 col-md-6" key={product.id}>
                <div className="product">
                  <img src={product.images.photos[0]} />
                  <p>{product.title}</p>
                  <strong>{product.price}</strong>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Productlist;
