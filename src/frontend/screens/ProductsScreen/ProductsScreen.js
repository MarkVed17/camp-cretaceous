import React from "react";
import { Filters, ProductsListing } from "../../components";
import { useProducts, useFilters } from "../../contexts";
import { getFinalProducts } from "../../utils";
import "./ProductsScreen.css";

function ProductsScreen() {
  const { products } = useProducts();

  const { filters, dispatchFilters } = useFilters();
  const { sortBy, categories, rating, maxPrice } = filters;

  const finalProducts = getFinalProducts(products, filters);

  return (
    <div className="main-container">
      <Filters
        filters={{ sortBy, categories, rating, maxPrice }}
        dispatchFilters={dispatchFilters}
      />
      <ProductsListing finalProducts={finalProducts} />
    </div>
  );
}

export { ProductsScreen };
