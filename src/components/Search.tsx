import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { CartContext } from "../contextApi/CartContext";
import { toast } from "react-toastify";
import { allProducts } from "../data/Products";
import type { Product } from "../interfaces/Product";
import { FiClock } from "react-icons/fi";
import "./Search.css";

function Search() {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // Filter products by query
  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleAddToCart = (item: Product) => {
    addToCart(item);
    toast.success(`${item.name} added to cart 🛒`);
  };

  // Determine accent classes based on product ID categories
  // Veg: 100s, NonVeg: 200s, Milk: 300s
  const getCategoryClass = (id: number) => {
    if (id >= 100 && id < 200) return "veg";
    if (id >= 200 && id < 300) return "nonveg";
    return "milk";
  };

  return (
    <div className="search-container">
      <h1 className="search-title">
        {query ? `Search Results for "${query}"` : "Search Products"}
      </h1>
      <p className="search-subtitle">
        Showing {filteredProducts.length} result(s)
      </p>

      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
            alt="No Results"
            className="no-results-img"
          />
          <h2>No matching products found</h2>
          <p>Please check your spelling or search for another item.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => {
            const cartItem = cart.find((x) => x.id === product.id);
            const quantity = cartItem ? cartItem.quantity : 0;
            const category = getCategoryClass(product.id);

            return (
              <div key={product.id} className={`product-card search-${category}-hover`}>
                <div className="product-image-wrapper">
                  <img
                    src={product.imageurl}
                    alt={product.name}
                    className="product-image"
                  />
                  <span className={`badge-tag-search badge-${category}`}>
                    {category === "veg" ? "Veg" : category === "nonveg" ? "Premium" : "Dairy"}
                  </span>
                  <span className="delivery-time-tag">
                    <FiClock className="clock-icon" /> {category === "milk" ? "8" : category === "nonveg" ? "12" : "10"} MINS
                  </span>
                </div>

                <div className="product-details">
                  <h2>{product.name}</h2>
                  <p className="description">{product.description}</p>
                  <div className="unit">
                    {category === "milk" && product.name !== "Paneer" && product.name !== "Butter" ? "1 Unit" : "1 Kg"}
                  </div>

                  <div className="card-footer">
                    <div className="price-section">
                      <span className="price">₹{product.price}</span>
                    </div>

                    {quantity > 0 ? (
                      <div className={`qty-selector qty-selector-${category}`}>
                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="qty-btn decrement"
                        >
                          −
                        </button>
                        <span className="qty-val">{quantity}</span>
                        <button
                          onClick={() => increaseQuantity(product.id)}
                          className="qty-btn increment"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        className={`add-btn add-btn-${category}`}
                        onClick={() => handleAddToCart(product)}
                      >
                        ADD <span className="plus-sign">+</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
