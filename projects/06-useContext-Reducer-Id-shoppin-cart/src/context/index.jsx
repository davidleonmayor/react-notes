import ProductsProvider from "./productsContext";

function IndexProvider({ children }) {
  return <ProductsProvider>{children}</ProductsProvider>;
}

export default IndexProvider;
