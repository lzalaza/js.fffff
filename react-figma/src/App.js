import FeaturesSection from "./components/FeaturesSection";
import PromotionsSection from "./components/PromotionsSection";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage"
import './App.css';
import TopSellers from './components/Top Sellers Footer';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';




function App() {
  const location = useLocation();

  return (
    
      <div className="app-container">
        <Navbar />
        
        <div className="content">
          <Routes>
            
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            
           </Routes>

          {location.pathname === '/' && (
            <>
              <FeaturesSection />
              <PromotionsSection />
            </>
          )}
        </div>
        <TopSellers />
        
      </div>
    
  );
}


export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
