import React from "react";
import { useCart } from "../../contexts";
import "./CartSummary.css";

function CartSummary() {
  const { cartSummary } = useCart();
  const { cartTotalProducts, cartTotalPrice, cartTotalAmount } = cartSummary;

  return (
    <div className="cart-summary">
      {/* <!-- Cart Summary --> */}

      <h1>Cart Summary</h1>
      <hr />
      <div className="cart-price">
        <h3>Price ({cartTotalProducts} items)</h3>
        <h4>
          <span className="product-price">₹ {cartTotalPrice}</span>
        </h4>
      </div>
      <div className="cart-discount">
        <h3>Discount</h3>
        <h4>
          - <span className="product-price">₹ 0</span>
        </h4>
      </div>
      <div className="cart-shipping-charge">
        <h3>Shipping</h3>
        <h4>
          <span className="product-price">₹ 0</span>
        </h4>
      </div>
      <hr />
      <div className="cart-total">
        <h2>Total Amount</h2>
        <h2>
          <span className="product-price">₹ {cartTotalAmount}</span>
        </h2>
      </div>
      <hr />
      <button className="btn btn-brand btn-accent checkout-btn">
        Proceed to Checkout
      </button>
    </div>
  );
}

export { CartSummary };
