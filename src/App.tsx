import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import VegItems from "./VegItems";
import NonVegItems from "./NonVegItems";
import MilkItems from "./MilkItems";
import { FcHome } from "react-icons/fc";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/home"><FcHome/>Home</NavLink>
        <NavLink to="/veg-items">Veg Items</NavLink>
        <NavLink to="/non-veg-items">Non Veg Items</NavLink>
        <NavLink to="/milk-items">Milk Items</NavLink>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg-items" element={<VegItems />} />
          <Route path="/non-veg-items" element={<NonVegItems />} />
          <Route path="/milk-items" element={<MilkItems />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;