import "../App.scss";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ReactPaginate from "react-paginate";

function Productlist({ products, totalPage, page, setPage }) {
  let handlePageClick = async (event) => {
    setPage(event.selected + 1);
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  return (
    <div className="container" id="products_container">
      <div className="row products gy-3 gx-3">
        {products &&
          products.map((product) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              </div>
            );
          })}
        <div className="row pagination">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Suivant"
            previousLabel="Préc&dent"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPage}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}

export default Productlist;
