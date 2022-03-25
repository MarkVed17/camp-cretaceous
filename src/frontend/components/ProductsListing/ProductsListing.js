import React from "react";
import { useProducts } from "../../contexts";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductsListing.css";

function ProductsListing() {
  const { products } = useProducts();
  return (
    <div class="heading-products-container">
      {/* Heading */}
      <h1>All Products</h1>

      {/* <!-- All Product Cards --> */}
      <div class="products-container">
        {products.map(
          ({ _id, name, price, categoryName, imageUrl, rating }) => (
            <ProductCard
              key={_id}
              _id={_id}
              name={name}
              price={price}
              categoryName={categoryName}
              imageUrl={imageUrl}
              rating={rating}
            />
          )
        )}
      </div>
    </div>
  );
}

export { ProductsListing };
