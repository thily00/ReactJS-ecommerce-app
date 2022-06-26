import { useState, useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import HeroSection from "../components/HeroSection";
import Productlist from "../components/Productlist";

function Homepage() {
  let API_URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);
  const history = useHistory();
  const { category } = useParams();
  const { search } = useLocation();
  const Queries = queryString.parse(search);

  let getProducts = () => {
    category !== undefined
      ? (API_URL = API_URL += `/products?limit=20&category=${category}`)
      : (API_URL = API_URL += `/products?limit=20`);

    Queries.page !== undefined
      ? (API_URL = API_URL += `&page=${Queries.page}`)
      : (API_URL = API_URL += `&page=${1}`);

    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((response) => setData(response));
  };

  let handlePageClick = async (event) => {
    let location;
    if (category !== undefined) {
      location = {
        pathname: `/home/${category}`,
        search: `?page=${event.selected + 1}`,
      };
    } else {
      location = {
        pathname: "/home",
        search: `?page=${event.selected + 1}`,
      };
    }
    history.push(location);
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <>
      <HeroSection />
      <Productlist
        products={data?.products}
        handlePageClick={handlePageClick}
        category={category}
        totalPage={data?.total_pages}
      />
    </>
  );
}

export default Homepage;
