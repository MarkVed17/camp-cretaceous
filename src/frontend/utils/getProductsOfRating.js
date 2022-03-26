export const getProductsOfRating = (products, rating) => {
  if (rating === "4star_above") {
    return products.filter((product) => product.rating >= 4);
  }
  if (rating === "3star_above") {
    return products.filter((product) => product.rating >= 3);
  }
  if (rating === "2star_above") {
    return products.filter((product) => product.rating >= 2);
  }
  if (rating === "1star_above") {
    return products.filter((product) => product.rating >= 1);
  }
  return products;
};
