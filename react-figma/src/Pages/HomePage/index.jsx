import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Top Section - Features */}
      <div className="flex justify-around text-center py-6 border-b">
        <div>
          <h4 className="font-bold">FREE SHIPPING</h4>
          <p>Enjoy free shipping on all orders above $100</p>
        </div>
        <div>
          <h4 className="font-bold">SUPPORT 24/7</h4>
          <p>Our support team is there to help you for queries</p>
        </div>
        <div>
          <h4 className="font-bold">30 DAYS RETURN</h4>
          <p>Simply return it within 30 days for an exchange.</p>
        </div>
        <div>
          <h4 className="font-bold">100% PAYMENT SECURE</h4>
          <p>Our payments are secured with 256 bit encryption</p>
        </div>
      </div>

      {/* Bottom Section - Promotions */}
      <div className="flex justify-center items-center py-12 gap-8">
        {/* Left Card */}
        <div className="bg-black text-white p-8 w-1/2 text-center">
          <h2 className="text-2xl font-bold mb-4">PEACE OF MIND</h2>
          <p className="mb-6">
            A one-stop platform for all your fashion needs, hassle-free. Buy
            with a peace of mind.
          </p>
          <button className="bg-white text-black py-2 px-4 rounded">
            BUY NOW
          </button>
        </div>

        {/* Right Card */}
        <div className="bg-black text-white p-8 w-1/2 text-center">
          <h2 className="text-2xl font-bold mb-4">BUY 2 GET 1 FREE</h2>
          <p className="mb-6">
            End of season sale. Buy any 2 items of your choice and get 1 free.
          </p>
          <button className="bg-white text-black py-2 px-4 rounded">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
