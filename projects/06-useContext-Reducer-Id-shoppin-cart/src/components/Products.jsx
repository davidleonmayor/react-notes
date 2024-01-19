import { useContext } from "react";
import { AddToCartIcon } from "./Icons.jsx";
import { ProductsContext } from "../context/products.jsx";
import { CartContext } from "../context/cart.jsx";

import "./Products.css";

function Products() {
  const { products } = useContext(ProductsContext);
  const { setCartContent } = useContext(CartContext);

  const handleAddToCart = () => {
    setCartContent(products[0]); // TODO: cambiar por el producto seleccionado
  };
  return (
    <section className="products">
      {products.map((product) => (
        <aside key={product.id} className="product">
          <img src={product.thumbnail} alt="MDN" />
          <div>
            <span>{product.title}</span> - <span>$ {product.price}</span>
          </div>
          <div onClick={handleAddToCart}>
            <AddToCartIcon />
          </div>
        </aside>
      ))}
    </section>
  );
}

export default Products;
