import { useContext } from "react";
import { CartContext } from "./contextApi/CartContext";
import { toast } from "react-toastify";
import type { Product } from "./interfaces/Product";
import { FiClock } from "react-icons/fi";
import "./MilkItems.css";

function MilkItems() {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const milkItems: Product[] = [
    {
      id: 301,
      name: "Milk",
      price: 38,
      imageurl: "/images/milkitems/milk.png",
      description: "Pasteurized farm fresh milk, rich in calcium and vitamins.",
    },
    {
      id: 302,
      name: "Curd",
      price: 38,
      imageurl: "/images/milkitems/curd.png",
      description: "Thick and creamy probiotic yogurt, good for digestion.",
    },
    {
      id: 303,
      name: "Paneer",
      price: 98,
      imageurl: "/images/milkitems/paneer.png",
      description: "Fresh and soft cottage cheese block, packed with protein.",
    },
    {
      id: 304,
      name: "Cheese",
      price: 120,
      imageurl: "/images/milkitems/cheese.png",
      description: "Premium processed cheese slices, melts beautifully.",
    },
    {
      id: 305,
      name: "Butter",
      price: 55,
      imageurl: "/images/milkitems/butter.png",
      description: "Rich, salted farm butter, perfect for spreading & baking.",
    },
  ];

  const handleAddToCart = (item: Product) => {
    addToCart(item);
    toast.success(`${item.name} added to cart 🛒`);
  };

  return (
    <div className="milk-container">
      <h1 className="milk-title">🥛 Fresh Milk & Dairy</h1>
      <p className="milk-subtitle">
        Farm-fresh dairy products delivered cold to preserve purity
      </p>

      <div className="milk-grid">
        {milkItems.map((item) => {
          const cartItem = cart.find((x) => x.id === item.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <div className="milk-card" key={item.id}>
              <div className="milk-image-wrapper">
                <img
                  src={item.imageurl}
                  alt={item.name}
                  className="milk-image"
                />
                <span className="badge-tag-milk">Organic</span>
                <span className="delivery-time-tag">
                  <FiClock className="clock-icon" /> 8 MINS
                </span>
              </div>

              <div className="milk-details">
                <h2>{item.name}</h2>
                <p className="description">{item.description}</p>
                <div className="unit-milk">1 Unit</div>

                <div className="card-footer">
                  <div className="price-section">
                    <span className="price">₹{item.price}</span>
                  </div>

                  {quantity > 0 ? (
                    <div className="qty-selector-milk">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="qty-btn decrement"
                      >
                        −
                      </button>
                      <span className="qty-val">{quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="qty-btn increment"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="add-btn-milk"
                      onClick={() => handleAddToCart(item)}
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

export default MilkItems;