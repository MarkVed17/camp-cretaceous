import React from "react";

import {
  CLEAR_FILTERS,
  SORT_BY,
  CATEGORY,
  RATING,
  MAX_PRICE,
} from "../../constants/filtersConstants";
import "./Filters.css";

function Filters({ filters, dispatchFilters }) {

  const { sortBy, categories, rating, maxPrice } = filters;

  return (
    <div className="filter-container">
      {/* <!-- Filter Heading --> */}
      <div className="filter-clear-box">
        <h2>Filters</h2>
        <button
          className="btn btn-brand"
          onClick={() => dispatchFilters({ type: CLEAR_FILTERS })}
        >
          Clear All
        </button>
      </div>

      {/* Filter by Categories*/}
      <div>
        <h3 className="filter-label">Category</h3>
        <select
          name="category_list"
          id="categorylist"
          className="category-list"
          value={categories}
          onChange={(e) =>
            dispatchFilters({ type: CATEGORY, payload: e.target.value })
          }
        >
          <option value="any">Any</option>
          <option value="Jurassic Park">Jurassic Park</option>
          <option value="The Lost World">The Lost World</option>
          <option value="Jurassic Park III">Jurassic Park III</option>
          <option value="Jurassic World">Jurassic World</option>
          <option value="Fallen Kingdom">Fallen Kingdom</option>
        </select>

        {/* Filter by Price Range Slider */}
        <h3>Max-Price</h3>
        <input
          type="range"
          name="max_price-slider"
          id="maxprice-slider"
          min="500"
          max="5500"
          step="500"
          value={maxPrice}
          onChange={(e) =>
            dispatchFilters({ type: MAX_PRICE, payload: e.target.value })
          }
        />

        {/* Filter by Ratings */}
        <h3>Rating</h3>
        <div>
          <label htmlFor="4star_above" className="filter-radio-label">
            <input
              type="radio"
              id="4star_above"
              name="ratingfilter"
              value="4star_above"
              checked={rating === "4star_above"}
              onChange={() =>
                dispatchFilters({ type: RATING, payload: "4star_above" })
              }
            />
            4 star & above
          </label>
        </div>
        <div>
          <label htmlFor="3star_above" className="filter-radio-label">
            <input
              type="radio"
              id="3star_above"
              name="ratingfilter"
              value="3star_above"
              checked={rating === "3star_above"}
              onChange={() =>
                dispatchFilters({ type: RATING, payload: "3star_above" })
              }
            />
            3 star & above
          </label>
        </div>
        <div>
          <label htmlFor="2star_above" className="filter-radio-label">
            <input
              type="radio"
              id="2star_above"
              name="ratingfilter"
              value="2star_above"
              checked={rating === "2star_above"}
              onChange={() =>
                dispatchFilters({ type: RATING, payload: "2star_above" })
              }
            />
            2 star & above
          </label>
        </div>
        <div>
          <label htmlFor="1star_above" className="filter-radio-label">
            <input
              type="radio"
              id="1star_above"
              name="ratingfilter"
              value="1star_above"
              checked={rating === "1star_above"}
              onChange={() =>
                dispatchFilters({ type: RATING, payload: "1star_above" })
              }
            />
            1 star & above
          </label>
        </div>

        {/* Filter by Sorting */}
        <h3>Sort By</h3>
        <div>
          <label htmlFor="price_lowtohigh" className="filter-radio-label">
            <input
              type="radio"
              id="price_lowtohigh"
              name="sortfilter"
              value="pricelowtohigh"
              checked={sortBy === "LOW_TO_HIGH"}
              onChange={() =>
                dispatchFilters({ type: SORT_BY, payload: "LOW_TO_HIGH" })
              }
            />
            Price: Low to High
          </label>
        </div>
        <div>
          <label htmlFor="price_hightolow" className="filter-radio-label">
            <input
              type="radio"
              id="price_hightolow"
              name="sortfilter"
              value="pricehightolow"
              checked={sortBy === "HIGH_TO_LOW"}
              onChange={() =>
                dispatchFilters({ type: SORT_BY, payload: "HIGH_TO_LOW" })
              }
            />
            Price: High to Low
          </label>
        </div>
      </div>
    </div>
  );
}

export { Filters };
