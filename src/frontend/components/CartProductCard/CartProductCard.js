import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist, useCart } from "../../contexts";
import "./CartProductCard.css";

function CartProductCard({ product }) {
  const { _id, name, description, price, imageUrl, qty } = product;

  const { wishlist, moveProductToWishlist } = useWishlist();
  const { removeProductFromCart, updateQuantityOfProductInCart } = useCart();

  const navigate = useNavigate();
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} className="cart-img" />
      <div className="cart-primary">
        <h2 className="cart-product-name">{name}</h2>
        <p className="cart-product-description">{description}</p>
        <div className="cart-primary-action">
          {wishlist.find((product) => product._id === _id) ? (
            <button
              className="btn btn-brand btn-accent cart-btn"
              onClick={() => navigate("/wishlist")}
            >
              Go to Wishlist
            </button>
          ) : (
            <button
              className="btn btn-brand btn-accent cart-btn"
              onClick={() => moveProductToWishlist(product)}
            >
              Move to Wishlist
            </button>
          )}
          <button
            className="btn btn-outline btn-accent remove-cart-btn"
            onClick={() => removeProductFromCart(_id)}
          >
            Remove from Cart
          </button>
        </div>
      </div>
      <div className="cart-secondary">
        <h3>
          <span className="product-price">₹ {price * qty}</span>
        </h3>
        <div className="cart-quantity">
          <button
            className="cart-quantity-btn"
            onClick={() =>
              qty === 1
                ? removeProductFromCart(_id)
                : updateQuantityOfProductInCart(_id, "decrement")
            }
          >
            <span className="material-icons">remove</span>
          </button>
          <span className="cart-quantity-value">{qty}</span>
          <button className="cart-quantity-btn">
            <span
              className="material-icons"
              onClick={() => updateQuantityOfProductInCart(_id, "increment")}
            >
              add
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export { CartProductCard };
