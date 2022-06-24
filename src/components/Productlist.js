import "../App.scss";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Productlist({ products }) {
  // let handlePageClick = async (event) => {
  //   getProducts(event.selected);
  //   window.scrollTo({ top: 380, behavior: "smooth" });
  // };

  return (
    <div className="container" id="products_container">
      <div className="row products gy-3 gx-3">
        {products &&
          products.map((product) => {
            return (
              <div className="col-lg-3 col-md-6" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              </div>
            );
          })}
        <div className="row pagination">
          {/* <ReactPaginate
            nextLabel="Suivant"
            previousLabel="Précédent "
            pageRangeDisplayed={5}
            pageCount={totalPage}
            initialPage={1}
            // forcePage={currentPage}
            onPageChange={handlePageClick}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Productlist;
