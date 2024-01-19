import { useState, useContext } from "react";
import { ProductsContext } from "../context/products";
import { filterByCategory, filterByRange } from "../helpers/filterProducts";
import { products as initialProducts } from "../mocks/products.json";

function FilterVar() {
  const { setProducts } = useContext(ProductsContext);
  const initialFilterValue = {
    category: "all",
    rangePrice: 0,
  };
  const [filter, setFilter] = useState(initialFilterValue);

  const categories = [
    "all",
    "home-decoration",
    "laptops",
    "smartphones",
    "fragrances",
    "skincare",
    "groceries",
  ];

  const handleOptionSelected = (event) => {
    const newState = { ...filter, category: event.target.value };
    setFilter(newState);
  };

  const handleRangeChange = (event) => {
    const newState = { ...filter, rangePrice: event.target.value };
    setFilter(newState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (filter.category === "all") {
      const elements = filterByRange(initialProducts, filter.rangePrice);
      setProducts(elements);
    } else {
      const elements = filterByRange(
        filterByCategory(initialProducts, filter.category),
        filter.rangePrice
      );
      setProducts(elements);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          Categoria:
          <select onChange={handleOptionSelected}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </fieldset>

      <fieldset>
        <label>
          Rango de precios:
          <input type="range" min="1" max="2000" onChange={handleRangeChange} />
        </label>
        <p>Valor seleccionado: {filter.rangePrice}</p>
      </fieldset>
      <button type="submit">Buscar</button>
    </form>
  );
}

export default FilterVar;
