import React from "react";
import { Filters, ProductsListing } from "../../components";
import "./ProductsScreen.css";

function ProductsScreen() {
  return (
    <div className="main-container">
      <Filters />
      <ProductsListing />
    </div>
  );
}

export { ProductsScreen };
