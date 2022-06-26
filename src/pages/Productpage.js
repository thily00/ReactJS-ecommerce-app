import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import toast from "react-hot-toast";
import ImageSlider from "../components/ImageSlider";
import Quantity from "../components/Quantity";
import "../styles/productpage.scss";

function Productpage({ AddToCart }) {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getProduct();
  }, []);

  let getProduct = async () => {
    await fetch(`${API_URL}/products/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response);
      });
  };

  let Add = (product) => {
    if (product.stock >= product.qty) {
      AddToCart(product);
    } else {
      toast.error(`il y en a que ${product.stock} article(s) en stock`, {
        style: {
          padding: "15px 50px",
          border: "1px solid red",
        },
      });
    }
  };

  return (
    product && (
      <div style={{ marginTop: "150px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <ImageSlider product={product} />
            </div>
            <div className="product__sheet col-md-6 col-sm-12">
              <p className="category">{product.category}</p>
              <p className="title">{product.title}</p>
              <div className="product_rating">
                <Rating
                  readonly={true}
                  size={20}
                  initialValue={product.rating}
                />
                <span className="product_raters">
                  ({product.raters ? product.raters : 0} note)
                </span>
              </div>
              {product.priceDiscount ? (
                <div className="prices">
                  <span className="product_price">{product.priceDiscount}</span>
                  <span className="product_dicountPrice">{product.price}</span>
                </div>
              ) : (
                <div className="prices">
                  <span className="product_price">{product.price}</span>
                </div>
              )}
              <p className="description">{product.description}</p>

              <div className="buttons">
                <Quantity
                  stock={product.stock}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
                <button
                  className="btn_primary"
                  onClick={() => Add({ ...product, qty: quantity })}
                >
                  AJOUTER AU PANIER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Productpage;
