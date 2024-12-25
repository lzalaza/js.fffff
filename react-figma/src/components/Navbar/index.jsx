import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'


const Navbar = () => {
  const  ProductCard = useSelector((state) => state.posts.ProductCard)

  return (
    <header style={{position: 'sticky', top:0 , zIndex: 9}}>
    <nav className='headercomponent'>
      <div className='log'><img src="./logo192.png" width="90px"/></div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart</Link></li>
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
    </header>
  )
};

export default Navbar;
<nav className="navbar">
      <div className="logo">NorthStar</div>
      <ul className="nav-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#contact">CONTACT US</a></li>
      </ul>
     
    </nav>