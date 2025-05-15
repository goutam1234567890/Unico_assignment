import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ProductCard = ({ product }) => {
  const { id, title, price, description, image } = product;
  const { cart, favorites, addToCart, removeFromCart, toggleFavorite } = useContext(GlobalContext);

  const quantity = cart[id] || 0;
  const isFavorite = favorites[id] || false;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-desc">{description}</p>
      <p className="product-price">${price.toFixed(2)}</p>

      <div className="actions">
        <button className="favorite-btn" onClick={() => toggleFavorite(id)} aria-label="Toggle Favorite">
          {isFavorite ? "❤️" : "🤍"}
        </button>

        {quantity === 0 ? (
          <button onClick={() => addToCart(id)} className="add-cart-btn">
            Add to Cart
          </button>
        ) : (
          <div className="quantity-controls">
            <button onClick={() => removeFromCart(id)} className="qty-btn" aria-label="Decrease quantity">-</button>
            <span className="qty-number">{quantity}</span>
            <button onClick={() => addToCart(id)} className="qty-btn" aria-label="Increase quantity">+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
