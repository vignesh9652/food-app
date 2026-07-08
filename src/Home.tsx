import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          🌿 Fresh • Healthy • Quality
        </div>

        <h1 className="hero-title">Fresh Mart</h1>

        <p className="hero-text">
          Fresh Vegetables • Premium Non-Veg • Farm Dairy
        </p>

        <p className="hero-subtitle">
          Bringing freshness to your doorstep every day with premium quality,
          affordable prices, and trusted service.
        </p>

        <div className="hero-actions">
          <Link to="/veg-items" className="cta-btn primary-cta">
            Shop Veggies 🥦
          </Link>
          <Link to="/non-veg-items" className="cta-btn secondary-cta">
            Explore Meats 🍗
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="section-container">
          <h2>Welcome to Fresh Mart</h2>
          <div className="section-divider"></div>
          <p>
            We deliver fresh vegetables, quality non-veg, and dairy products
            directly to your doorstep. Enjoy fresh food at affordable prices
            with quick delivery and trusted service. We inspect every order to ensure
            only the finest ingredients enter your kitchen.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="services">
        <div className="section-container">
          <h2>Why Choose Us?</h2>
          <div className="section-divider"></div>

          <div className="card-container">
            <div className="card">
              <div className="icon-wrapper wrapper-delivery">
                <span>🚚</span>
              </div>
              <h3>Fast Delivery</h3>
              <p>Quick delivery direct to your doorstep, keeping freshness locked in.</p>
            </div>

            <div className="card">
              <div className="icon-wrapper wrapper-fresh">
                <span>🥬</span>
              </div>
              <h3>Fresh Products</h3>
              <p>Daily harvested vegetables and groceries, packed with natural nutrients.</p>
            </div>

            <div className="card">
              <div className="icon-wrapper wrapper-dairy">
                <span>🥛</span>
              </div>
              <h3>Quality Dairy</h3>
              <p>Rich farm-fresh milk, paneer, and butter, made with zero preservatives.</p>
            </div>

            <div className="card">
              <div className="icon-wrapper wrapper-price">
                <span>💰</span>
              </div>
              <h3>Affordable Prices</h3>
              <p>Best budget prices in town, plus seasonal deals you'll love.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;