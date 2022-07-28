import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useCart, useUser } from "../../contexts";
import { clearCartService, loadScript } from "../../services";
import "./CartSummary.css";

function CartSummary() {
  const { cartSummary, setCart } = useCart();
  const { deliveryAddress } = useUser();
  const {
    auth: { token },
  } = useAuth();

  const { cartTotalProducts, cartTotalPrice, cartTotalAmount } = cartSummary;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  async function displayRazorpay(e) {
    e.preventDefault();
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!response) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      currency: "INR",
      amount: cartTotalAmount * 100,
      name: "Camp Cretaceous",
      description: "Thank you for trusting us",
      image: "",

      handler: async () => {
        await clearCartService(setCart, token);
        navigate("/products");
      },
      prefill: {
        contact: "7777777777",
        email: "vedantlahane@gmail.com",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

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

      {pathname === "/orderSummary" && (
        <div className="address">
          <h2>Address Details</h2>
          <div className="address-details">
            <p>{deliveryAddress?.name}</p>
            <p>{deliveryAddress?.area}</p>
            <p>{deliveryAddress?.locality}</p>
            <p>
              {deliveryAddress?.city} , {deliveryAddress?.pincode} ,
              {deliveryAddress?.state}
            </p>
            <p>{deliveryAddress?.mobile}</p>
          </div>
        </div>
      )}
      {pathname === "/orderSummary" ? (
        <button
          className="btn btn-brand btn-accent checkout-btn"
          onClick={displayRazorpay}
        >
          Place Order
        </button>
      ) : (
        <button
          className="btn btn-brand btn-accent checkout-btn"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export { CartSummary };
