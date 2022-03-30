import React from "react";
import { StarRating } from "../StarRating/StarRating";
import { useNavigate } from "react-router-dom";
import { useAuth, useWishlist, useCart } from "../../contexts";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { _id, name, price, categoryName, imageUrl, rating } = product;

  const { auth } = useAuth();
  const navigate = useNavigate();
  const { wishlist, moveProductToWishlist, removeProductFromWishlist } =
    useWishlist();
  const { cart, addProductToCart } = useCart();

  return (
    <div className="card product-card">
      <div className="card__primary-action">
        <img className="product-card__media" src={imageUrl} alt={name}></img>
        {wishlist.find((product) => product._id === _id) ? (
          <button className="card-fav-icon">
            <span
              className="material-icons wishlist-add"
              title="Remove from Wishlist"
              onClick={() => removeProductFromWishlist(product._id)}
            >
              favorite
            </span>
          </button>
        ) : (
          <button className="card-fav-icon">
            <span
              className="material-icons"
              title="Add to Wishlist"
              onClick={() => {
                auth.status
                  ? moveProductToWishlist(product)
                  : navigate("/signin");
              }}
            >
              favorite_outline
            </span>
          </button>
        )}

        <div className="card__primary">
          <h2 className="product-card__title">{name}</h2>
          <h3 className="product-card__subtitle">
            <span className="card-category">{categoryName}</span>
          </h3>
          <StarRating rating={rating} />
          <h3 className="product-price">
            <span>₹ {price}</span>
          </h3>
        </div>
        <div className="card__actions">
          <div className="card__action-buttons">
            <button className="btn btn-brand btn-accent buy-btn">
              Buy Now
            </button>
            {cart.find((cartProduct) => cartProduct._id === _id) ? (
              <button
                className="btn btn-outline btn-accent add-to-cart-btn"
                onClick={() => navigate("/cart")}
              >
                Go to Cart
              </button>
            ) : (
              <button
                className="btn btn-outline btn-accent add-to-cart-btn"
                onClick={() =>
                  auth.status ? addProductToCart(product) : navigate("/signin")
                }
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProductCard };
