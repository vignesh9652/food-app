import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import VegItems from "./VegItems"
import NonVegItems from "./NonVegItems"
import MilkItems from "./MilkItems"


function App() {
  return (
    <>
     <BrowserRouter>
     
     <Link to={"/home"}> Home </Link>
     <Link to={"/veg-items"}> Veg Items </Link>
     <Link to={"/non-veg-items"}> Non veg Items </Link>
     <Link to={"/milk-items"}> Milk items </Link>
     <Routes>

      <Route path="/home" element={<Home />}/>
      <Route path="/veg-items" element={<VegItems/>}/>
      <Route path="/non-veg-items" element={<NonVegItems/>}/>
      <Route path="/milk-items" element={<MilkItems/>}/>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
