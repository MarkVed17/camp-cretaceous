import React from "react";
import "./HomeProductCard.css";

function HomeProductCard({ product }) {
  const { name, description, imageUrl } = product;
  return (
    <div className="card">
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
