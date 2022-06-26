import "../App.scss";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

function Productlist({ products, handlePageClick, totalPage }) {
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
        <Pagination totalPage={totalPage} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
}

export default Productlist;
