import { createContext, useState, useReducer } from "react";
import { products } from "../mocks/products.json";

function cartReducer(state, action) {
  // console.info("action", action);
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((product) => product.id !== action.payload.id);
    default:
      return state;
  }
}

const CartContext = createContext();

function CartProvider({ children }) {
  const initialCartState = products.slice(0, 1);
  const [cartContent, dispatch] = useReducer(cartReducer, initialCartState);

  const setCartContent = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  // const [cartContent, setCartContent] = useState(initialCartState);
  const value = {
    cartContent,
    setCartContent,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
export { CartContext };
