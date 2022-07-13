import React from "react";
import "./ProductsBanner.css";
import { useProducts } from "../../../contexts";
import { HomeProductCard } from "../HomeProductCard/HomeProductCard";
import { Link } from "react-router-dom";

function ProductsBanner({ title }) {
  const { products } = useProducts();

  const setIndex = () => {
    if (title === "Limited Editions") {
      let start = 0,
        end = 3;
      return { start, end };
    } else {
      let start = 9,
        end = 12;
      return { start, end };
    }
  };

  const { start, end } = setIndex();

  return (
    <div className="home-screen-row">
      <div className="cards-group-container">
        <h1 className="home-sub-heading">{title}</h1>

        {products.slice(start, end).map((product) => (
          <HomeProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* <!-- Link to products page --> */}
      <button className="btn btn-brand btn-accent home-link">
        <Link to="/products">Start Shopping </Link>
        <span className="material-icons arrow">arrow_right_alt</span>
      </button>
    </div>
  );
}

export { ProductsBanner };
