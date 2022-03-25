import React from "react";

function StarRating({ rating }) {
  return (
    <div className="rating simple">
      <span className="material-icons rating-icon">
        {rating > 0 ? (rating > 0.5 ? "star" : "star_half") : "star_border"}
      </span>
      <span className="material-icons rating-icon">
        {rating > 1 ? (rating > 1.5 ? "star" : "star_half") : "star_border"}
      </span>
      <span className="material-icons rating-icon">
        {rating > 2 ? (rating > 2.5 ? "star" : "star_half") : "star_border"}
      </span>
      <span className="material-icons rating-icon">
        {rating > 3 ? (rating > 3.5 ? "star" : "star_half") : "star_border"}
      </span>
      <span className="material-icons rating-icon">
        {rating > 4 ? (rating > 4.5 ? "star" : "star_half") : "star_border"}
      </span>
    </div>
  );
}

export { StarRating };
