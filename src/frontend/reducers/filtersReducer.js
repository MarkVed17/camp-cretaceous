import { filtersInitialState } from "../contexts";
import {
  CLEAR_FILTERS,
  SORT_BY,
  CATEGORY,
  RATING,
  MAX_PRICE,
} from "../constants/filtersConstants";

const filtersReducer = (state, action) => {
  switch (action.type) {
    case CLEAR_FILTERS:
      return filtersInitialState;

    case SORT_BY:
      return { ...state, sortBy: action.payload };

    case CATEGORY:
      return { ...state, categories: action.payload };

    case RATING:
      return { ...state, rating: action.payload };

    case MAX_PRICE:
      return { ...state, maxPrice: action.payload };

    default:
      return state;
  }
};

export { filtersReducer };
