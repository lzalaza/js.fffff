import React from "react";
import "./PromotionsSection.css";

const PromotionsSection = () => {
  return (
    <section className="promotions">
      <div className="promotion-card">
      
        <h2>PEACE OF MIND</h2>
        <p>
          A one-stop platform for all your fashion needs, hassle-free. Buy with
          a peace of mind.
        </p>
        <button>BUY NOW</button>
      </div>
      <div className="promotion-card2">
      
        <h2>BUY 2 GET 1 FREE</h2>
        <p>
          End of season sale. Buy any 2 items of your choice and get 1 free.
        </p>
        <button>BUY NOW</button>
      </div>
    </section>
    
  );
};

export default PromotionsSection;
