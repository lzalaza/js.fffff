import React from 'react';
import './HeroSection.css';
import { useSelector } from 'react-redux';

const HeroSection = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>STYLIST PICKS BEAT</h1>
        <h1> THE HEAT</h1>
        <button className="shop-now-btn" >Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;