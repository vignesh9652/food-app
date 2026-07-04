import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

  <div className="hero-badge">
    🌿 Fresh • Healthy • Quality
  </div>

  <h1>Fresh Mart</h1>

  <p className="hero-text">
    Fresh Vegetables • Non-Veg • Dairy Products
  </p>

  <p className="hero-subtitle">
    Bringing freshness to your doorstep every day with premium quality,
    affordable prices, and trusted service.
  </p>

</section>

      {/* About */}
      <section className="about">
        <h2>Welcome to Fresh Mart</h2>
        <p>
          We deliver fresh vegetables, quality non-veg, and dairy products
          directly to your doorstep. Enjoy fresh food at affordable prices
          with quick delivery and trusted service.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="services">
        <h2>Why Choose Us?</h2>

        <div className="card-container">

          <div className="card">
            <span>🚚</span>
            <h3>Fast Delivery</h3>
            <p>Quick delivery to your doorstep.</p>
          </div>

          <div className="card">
            <span>🥬</span>
            <h3>Fresh Products</h3>
            <p>Daily fresh vegetables and groceries.</p>
          </div>

          <div className="card">
            <span>🥛</span>
            <h3>Quality Dairy</h3>
            <p>Fresh milk, paneer, butter and more.</p>
          </div>

          <div className="card">
            <span>💰</span>
            <h3>Affordable Prices</h3>
            <p>Best prices with exciting offers.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;