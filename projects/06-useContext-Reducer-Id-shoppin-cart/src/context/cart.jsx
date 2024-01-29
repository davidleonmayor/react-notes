import { createContext, useState, useReducer } from "react";
import { products } from "../mocks/products.json";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { ...action.payload, quantity: 1 }]; // [...state,
    case "REMOVE_FROM_CART":
      return state.filter((product) => product.id !== action.payload.id);
    case "INCREMENT_QUANTITY":
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    case "DECREASE_QUANTITY":
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity > 1 ? product.quantity - 1 : 1,
          };
        }
        return product;
      });
    default:
      return state;
  }
}

const CartContext = createContext();
function CartProvider({ children }) {
  // const initialCartState = []; // products.slice(0, 1);
  const initialCartState = [{ ...products.slice(0, 1)[0], quantity: 1 }];
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

  const incrementQuantity = (product) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: product });
  };

  const decreaseQuantity = (product) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: product });
  };

  const value = {
    cartContent,
    addToCart,
    removeToCart,
    incrementQuantity,
    decreaseQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
export { CartContext };
