import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCartItem } from '../../Redux/usersSlice'; 
import './CartPage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.users.cartItems || []);

  const handleRemove = (id) => {
    console.log('Remove button clicked for item id:', id);
    dispatch(removeCartItem(id)); 
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <ul className="cart-items-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;