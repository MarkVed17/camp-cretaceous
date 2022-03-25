import React from "react";
import { StarRating } from "../StarRating/StarRating";
import "./ProductCard.css";

function ProductCard({ _id, name, price, categoryName, imageUrl, rating }) {
  return (
    <div className="card product-card">
      <div className="card__primary-action">
        <img className="product-card__media" src={imageUrl} alt={name}></img>
        <button className="card-fav-icon">
          <span className="material-icons">favorite_outline</span>
        </button>
        <div className="card__primary">
          <h2 className="product-card__title">{name}</h2>
          <h3 className="product-card__subtitle">
            <span className="card-category">{categoryName}</span>
          </h3>
          <StarRating rating={rating} />
          <h3 className="product-price">
            <span className="">₹ {price}</span>
          </h3>
        </div>
        <div className="card__actions">
          <div className="card__action-buttons">
            <button className="btn btn-brand btn-accent buy-btn">Buy Now</button>
            <button className="btn btn-outline btn-accent cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProductCard };
