export const getProductsOfCategories = (products, categories) => {
  if (categories === "Any") {
    return products;
  }
  if (categories === "Jurassic Park") {
    return [
      ...products.filter((product) => product.categoryName === "Jurassic Park"),
    ];
  }
  if (categories === "The Lost World") {
    return [
      ...products.filter(
        (product) => product.categoryName === "The Lost World"
      ),
    ];
  }
  if (categories === "Jurassic Park III") {
    return [
      ...products.filter(
        (product) => product.categoryName === "Jurassic Park III"
      ),
    ];
  }
  if (categories === "Jurassic World") {
    return [
      ...products.filter(
        (product) => product.categoryName === "Jurassic World"
      ),
    ];
  }
  if (categories === "Fallen Kingdom") {
    return [
      ...products.filter(
        (product) => product.categoryName === "Fallen Kingdom"
      ),
    ];
  }
  return products;
};
