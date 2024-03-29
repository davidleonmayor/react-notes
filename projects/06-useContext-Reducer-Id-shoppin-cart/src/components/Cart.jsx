import { useState, useContext } from "react";
import { CartContext } from "../context/cart";
import { RemoveFromCartIcon, CartIcon } from "./Icons";
import "./Cart.css";

function ProductInCart({ product }) {
  const { removeToCart, incrementQuantity, decreaseQuantity } =
    useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const handleButtonRemove = (product) => {
    removeToCart(product);
  };

  return (
    <div className="product-in-cart">
      <img src={product.thumbnail} alt={product.thumbnail} />
      <div className="product-info">
        <span>{product.title}</span> - <span>$ {product.price}</span>
      </div>
      <div onClick={() => handleButtonRemove(product)}>
        <RemoveFromCartIcon />
      </div>
      <span>
        {/* <button onClick={() => setQuantity((prevState) => prevState + 1)}> */}
        <button onClick={() => incrementQuantity(product)}>+</button>
        {product.quantity}
        <button onClick={() => decreaseQuantity(product)}>-</button>
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
