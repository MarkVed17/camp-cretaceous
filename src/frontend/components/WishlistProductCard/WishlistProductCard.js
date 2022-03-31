import React from "react";
import { useWishlist, useCart } from "../../contexts";
import "./WishlistProductCard.css";

function WishlistProductCard({ product }) {
  const { name, description, price, imageUrl } = product;

  const { removeProductFromWishlist } = useWishlist();
  const { cart, addProductToCart, updateQuantityOfProductInCart } = useCart();

  const addToCartHandler = (product) => {
    if (cart.find((cartProduct) => cartProduct._id === product._id)) {
      updateQuantityOfProductInCart(product._id, "increment");
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
          Add to Cart
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
