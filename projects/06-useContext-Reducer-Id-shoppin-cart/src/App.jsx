import Products from "./components/Products";
import FilterVar from "./components/FilterVar";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Cart />
      <FilterVar />
      <Products />
    </div>
  );
}

export default App;
