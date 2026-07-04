import "./VegItems.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface VegItem {
  id: number;
  name: string;
  price: number;
  imageurl: string;
  description: string;
}

function VegItems() {
  const vegItems: VegItem[] = [
    {
      id: 1,
      name: "Beans",
      price: 30,
      imageurl: "/images/vegitems/beans.png",
      description: "Fresh Beans",
    },
    {
      id: 2,
      name: "Brinjal",
      price: 20,
      imageurl: "/images/vegitems/brinjal.png",
      description: "Fresh Brinjal",
    },
    {
      id: 3,
      name: "Broccoli",
      price: 80,
      imageurl: "/images/vegitems/broccoli.png",
      description: "Organic Broccoli",
    },
    {
      id: 4,
      name: "Capsicum",
      price: 40,
      imageurl: "/images/vegitems/capsicum.png",
      description: "Fresh Capsicum",
    },
    {
      id: 5,
      name: "Onion",
      price: 35,
      imageurl: "/images/vegitems/onion.png",
      description: "Farm Fresh Onion",
    },
    {
      id: 6,
      name: "Carrot",
      price: 60,
      imageurl: "/images/vegitems/carrot.png",
      description: "Sweet Carrots",
    },
    {
      id: 7,
      name: "Tomato",
      price: 25,
      imageurl: "/images/vegitems/tomato.png",
      description: "Fresh Tomatoes",
    },
    {
      id: 8,
      name: "Palak",
      price: 30,
      imageurl: "/images/vegitems/palak.png",
      description: "Healthy Spinach",
    },
  ];

  const handleAddToCart = (item: VegItem) => {
    toast.success(`${item.name} added to cart 🛒`, {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <div className="veg-container">
      <h1 className="heading">🥦 Fresh Vegetables</h1>

      <p className="sub-heading">
        Fresh from Farms • Best Quality • Fast Delivery
      </p>

      <div className="product-grid">
        {vegItems.map((vegItem) => (
          <div key={vegItem.id} className="product-card">
            <img
              src={vegItem.imageurl}
              alt={vegItem.name}
              className="product-image"
            />

            <div className="product-details">
              <h2>{vegItem.name}</h2>

              <p>{vegItem.description}</p>

              <div className="unit">1 Kg</div>

              <div className="price-section">
                <span className="price">₹{vegItem.price}</span>
              
              </div>

              <button
                className="add-btn"
                onClick={() => handleAddToCart(vegItem)}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}

export default VegItems;