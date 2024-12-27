import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../images/logo.png';
import user from '../../images/logo.png';
import cart from '../../images/logo3.png';
import menu from '../../images/logo2.png';
import React, { useState } from 'react';

const Navbar = () => {
  // Use safe selector
  const cartItems = useSelector((state) => state.users?.cartItems || []);
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="header">
      
      <div className="logo">NorthStar</div>
      <div className="nav-links">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </div>

      <div className="allicons">
        <div className="user">
          <img src={user} alt="User" />
        </div>
        <div
          className="cartIcon"
          onClick={() => setShowCartDropdown((prev) => !prev)}
          
          aria-label="View Cart"
        >
          <img src={cart} alt="Cart" />
          <span className="carti">{cartItems.length}</span>
        </div>
        <div className="sideMenu">
          <img src={menu} alt="Menu" />
        </div>
      </div>

      {showCartDropdown && (
        <div className="navbcart">
          <h3>Cart Items</h3>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.title} - {item.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p>There is nothing in your Cart.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
