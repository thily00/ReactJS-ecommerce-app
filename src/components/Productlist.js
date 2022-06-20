import "../App.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ReactPaginate from "react-paginate";

function Productlist() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getData(currentPage);
  }, []);

  let getData = (page) => {
    fetch(`${API_URL}/products?limit=20&page=${page}`)
      .then((response) => response.json())
      .then((response) => handleProducts(response));
  };

  let handleProducts = (response) => {
    console.log(response);
    setData(response.products);
    setCurrentPage(response.page);
    setTotalPage(response.total_pages);
  };

  let handlePageClick = async (event) => {
    getData(event.selected + 1);
    let products = document.querySelector("#products_container");
    window.scrollTo({ top: 300, behavior: "smooth" });
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
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPage}
          previousLabel="Précédent "
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default Productlist;
