import ProductsProvider from "./products";
import CartProvider from "./cart";

function IndexProvider({ children }) {
  return (
    <CartProvider>
      <ProductsProvider>{children}</ProductsProvider>;
    </CartProvider>
  );
}

export default IndexProvider;
