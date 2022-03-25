import React from "react";
import "./Filters.css";

function Filters() {
  return (
    <div class="filter-container">
      {/* <!-- Filter Heading --> */}
      <div class="filter-clear-box">
        <h2>Filters</h2>
        <button class="btn btn-brand">Clear All</button>
      </div>

      {/* Filter by Categories*/}
      <div>
        <h3 class="filter-label">Category</h3>
        <select name="category_list" id="categorylist" class="category-list">
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
          <input
            type="radio"
            id="4star_above"
            name="ratingfilter"
            value="4starabove"
          />
          <label for="4star_above" class="filter-radio-label">
            4 star & above{" "}
          </label>
          <br />
        </div>
        <div>
          <input
            type="radio"
            id="3star_above"
            name="ratingfilter"
            value="3starabove"
          />
          <label for="3star_above" class="filter-radio-label">
            3 star & above
          </label>
          <br />
        </div>
        <div>
          <input
            type="radio"
            id="2star_above"
            name="ratingfilter"
            value="2starabove"
          />
          <label for="2star_above" class="filter-radio-label">
            2 star & above
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="1star_above"
            name="ratingfilter"
            value="1starabove"
          />
          <label for="1star_above" class="filter-radio-label">
            1 star & above
          </label>
        </div>

        {/* Filter by Sorting */}
        <h3>Sort By</h3>
        <div>
          <input
            type="radio"
            id="price_lowtohigh"
            name="sortfilter"
            value="pricelowtohigh"
          />
          <label for="price_lowtohigh" class="filter-radio-label">
            Price: Low to High
          </label>
          <br />
        </div>
        <div>
          <input
            type="radio"
            id="price_hightolow"
            name="sortfilter"
            value="pricehightolow"
          />
          <label for="price_hightolow" class="filter-radio-label">
            Price: High to Low
          </label>
          <br />
        </div>
      </div>
    </div>
  );
}

export { Filters };
