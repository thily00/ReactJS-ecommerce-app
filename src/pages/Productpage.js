import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/products/${id}`)
      .then((response) => response.json())
      .then((response) => handleProduct(response));
  }, []);

  function handleProduct(response) {
    console.log(response);
    //setProduct(response.products);
  }

  console.log(id);
  return (
    <div style={{ marginTop: "150px" }}>
      <p>{id}</p>
    </div>
  );
}

export default Product;
