import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Reuseable/Navbar";
import ProductCard from './components/Products/ProductCard'
import CartPage from "./components/Cart/cartPage";
import Navlink from "./components/Reuseable/Navlink";
import Banner from "./components/Reuseable/Banner";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
      <div>
        
       
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
          
        </Routes>
       
      </div>
      
    </BrowserRouter>
  );
}

export default App;
