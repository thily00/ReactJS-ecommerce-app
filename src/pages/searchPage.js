import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Productlist from "../components/Productlist";

export default function SearchPage() {
  let { query } = useParams();
  console.log(query);
  const [products, setProducts] = useState(null);
  const [totalProduct, setTotalProduct] = useState(null);
  let API_URL = process.env.REACT_APP_API_URL;

  let getProducts = () => {
    fetch(`${API_URL}/products?limit=20&search=${query}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setProducts(response.products);
        setTotalProduct(response.total_products);
      });
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <>
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row">
          <p>
            <strong>{totalProduct}</strong> Résultat(s) pour{" "}
            <strong>{query}</strong>
          </p>
        </div>
      </div>

      <Productlist products={products} />
    </>
  );
}
