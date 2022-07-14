import React from "react";
import { WishlistProductCard } from "../../components";
import { useWishlist } from "../../contexts";
import "./WishlistScreen.css";

function WishlistScreen() {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-container">
      {/* <!-- Wishlist Heading --> */}
      <h1 className="wishlist-heading">Wishlist</h1>

      {/* <!-- Wishlist Items --> */}

      {wishlist.length !== 0 ? (
        <>
          {wishlist.map((product) => (
            <WishlistProductCard key={product._id} product={product} />
          ))}
        </>
      ) : (
        <div className="wishlist-message">Looks empty!</div>
      )}
    </div>
  );
}

export { WishlistScreen };
