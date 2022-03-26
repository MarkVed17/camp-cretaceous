import {
  getProductsSorted,
  getProductsOfCategories,
  getProductsOfRating,
  getProductsOfMaxPrice,
} from "./index";

export const getFinalProducts = (products, filters) => {
  
  const { sortBy, categories, rating, maxPrice } = filters;

  const productsSorted = getProductsSorted(products, sortBy);

  const productsOfCategories = getProductsOfCategories(
    productsSorted,
    categories
  );

  const productsOfRating = getProductsOfRating(productsOfCategories, rating);

  const productsOfMaxPrice = getProductsOfMaxPrice(productsOfRating, maxPrice);

  return productsOfMaxPrice;
};
