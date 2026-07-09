import { useContext } from "react";
import { CartContext } from "./contextApi/CartContext";
import { toast } from "react-toastify";
import type { Product } from "./interfaces/Product";
import { vegItems } from "./data/Products";
import "./VegItems.css";

function VegItems() {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const handleAddToCart = (item: Product) => {
    addToCart(item);
    toast.success(`${item.name} added to cart 🛒`);
  };

  return (
    <div className="veg-container">
      <h1 className="heading">🥦 Fresh Vegetables</h1>
      <p className="sub-heading">
        Fresh from Farms • Best Quality • Fast Delivery
      </p>

      <div className="product-grid">
        {vegItems.map((vegItem) => {
          const cartItem = cart.find((x) => x.id === vegItem.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <div key={vegItem.id} className="product-card">
              <div className="product-image-wrapper">
                <img
                  src={vegItem.imageurl}
                  alt={vegItem.name}
                  className="product-image"
                />
                <span className="badge-tag">Organic</span>
                
              </div>

              <div className="product-details">
                <h2>{vegItem.name}</h2>
                <p className="description">{vegItem.description}</p>
                <div className="unit">1 Kg</div>

                <div className="card-footer">
                  <div className="price-section">
                    <span className="price">₹{vegItem.price}</span>
                  </div>

                  {quantity > 0 ? (
                    <div className="qty-selector">
                      <button
                        onClick={() => decreaseQuantity(vegItem.id)}
                        className="qty-btn decrement"
                      >
                        −
                      </button>
                      <span className="qty-val">{quantity}</span>
                      <button
                        onClick={() => increaseQuantity(vegItem.id)}
                        className="qty-btn increment"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="add-btn"
                      onClick={() => handleAddToCart(vegItem)}
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
    </div>
  );
}

export default VegItems;