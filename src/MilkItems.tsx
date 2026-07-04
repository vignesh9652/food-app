import "./MilkItems.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type MilkItem = {
  id: number;
  name: string;
  cost: number;
  imageurl: string;
};

function MilkItems() {
  const milkItems: MilkItem[] = [
    { id: 1, name: "Milk", cost: 38, imageurl: "/images/milkitems/milk.png" },
    { id: 2, name: "Curd", cost: 38, imageurl: "/images/milkitems/curd.png" },
    { id: 3, name: "Paneer", cost: 38, imageurl: "/images/milkitems/paneer.png" },
    { id: 4, name: "Cheese", cost: 38, imageurl: "/images/milkitems/cheese.png" },
    { id: 5, name: "Butter", cost: 38, imageurl: "/images/milkitems/butter.png" },
  ];

  const addToCart = (name: string) => {
    toast.success(`${name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="milk-container">
      <h1 className="milk-title">🥛 Fresh Milk Products</h1>

      <div className="milk-grid">
        {milkItems.map((item) => (
          <div className="milk-card" key={item.id}>
            <img
              src={item.imageurl}
              alt={item.name}
              className="milk-image"
            />

            <h3>{item.name}</h3>

            <p className="price">₹{item.cost}</p>

            <button
              className="buy-btn"
              onClick={() => addToCart(item.name)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default MilkItems;