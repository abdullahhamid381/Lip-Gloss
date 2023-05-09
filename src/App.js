import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Reuseable/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/Cart/cartPage";
import Navlink from "./components/Reuseable/Navlink";
import Banner from "./components/Reuseable/Banner";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        
       
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductCard/>}/>
        </Routes>
       
      </div>
      
    </BrowserRouter>
  );
}

export default App;
