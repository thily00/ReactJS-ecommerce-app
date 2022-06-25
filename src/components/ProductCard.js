import React from "react";
import { Rating } from "react-simple-star-rating";
import "../styles/productCard.scss";

export default function ProductCard({ product }) {
  return (
    <div className="product">
      <img src={product.images.photos[0]} />
      <p className="product_title">{product.title}</p>
      <p className="product_category">{product.category}</p>
      <div className="product_rating">
        <Rating readonly={true} size={20} initialValue={product.rating} />
        <span className="product_raters">
          ({product.raters ? product.raters : 0})
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
      {product.priceDiscount != null && (
        <span className="product__badge__promo">Promo</span>
      )}
    </div>
  );
}
