import { createContext, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const initialFilterValue = {
    category: "all",
    rangePrice: 0,
  };
  const [filter, setFilter] = useState(initialFilterValue);

  const value = {
    filter,
    setFilter,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

function useFilter() {}
