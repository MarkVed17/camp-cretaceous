import React from "react";
import "./Filters.css";

function Filters() {
  return (
    <div className="filter-container">
      {/* <!-- Filter Heading --> */}
      <div className="filter-clear-box">
        <h2>Filters</h2>
        <button className="btn btn-brand">Clear All</button>
      </div>

      {/* Filter by Categories*/}
      <div>
        <h3 className="filter-label">Category</h3>
        <select
          name="category_list"
          id="categorylist"
          className="category-list"
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
          data-price-input='{
              "0": "500",
              "1": "1000",
              "2": "1,500",
              "3": "2,000",
              "4": "2,500",
              "5": "3,500",
              "6": "5,000",
              "7": "7,500",
              "8": "10,000",
              "9": "15,000+"                        
            }'
        />

        {/* Filter by Ratings */}
        <h3>Rating</h3>
        <div>
          <label for="4star_above" className="filter-radio-label">
            <input
              type="radio"
              id="4star_above"
              name="ratingfilter"
              value="4starabove"
            />
            4 star & above
          </label>
        </div>
        <div>
          <label for="3star_above" className="filter-radio-label">
            <input
              type="radio"
              id="3star_above"
              name="ratingfilter"
              value="3starabove"
            />
            3 star & above
          </label>
        </div>
        <div>
          <label for="2star_above" className="filter-radio-label">
            <input
              type="radio"
              id="2star_above"
              name="ratingfilter"
              value="2starabove"
            />
            2 star & above
          </label>
        </div>
        <div>
          <label for="1star_above" className="filter-radio-label">
            <input
              type="radio"
              id="1star_above"
              name="ratingfilter"
              value="1starabove"
            />
            1 star & above
          </label>
        </div>

        {/* Filter by Sorting */}
        <h3>Sort By</h3>
        <div>
          <label for="price_lowtohigh" className="filter-radio-label">
            <input
              type="radio"
              id="price_lowtohigh"
              name="sortfilter"
              value="pricelowtohigh"
            />
            Price: Low to High
          </label>
        </div>
        <div>
          <label for="price_hightolow" className="filter-radio-label">
            <input
              type="radio"
              id="price_hightolow"
              name="sortfilter"
              value="pricehightolow"
            />
            Price: High to Low
          </label>
        </div>
      </div>
    </div>
  );
}

export { Filters };
