import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductsListing.css";

function ProductsListing({finalProducts}) {
  // const { products } = useProducts();
  return (
    <div className="heading-products-container">
      {/* Heading */}
      <h1>All Products</h1>

      {/* <!-- All Product Cards --> */}
      <div className="products-container">
        {finalProducts.map(
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
