import { useContext } from "react";
import { CartContext } from "./contextApi/CartContext";
import { toast } from "react-toastify";
import type { Product } from "./interfaces/Product";
import { FiClock } from "react-icons/fi";
import "./VegItems.css";

function VegItems() {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const vegItems: Product[] = [
    {
      id: 101,
      name: "Beans",
      price: 30,
      imageurl: "/images/vegitems/beans.png",
      description: "Fresh green beans, packed with proteins and fiber.",
    },
    {
      id: 102,
      name: "Brinjal",
      price: 20,
      imageurl: "/images/vegitems/brinjal.png",
      description: "Glossy purple brinjal, perfect for baking and curries.",
    },
    {
      id: 103,
      name: "Broccoli",
      price: 80,
      imageurl: "/images/vegitems/broccoli.png",
      description: "Crisp, nutrient-rich organic broccoli heads.",
    },
    {
      id: 104,
      name: "Capsicum",
      price: 40,
      imageurl: "/images/vegitems/capsicum.png",
      description: "Fresh and crunchy green bell peppers.",
    },
    {
      id: 105,
      name: "Onion",
      price: 35,
      imageurl: "/images/vegitems/onion.png",
      description: "Farm-fresh onions with sharp flavor.",
    },
    {
      id: 106,
      name: "Carrot",
      price: 60,
      imageurl: "/images/vegitems/carrot.png",
      description: "Sweet, crunchy orange carrots directly from the farm.",
    },
    {
      id: 107,
      name: "Tomato",
      price: 25,
      imageurl: "/images/vegitems/tomato.png",
      description: "Juicy, ripe red tomatoes ideal for salads and gravies.",
    },
    {
      id: 108,
      name: "Palak",
      price: 30,
      imageurl: "/images/vegitems/palak.png",
      description: "Freshly harvested green spinach leaves.",
    },
  ];

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
                <span className="delivery-time-tag">
                  <FiClock className="clock-icon" /> 10 MINS
                </span>
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