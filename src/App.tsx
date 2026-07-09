import { NavLink, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "./contextApi/CartContext";
import { ToastContainer } from "react-toastify";
import { FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";
import { LuHouse, LuMilk } from "react-icons/lu";
import { PiCarrotBold } from "react-icons/pi";
import { GiChickenOven } from "react-icons/gi";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Home";
import VegItems from "./VegItems";
import NonVeg from "./NonVegItems";
import Milk from "./MilkItems";
import Register from "./components/Register.tsx";
import Login from "./components/Login.tsx";
import Cart from "./components/Cart.tsx";
import Search from "./components/Search.tsx";
import Checkout from "./components/Checkout.tsx";

import "./App.css";

function App() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  // Sync search input value with URL search params or reset on navigation
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || "";
    if (location.pathname.startsWith("/search")) {
      setSearchQuery(q);
    } else {
      setSearchQuery("");
    }
  }, [location]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim()) {
      navigate(`/search?q=${encodeURIComponent(value)}`);
    } else {
      navigate("/");
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="app-container">
      {/* Swiggy / Blinkit Style Premium Header */}
      <header className="main-header">
        <div className="header-top">
          <div className="logo-section">
            <NavLink to="/" className="logo">
              <span className="logo-emoji">⚡</span>
              <span className="logo-text">
                Fresh<span className="logo-highlight">Mart</span>
              </span>
            </NavLink>
            
          </div>

          <div className="search-bar-wrapper">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search 'milk', 'tomato', 'fresh chicken' or 'paneer'..."
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          <div className="header-actions">
            <NavLink className="nav-link auth-link" to="/login">
              <FiUser className="nav-icon" /> Login
            </NavLink>
            <NavLink className="nav-link auth-link" to="/register">
              Register
            </NavLink>
            <NavLink className="cart-pill-btn" to="/cart">
              <div className="cart-icon-wrapper">
                <FiShoppingCart size={18} />
                {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
              </div>
              <div className="cart-text">
                {totalItems > 0 ? (
                  <span className="cart-price">₹{totalPrice}</span>
                ) : (
                  <span>My Cart</span>
                )}
              </div>
            </NavLink>
          </div>
        </div>

        {/* Categories Sub-Navbar */}
        <nav className="navbar">
          <NavLink className="nav-link" to="/">
            <LuHouse size={18} /> Home
          </NavLink>
          <NavLink className="nav-link veg-tab" to="/veg-items">
            <PiCarrotBold size={18} /> Veg Items
          </NavLink>
          <NavLink className="nav-link nonveg-tab" to="/non-veg-items">
            <GiChickenOven size={18} /> Non Veg Items
          </NavLink>
          <NavLink className="nav-link milk-tab" to="/milk-items">
            <LuMilk size={18} /> Milk Items
          </NavLink>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg-items" element={<VegItems />} />
          <Route path="/non-veg-items" element={<NonVeg />} />
          <Route path="/milk-items" element={<Milk />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        toastStyle={{
          borderRadius: "16px",
          fontSize: "15px",
        }}
      />
    </div>
  );
}

export default App;