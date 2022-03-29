import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductsListing.css";

function ProductsListing({ finalProducts }) {
  // const { products } = useProducts();
  return (
    <div className="heading-products-container">
      {/* Heading */}
      <h1>All Products</h1>

      {/* <!-- All Product Cards --> */}
      <div className="products-container">
        {finalProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export { ProductsListing };
