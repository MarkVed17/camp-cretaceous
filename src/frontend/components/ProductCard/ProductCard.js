import React from "react";
import { StarRating } from "../StarRating/StarRating";
import "./ProductCard.css";

function ProductCard({ _id, name, price, categoryName, imageUrl, rating }) {
  return (
    <div class="card product-card">
      <div class="card__primary-action">
        <img class="product-card__media" src={imageUrl} alt={name}></img>
        <button class="card-fav-icon">
          <span class="material-icons">favorite_outline</span>
        </button>
        <div class="card__primary">
          <h2 class="product-card__title">{name}</h2>
          <h3 class="product-card__subtitle">
            <span class="card-category">{categoryName}</span>
          </h3>
          <StarRating rating={rating} />
          <h3 class="product-price">
            <span class="">₹ {price}</span>
          </h3>
        </div>
        <div class="card__actions">
          <div class="card__action-buttons">
            <button class="btn btn-brand btn-accent buy-btn">Buy Now</button>
            <button class="btn btn-outline btn-accent cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProductCard };
