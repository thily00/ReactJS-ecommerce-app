import { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

import Productlist from "../components/Productlist";

export default function SearchPage() {
  let { query } = useParams();
  let history = useHistory();
  console.log(query);
  const [data, setData] = useState(null);
  const { search } = useLocation();
  const Queries = queryString.parse(search);
  let API_URL = process.env.REACT_APP_API_URL;

  let getProducts = () => {
    Queries.page !== undefined
      ? (API_URL = API_URL +=
          `/products?limit=20&search=${query}&page=${Queries.page}`)
      : (API_URL = API_URL += `/products?limit=20&search=${query}&page=${1}`);

    fetch(`${API_URL}/products?limit=20&search=${query}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  };

  useEffect(() => {
    getProducts();
  }, [query, Queries.page]);

  let handlePageClick = async (event) => {
    let location = {
      pathname: `/search/${query}`,
      search: `?page=${event.selected + 1}`,
    };
    history.push(location);
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  return (
    <>
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row">
          <p>
            <strong>{data?.total_products}</strong> Résultat(s) pour{" "}
            <strong>{query}</strong>
          </p>
        </div>
      </div>

      <Productlist
        products={data?.products}
        handlePageClick={handlePageClick}
        totalPage={data?.total_pages}
      />

      {/* <Productlist
        products={data?.products}
        handlePageClick={handlePageClick}
        category={category}
        page={Queries.page}
        totalPage={data?.total_pages}
      /> */}
    </>
  );
}
