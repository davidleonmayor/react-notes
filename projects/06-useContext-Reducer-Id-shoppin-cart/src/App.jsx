import { useState, useEffect, useRef } from "react";
import Products from "./components/Products";
import { products as firstProducts } from "./mocks/products.json";

function useProducts() {
  const [products, setProducts] = useState([]);
  const firstProductFeching = useRef([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    firstProductFeching.current = firstProducts;
    setProducts(firstProducts);
  }, []);

  const listProductsBeCategori = (category) => {
    if (!category) return;

    const itemFilteres = firstProductFeching.current.filter(
      (product) => product.category === category
    );
    setProducts(itemFilteres);
    setCategory(category);
    console.log("has seleccionado la categoria: ", category);
  };

  const listProductsBeRange = (range) => {
    if (!category) {
      let itemFilteres = firstProductFeching.current.filter(
        (product) => product.price >= range
      );
      setProducts(itemFilteres);
    } else {
      let itemFilteres = firstProductFeching.current.filter(
        (product) => product.price >= range && product.category === category
      );
      setProducts(itemFilteres);
    }
  };

  return { products, listProductsBeCategori, listProductsBeRange };
}

function App() {
  const { products, listProductsBeCategori, listProductsBeRange } =
    useProducts();
  const [rangeValue, setRangeValue] = useState(0);

  const categories = [
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
        <fieldset>
          <legend>Encuentra lo que deceas</legend>
          <label>
            Producto:
            <input type="text" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Categoria:
            <select
              onChange={(e) => {
                handleOptionSelected(e);
              }}
            >
              {categories.map((category) => (
                <option value={category}>{category}</option>
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
        <button type="submit">Buscar</button>
      </form>
      <Products products={products} />
    </div>
  );
}

export default App;
