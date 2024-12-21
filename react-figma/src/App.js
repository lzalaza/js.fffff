import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import FeaturesSection from "./FeaturesSection";
import PromotionsSection from "./PromotionsSection";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ProductGrid />
      <FeaturesSection />
      <PromotionsSection />
    </div>
  );
}




export default App;
