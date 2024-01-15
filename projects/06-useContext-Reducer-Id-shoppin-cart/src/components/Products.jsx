import { AddToCartIcon } from "./Icons.jsx";
import "./Products.css";

function Products({ products }) {
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
