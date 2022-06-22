import "../App.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ReactPaginate from "react-paginate";

function Productlist({ category }) {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  let API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getProducts(currentPage);
  }, [category, currentPage]);

  let getProducts = (page) => {
    category !== undefined
      ? (API_URL = API_URL += `/products?limit=20&category=${category}`)
      : (API_URL = API_URL += `/products?limit=20`);

    fetch(`${API_URL}&page=${page}`)
      .then((response) => response.json())
      .then((response) => handleProducts(response));
  };

  let handleProducts = (response) => {
    console.log(response);
    setData(response.products);
    setTotalPage(response.total_pages);
  };

  let handlePageClick = async (event) => {
    getProducts(event.selected + 1);
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  return (
    <div className="container" id="products_container">
      <div className="row products gy-3 gx-3">
        {data &&
          data.map((product) => {
            return (
              <div className="col-lg-3 col-md-6" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              </div>
            );
          })}
      </div>
      <div className="row pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Suivant"
          previousLabel="Précédent "
          pageRangeDisplayed={5}
          pageCount={totalPage}
          initialPage={1}
          onPageChange={handlePageClick}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default Productlist;
