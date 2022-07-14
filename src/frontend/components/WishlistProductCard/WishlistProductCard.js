import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist, useCart } from "../../contexts";
import "./WishlistProductCard.css";

function WishlistProductCard({ product }) {
  const { name, description, price, imageUrl } = product;

  const { removeProductFromWishlist } = useWishlist();
  const { cart, addProductToCart } = useCart();

  const navigate = useNavigate();

  const addToCartHandler = (product) => {
    if (cart.find((cartProduct) => cartProduct._id === product._id)) {
      navigate("/cart");
    } else {
      addProductToCart(product);
    }
  };

  return (
    <div className="wishlist-item">
      <div className="wishlist-media">
        <img src={imageUrl} alt={name} className="wishlist-img" />
      </div>

      <div className="wishlist-primary">
        <h2 className="wishlist-product-name">{name}</h2>
        <p className="wishlist-product-description">{description}</p>
        <button
          className="btn btn-brand btn-accent wishlist-cart-btn"
          onClick={() => addToCartHandler(product)}
        >
          {cart.find((cartProduct) => cartProduct._id === product._id)
            ? "Go to Cart"
            : "Add to Cart"}
        </button>
      </div>

      <div className="wishlist-secondary">
        <h3>
          <span className="product-price">₹</span> {price}
        </h3>
        <button className="wishlist-fav-icon">
          <span
            className="material-icons"
            title="Remove from Wishlist"
            onClick={() => removeProductFromWishlist(product._id)}
          >
            favorite
          </span>
        </button>
      </div>
    </div>
  );
}

export { WishlistProductCard };
