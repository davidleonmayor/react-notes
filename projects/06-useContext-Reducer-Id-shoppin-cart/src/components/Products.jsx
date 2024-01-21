import { useContext } from "react";
import { AddToCartIcon } from "./Icons.jsx";
import { ProductsContext } from "../context/products.jsx";
import { CartContext } from "../context/cart.jsx";
import "./Products.css";

function Products() {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      thumbnail: product.thumbnail,
      title: product.title,
    });
  };

  return (
    <section className="products">
      {products.map((product) => (
        <aside key={product.id} className="product">
          <img src={product.thumbnail} alt="MDN" />
          <div>
            <span>{product.title}</span> - <span>$ {product.price}</span>
          </div>
          <div onClick={() => handleAddToCart(product)}>
            <AddToCartIcon />
          </div>
        </aside>
      ))}
    </section>
  );
}

export default Products;
