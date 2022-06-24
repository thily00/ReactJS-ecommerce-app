import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Productlist from "../components/Productlist";

function Homepage() {
  const [products, setProducts] = useState(null);
  let { category } = useParams();
  let API_URL = process.env.REACT_APP_API_URL;

  let getProducts = (page) => {
    category !== undefined
      ? (API_URL = API_URL += `/products?limit=20&category=${category}`)
      : (API_URL = API_URL += `/products?limit=20`);

    fetch(`${API_URL}&page=${page}`)
      .then((response) => response.json())
      .then((response) => handleProducts(response));
  };

  let handleProducts = (response) => {
    setProducts(response.products);
  };

  useEffect(() => {
    getProducts(1);
  }, [category]);

  return (
    <>
      <HeroSection />
      <Productlist products={products} />
    </>
  );
}

export default Homepage;
