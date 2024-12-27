import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="feature">
        <h3>🚚 FREE SHIPPING</h3>
        <p>Enjoy free shipping on all orders above $100</p>
      </div>
      <div className="feature">
        <h3>⚽ SUPPORT 24/7</h3>
        <p>Our support team is there to help you for queries</p>
      </div>
      <div className="feature">
        <h3>🔄 30 DAYS RETURN</h3>
        <p>Simply return it within 30 days for an exchange.</p>
      </div>
      <div className="feature">
        <h3>🔒 100% PAYMENT SECURE</h3>
        <p>Our payments are secured with 256-bit encryption</p>
      </div>
    </section>
  );
};

export default FeaturesSection;
