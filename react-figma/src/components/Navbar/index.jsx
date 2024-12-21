import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">NorthStar</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="nav-icons">
        {/* User Icon */}
        <i className="fa fa-user"></i>

        {/* Cart Icon with Badge */}
        <div className="cart-container">
          <i className="fa fa-shopping-cart"></i>
          <span className="cart-badge">10</span>
        </div>

        {/* Menu Icon */}
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;

