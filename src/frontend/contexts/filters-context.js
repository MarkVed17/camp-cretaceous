import { createContext, useContext, useReducer } from "react";
import { filtersReducer } from "../reducers";
const FiltersContext = createContext();

const filtersInitialState = {
  sortBy: "",
  categories: "Any",
  rating: "",
  maxPrice: 5500,
};

const FiltersProvider = ({ children }) => {
  const [filters, dispatchFilters] = useReducer(
    filtersReducer,
    filtersInitialState
  );

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

const useFilters = () => {
  const context = useContext(FiltersContext);

  if (context === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }

  return context;
};

export { filtersInitialState, useFilters, FiltersProvider };
