import React from "react";
import { useCart } from "../../contexts";
import { CartProductCard, CartSummary } from "../../components";
// import "../cart/cart.css";
import "./OrderSummaryScreen.css";

const OrderSummaryScreen = () => {
  const { cart } = useCart();

  return (
    <div className="ordersummary-container">
      <h1 className="summary-heading">Order Summary</h1>

      {cart.length !== 0 ? (
        <div className="summary-container cart__items">
          {cart.map((product) => (
            <CartProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="cart-message"> Looks empty! </div>
      )}

      {cart.length !== 0 && <CartSummary />}
    </div>
  );
};

export { OrderSummaryScreen };
