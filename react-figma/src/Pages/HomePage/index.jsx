import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'Nabar.css'
import { Navbar } from '../../components/Navbar';

const HomePage = () => {
    return (
      <nav className="navbar">
        <div className="logo">NorthStar</div>
        <ul className="nav-links">
        <li><a link="#home">Home</a></li>
          <li><a link="#about">About</a></li>
          <li><a link="#contact">Contact Us</a></li>
  
        </ul>
        <div className="nav-icons">
          <i className="fa fa-user"></i>
  
          {/* Cart Icon with Badge */}
          <div className="cart-container">
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-badge">10</span>
          </div>
  
          {/* Menu Icon */}
          <i className="fa fa-bars"><img src="logo2.png"/></i>
        </div>
      </nav>
    );
  };
  

return (
  <div className="App">
  <Navbar posts={posts} postsLength={postsLenght}  loading={loading} setPosts={setPosts} />
</div>
);







export default HomePage;