export const getProductsSorted = (products, sortBy) => {
  if (sortBy === "LOW_TO_HIGH") {
    return [...products.sort((a, b) => a.price - b.price)];
  }
  if (sortBy === "HIGH_TO_LOW") {
    return [...products.sort((a, b) => b.price - a.price)];
  }
  return products;
};
