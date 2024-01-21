import { createContext, useState, useReducer } from "react";
import { products } from "../mocks/products.json";

function cartReducer(state, action) {
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
  const initialCartState = []; // products.slice(0, 1);
  const [cartContent, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (product) => {
    if (cartContent.find((item) => item.id === product.id)) {
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeToCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const value = {
    cartContent,
    addToCart,
    removeToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
export { CartContext };
