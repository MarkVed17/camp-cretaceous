import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data.products);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductsContext);

  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
};

export { useProducts, ProductsProvider };
