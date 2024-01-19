import { createContext, useState, useReducer } from "react";
import { products as firstProducts } from "../mocks/products.json";

// function reducer(state, action) {
//   switch (action.type) {
//     case "ADD_PRODUCT":
//       {
//         console.log("ADD_PRODUCT");
//       }
//       break;
//     case "REMOVE_PRODUCT":
//       {
//         console.log("REMOVE_PRODUCT");
//       }
//       break;
//     case "EMPTY_PRODUCT":
//       {
//         console.log("EMPTY_PRODUCT");
//       }
//       break;
//   }
// }

// function useProductReducer(initialState) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const addProduct = (product) => {
//     dispatch({ type: "ADD_PRODUCT", payload: product });
//   };

//   const removeProduct = (product) => {
//     dispatch({ type: "REMOVE_PRODUCT", payload: product });
//   };

//   const emptyProduct = () => {
//     dispatch({ type: "EMPTY_PRODUCT" });
//   };

//   return { products: state, addProduct, removeProduct, emptyProduct };
// }

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState(firstProducts);

  const value = {
    products,
    setProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
export { ProductsContext };
