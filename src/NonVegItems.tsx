import { useContext } from "react";
import { CartContext } from "./contextApi/CartContext";
import { toast } from "react-toastify";
import type { Product } from "./interfaces/Product";
import { FiClock } from "react-icons/fi";
import "./NonVegItems.css";

function NonVegItems() {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const nonVegItems: Product[] = [
    {
      id: 201,
      name: "Chicken",
      price: 280,
      imageurl: "/images/nonveg/chicken.png",
      description: "Fresh tender skinless chicken, rich in lean protein.",
    },
    {
      id: 202,
      name: "Mutton",
      price: 850,
      imageurl: "/images/nonveg/mutton.png",
      description: "Premium quality fresh lamb meat, juicy and tender.",
    },
    {
      id: 203,
      name: "Crab",
      price: 600,
      imageurl: "/images/nonveg/crab.png",
      description: "Fresh mud crabs, sweet and delicate meat.",
    },
    {
      id: 204,
      name: "Lobster",
      price: 1200,
      imageurl: "/images/nonveg/lobster.png",
      description: "Exotic and rich deep-sea lobsters.",
    },
    {
      id: 205,
      name: "Fish",
      price: 350,
      imageurl: "/images/nonveg/fish.png",
      description: "Freshwater fish, clean cut and ready to cook.",
    },
    {
      id: 206,
      name: "Prawns",
      price: 500,
      imageurl: "/images/nonveg/prawns.png",
      description: "Premium deshelled prawns, sweet and delicious.",
    },
  ];

  const handleAddToCart = (item: Product) => {
    addToCart(item);
    toast.success(`${item.name} added to cart 🛒`);
  };

  return (
    <div className="nonveg-container">
      <h1 className="nonveg-title">🍗 Fresh Non-Veg Items</h1>
      <p className="nonveg-subtitle">
        Freshly delivered to your doorstep • Cleaned & Vacuum Packed
      </p>

      <div className="nonveg-grid">
        {nonVegItems.map((item) => {
          const cartItem = cart.find((x) => x.id === item.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <div className="nonveg-card" key={item.id}>
              <div className="nonveg-image-wrapper">
                <img
                  src={item.imageurl}
                  alt={item.name}
                  className="nonveg-image"
                />
                <span className="badge-tag-nonveg">Premium</span>
                <span className="delivery-time-tag">
                  <FiClock className="clock-icon" /> 12 MINS
                </span>
              </div>

              <div className="nonveg-details">
                <h2>{item.name}</h2>
                <p className="description">{item.description}</p>
                <div className="unit-nonveg">1 Kg</div>

                <div className="card-footer">
                  <div className="price-section">
                    <span className="price">₹{item.price}</span>
                  </div>

                  {quantity > 0 ? (
                    <div className="qty-selector-nonveg">
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
                      className="add-btn-nonveg"
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

export default NonVegItems;