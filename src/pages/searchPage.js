import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Productlist from "../components/Productlist";

export default function SearchPage() {
  let { query } = useParams();
  console.log(query);
  const [products, setProducts] = useState(null);
  let API_URL = process.env.REACT_APP_API_URL;

  let getProducts = () => {
    fetch(`${API_URL}/products?limit=20&search=${query}`)
      .then((response) => response.json())
      .then((response) => setProducts(response.products));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div style={{ marginTop: "150px" }}>Résultat de : {query}</div>
      <Productlist products={products} />
    </>
  );
}
