import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeProductCard.css";

function HomeProductCard({ product }) {
  const { name, description, imageUrl } = product;
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate("/products")}>
      <div className="card__primary-action">
        <img className="card__media" src={imageUrl} alt={name}></img>
        <div className="card__primary">
          <h2 className="card__title">{name}</h2>
          <h3 className="card__subtitle">{description}</h3>
        </div>
      </div>
    </div>
  );
}

export { HomeProductCard };
