import React from "react";
import { CartSummary, CartProductCard } from "../../components";
import { useCart } from "../../contexts";
import "./CartScreen.css";

function CartScreen() {
  const { cart } = useCart();
  return (
    <div className="cart-management-container">
      <h1 className="cart-heading">Cart</h1>

      {/* <!-- Cart --> */}
      {cart.length !== 0 ? (
        <div className="cart-container">
          {cart.map((cartProduct) => (
            <CartProductCard key={cartProduct._id} product={cartProduct} />
          ))}
        </div>
      ) : (
        <div className="cart-message"> Looks empty! </div>
      )}

      {cart.length !== 0 && <CartSummary />}
    </div>
  );
}

export { CartScreen };
