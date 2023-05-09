import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Reuseable/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/Cart/cartPage";
import Navlink from "./components/Reuseable/Navlink";
import Banner from "./components/Reuseable/Banner";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
      <Navlink/>
      </div>
      <div>
        <Banner/>
      </div>
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
       
      </div>
      
    </BrowserRouter>
  );
}

export default App;
