import { useState } from "react";
import Products from "./components/Products";
import { products as firstProducts } from "./mocks/products.json";
import { filterByCategory, filterByRange } from "./helpers/filterProducts";

function useProducts() {
  const [products, setProducts] = useState(firstProducts);
  const [category, setCategory] = useState("all");

  const listProductsBeCategori = (category) => {
    if (category === "all") {
      setProducts(firstProducts);
      setCategory(category);
    } else {
      setProducts(filterByCategory(firstProducts, category));
      setCategory(category);
    }
  };

  const listProductsBeRange = (range) => {
    if (category === "all") {
      setProducts(filterByRange(firstProducts, range));
      setCategory(category);
      return;
    } else {
      setProducts(
        filterByRange(filterByCategory(firstProducts, category), range)
      );
    }
  };

  return { products, listProductsBeCategori, listProductsBeRange };
}

function App() {
  const { products, listProductsBeCategori, listProductsBeRange } =
    useProducts();
  const [rangeValue, setRangeValue] = useState(0);

  const categories = [
    "all",
    "home-decoration",
    "laptops",
    "smartphones",
    "fragrances",
    "skincare",
    "groceries",
  ];

  const handleOptionSelected = (e) => {
    listProductsBeCategori(e.target.value);
  };

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    listProductsBeRange(event.target.value); // filtrar productos rango de precios
  };

  return (
    <div className="App">
      <form>
        {/* <fieldset>
          <legend>Encuentra lo que deceas</legend>
          <label>
            Producto:
            <input type="text" />
          </label>
        </fieldset> */}

        <fieldset>
          <label>
            Categoria:
            <select
              onChange={(e) => {
                handleOptionSelected(e);
              }}
            >
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
            <input
              type="range"
              min="1"
              max="2000"
              onChange={(event) => handleRangeChange(event)}
            />
          </label>
          <p>Valor seleccionado: {rangeValue}</p>
        </fieldset>
        {/* <button type="submit">Buscar</button> */}
      </form>
      <Products products={products} />
    </div>
  );
}

export default App;
