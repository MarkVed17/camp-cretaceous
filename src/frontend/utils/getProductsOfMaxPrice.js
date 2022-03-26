export const getProductsOfMaxPrice = (products, range) => {
  return products.filter((product) => product.price <= range);
};
