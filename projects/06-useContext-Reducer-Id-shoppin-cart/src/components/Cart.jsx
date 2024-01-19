import { useState, useContext } from "react";
import { CartContext } from "../context/cart";
import { RemoveFromCartIcon, CartIcon } from "./Icons";

import "./Cart.css";

function ProductInCart({ product }) {
  return (
    <div className="product-in-cart">
      <img src={product.thumbnail} alt={product.thumbnail} />
      <div className="product-info">
        <span>{product.title}</span> - <span>$ {product.price}</span>
      </div>
      <RemoveFromCartIcon />
      <span>
        {product.quality}
        <button>+</button>
      </span>
    </div>
  );
}

function Cart() {
  const { cartContent } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCartButtonClick = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      <button className="button-top-right" onClick={handleCartButtonClick}>
        <CartIcon />
      </button>
      {isCartVisible && (
        <div className="carts">
          {cartContent.map((product) => (
            <ProductInCart product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
