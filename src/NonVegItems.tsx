import "./NonVegItems.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface NonVegItem {
  id: number;
  name: string;
  price: number;
  imageurl: string;
}

function NonVegItems() {
  const nonVegItems: NonVegItem[] = [
    { id: 1, name: "Chicken", price: 280, imageurl: "/images/nonveg/chicken.png" },
    { id: 2, name: "Mutton", price: 850, imageurl: "/images/nonveg/mutton.png" },
    { id: 3, name: "Crab", price: 600, imageurl: "/images/nonveg/crab.png" },
    { id: 4, name: "Lobster", price: 1200, imageurl: "/images/nonveg/lobster.png" },
    { id: 5, name: "Fish", price: 350, imageurl: "/images/nonveg/fish.png" },
    { id: 6, name: "Prawns", price: 500, imageurl: "/images/nonveg/prawns.png" },
  ];

  const handleAddToCart = (item: NonVegItem) => {
    toast.success(`${item.name} added to cart 🛒`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
    });
  };

  return (
    <div className="nonveg-container">
      <ToastContainer />

      <h1 className="nonveg-title">🍗 Fresh Non-Veg Items</h1>
      <p className="nonveg-subtitle">
        Freshly delivered to your doorstep
      </p>

      <div className="nonveg-grid">
        {nonVegItems.map((item) => (
          <div className="nonveg-card" key={item.id}>
            <img
              src={item.imageurl}
              alt={item.name}
              className="nonveg-image"
            />

            <h2>{item.name}</h2>

            <p className="price">₹ {item.price} / Kg</p>

            <button
              className="buy-btn"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonVegItems;