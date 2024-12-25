import React from "react";
import './TopSellers.css'




const TopSellers = () => {
  return (
    <div className="alll">
      {/* Top Sellers Section */}
      <section className="top-sellers">
        <h2>Top Sellers</h2>
        <p>Browse our top-selling products</p>
        <br />
        <br />
        <br />
        <div className="products-grid">
          <div className="product">
          <img src='https://s3-alpha-sig.figma.com/img/7b6f/f51f/a7b07a1530627a60ba6202c547e73b5b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gpLy8n4Z28BTPGQYQTzPJK2seunKGkX4bscX-v01C3fO9vRgUu0zeIDhNIl6~HTLPdUwUY0KlhNItFW-Y8aCUvasnPmR0Qx0TH~F~2XKyE2xtr81TbRR05p8iz4XD3zOouf-fD4wfMlspQY6Hv7u6YDSx2Ez7gKAsivMxBHbCCHonYSarclqmzkvo7BlilpJjNd-nnClhsssMWM8K~nWpS5ZdQ2uwkpdRgHjFWbjX~FArQXdATwIYnygrDAiZjZVJoWHyM5dbOVBCNUih3EhPE4mmEOiZkQvbaMvB7Mo00qz4Ayf1Zai571AKwsveWUTylGH5xJd7OBx8BpP-pZTcQ__' alt="" />
            <h3>Gray Polo Shirt</h3>
            <p>$49.00</p>
          </div>
          <div className="product">
            <img src="https://s3-alpha-sig.figma.com/img/b554/5253/8d8ae2b48a948cedef0f747e905e7db2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R6JHEHVf2xsmOxhuczRe7SAvBaU8eEP3GosYCL4iZKmQmm38osWGTkZWFf-57eVQ8C237nkobNkFO5qFM5C8nUEUX918xurI1P83fb5kD514bFQ7uOaVURm7pDLQmKZ6Huw~4fdO3znBqTkP2Xp4fyvDLfEPeQVcVE9It23tSzYNMwLbqHF-NUXFB2it7qzgNi4RLdmo6eA0Kujbwfq0bOMuOPYukx6fz7ZAB8csji7C8LVjpGGvcJfeymdYS7HRwCwSgjFMenDejMugMdDMpPIymF-PY-QHzTuTsKAZTPXtLoXpoKwpDOn58t-pKEaV8Y3yOQd0h3hXw5I13ICREA__" alt="Red Shirt" />
            <h3>Red Shirt</h3>
            <p>$69.00</p>
          </div>
          <div className="product">
            <img src="https://s3-alpha-sig.figma.com/img/6c3c/0b1c/1824dad1cad83682051563ca4bdc3867?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JT78ADomnPN5zhDcW0gL29X3xpCVuEMPDz2kGNEuvbX5WwViVAR-FW4eNHVXzKOiJDqemcrIgdc7jF7ERdrsb0gLD0~TTb4MzxHHZZcKw7s4kwoKhBcGqDMrqyAwCHLDKZSI-EXtqR~v8r~B6fzsJKRNTQ~tEUWQ8fTGcBMg5MwhF1MeAV6MDIqQBQTZEfyczkeukUix-bRy2ug7dUknIK9FVHLF2Ivxt1iMaJE4~P4NmU6mhJdYUSjW6qLa7WBLblC8ZdpGUfG8nFUt1aTCetPPX18pIQKpUM2RE8iifkDjaNyxGHWC57cEm~bY6N1~dygw0iOzTke-YeVnf6AnzQ__" alt="Polo White Shirt" />
            <h3>Polo White Shirt</h3>
            <p>$29.00</p>
          </div>
          <div className="product">
            <img src="https://s3-alpha-sig.figma.com/img/99e9/8d20/2acb08e3d4897ffd1d06afa27819e808?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lj3ELKTn1S4qiM515CwQkSt3ll7vyWHIEg-1sIK5xmdZ4m7hGRCHleJSHw6axMQvRzlTiYvZ-~e-6A6ejyczWedvqFR79kLT2qaf8PTf6qAkatkP8aZhxlTFB7f2bomVdDLZ1OZVHkzEkh6ycgBM9DxCL79sNAhVRenAIpa7S4N-MD3ouYlmxcdT2-ntamCBF-vnONF0rXu9fU4mCJWoc5ZzItvcgc46kSHHmMH4xk0erHFhP4qeEEBXeZEXeWC963FMe-O4M~sNhKO7OT6GUzpAHQpxVHTpDGtcFpe6eyoKgGni1Gn3TQH6PvQSxR1PYfeY30MN1VzkoOGcXplrkw__" alt="Pink Casual Shirt" />
            <h3>Pink Casual Shirt</h3>
            <p>$39.00</p>
          </div>
        </div>
        <button className="shop-now">Shop Now</button>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-columns">
          <div className="column">
            <h4>COMPANY INFO</h4>
            <ul>
              <li>About Us</li>
              <br />
              <li>Latest Posts</li>
              <br />
              <li>Contact Us</li>
              <br />
              <li>Shop</li>
            </ul>
          </div>
          <div className="column">
            <h4>HELP LINKS</h4>
            <ul>
              <li>Tracking</li>
              <br />
              <li>Order Status</li>
              <br />
              <li>Delivery</li>
              <br />
              <li>Shipping Info</li>
              <br />
              <li>FAQ</li>
            </ul>
          </div>
          <div className="column">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li>Special Offers</li>
              <br />
              <li>Gift Cards</li>
              <br />
              <li>Advertising</li>
              <br />
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className="column">
            <h4>GET IN THE KNOW</h4>
            <form>
              <input type="email" placeholder="Enter email" />
              <button type="submit">&rarr;</button>
            </form>
            
          </div>
        </div>
        <div>
          <p className="footer-bottom">&copy; 2020 NorthStar eCommerce</p>
          <p className="footer-bottom">Privacy Policy | Terms & Conditions</p>
          <div className="payment-icons">
          <img src="https://s3-alpha-sig.figma.com/img/1c9d/d583/24bc8d20ec2fb9c01ac67e66ab576c6a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f6ajsnfTapxnWuopWI6vdyeU6M4mDh~wwo5CMkFeu9Vka8JF-fWtMWyMNHq9HnEmiLpPaLd65g~RKxS5UEsnF8ujyI00TxRxpBXlxBCsTQ9PqWiVVk-6e~ce5SFzHsmGh8uU-WGiPvoQSK3qBRaLFZ-pxx6n4HQap77yWQRxeegeoktj6V7qoO1QUsgBM9Gux9aIVAFMusXtkOaNXQoqtr6NxNEICSe7K8DG42e0WDg1yKQ1JEXIxgeZoICGacUlMIlYARMB1kP4QIodIzcXQbVKnev13e49e6935G7EmHU0s9qh6G5BeP71kUeKibTtotQgYYSVPYqFMxlZVWSpzg__" alt="Visa" />
          <img src="https://s3-alpha-sig.figma.com/img/e9e2/dd16/053899ff2878f667a635fd7a560d6d2b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z5DiXONr0CJ-K-nvMx6Y3ZoJF9BiTCOIAavi-TtL-eX5tISYiwgvr-Rj2kmDBCQcfmloxFyBMcy1sRJhYT8KxX~JI01W~XwHbgmalROz0J2sS-cERTs4HRWWdfKQ9WmEYDO-EsXwzpHvQG1i3Jo0DWVlJamaCo3ml9aY8xbmDFszY4Kszdm1Q5DHcm3P2XCneZI6nG3wWucwighTRi9MF6OkGJRKqjk6lYqMaLtJpz8J8r4A1roHD6f6YmtV7gFQvp530p847Aw~WTwPxj2R3~CmX82xlXKNx5avZVXfdbtQlRC3eifa6Ghxs~cQ-b6Gyl2bdlMNyy1CAOG02W4fLg__" alt="*" />
          <img src="https://s3-alpha-sig.figma.com/img/0790/7732/d09a4ecdd89f6c5e9a8ab9b6d4817a6d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k~oO3J755-B1JNwcxF8U50gUVLWIHrjJNw0sGt6gg1khiE-jsdyUgWFh9j2yq9GTwSv55Nd0SYs-Vp4PBm5kBlf9ql-kF9i1zQM3Gis-hidAZ7y9afWxkGX52NpY1FBCWjudSOItixKYocPYQQkjtYcx55vxC7yUQNCEjJy1-Dik4fWUt5VfVIrZ~YHSqQZ6VDX6OeSV-INjirqtYmCrhho0cAWGzD3mRi0Qh03SxXfOZmsmB2-yJajAH4Xq~XyoytiRkLMpVzaQaH6Blu2DVdBqJZCqMVF4fRrD4ZaJz2vOeHAwJ7c-xgIpP-dNGUlV-61lQANZyx82uJKsgpFqTQ__" alt="PayPal" />
          <img src="https://s3-alpha-sig.figma.com/img/7aea/366f/1a58710adbf86230cf7e2a4e2e66af2c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LrgTHmC55G~~k8MhQmj53A8dJh7oi8oLsUrn24vBAPtIdP2W4hH6SkacEB4MtYCl5J8FzcEhJF~8t3JNCr09gWFtajvXdaSuv6YOE6utv7AIsZBHCsSFrIrcynQdIDNSX4-lcUWXtP-3g6bpHLilaEUJlfB74RhGWbayHh3Qjce0Mxyl51Dt3Ydd4pl4wgjcxkJ5J9wajxXxJTZOGKLC3dvr9YNzAem93SOZsYAddYuvospP3y~jBZXtTQ~4UoLMlOgxyeRe5ecRlJ7cLhzRmgt722s4cs9D2Il9KST2CYXfpc6UuN6DG~uOOunAFziiYTUCMMdvMID9CE8abpa~Ww__" alt="Visa Electron" />
            
           </div>
        </div>
        
      </footer>
      
    </div>
  );
};

export default TopSellers;

