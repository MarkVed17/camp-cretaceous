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
      <div className="cart-container">
        {cart.map((cartProduct) => (
          <CartProductCard key={cartProduct._id} product={cartProduct} />
        ))}
      </div>
      
      <CartSummary />
    </div>
  );
}

export { CartScreen };
