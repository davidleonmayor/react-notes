import { useContext } from "react";
import { AddToCartIcon } from "./Icons.jsx";
import { ProductsContext } from "../context/productsContext.jsx";
import "./Products.css";

function Products() {
  const { products } = useContext(ProductsContext);
  return (
    <section className="products">
      {products.map((product) => (
        <aside key={product.id} className="product">
          <img src={product.thumbnail} alt="MDN" />
          <div>
            <span>{product.title}</span> - <span>$ {product.price}</span>
          </div>
          <AddToCartIcon />
        </aside>
      ))}
    </section>
  );
}

export default Products;
