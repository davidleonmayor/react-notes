import { AddToCartIcon } from "./Icons.jsx";
import "./Products.css";

// categorias de productos
// ['home-decoration', 'laptops', 'smartphones', 'fragrances', 'skincare', 'groceries']

function Products({ products }) {
  return (
    <section className="products">
      {products.map((product) => (
        <aside className="product">
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
