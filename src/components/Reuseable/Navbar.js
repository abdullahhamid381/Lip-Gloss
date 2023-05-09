import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from 'react-icons/ai'
import { getCartTotal } from "../../features/cartSlice";
import { BiShoppingBag } from 'react-icons/bi'
import './Reuseablescss/Navbar.scss'
export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className="navbar-paretn">
      <div>

      </div>
    <Link to='/'>
    <div className="logo">
        <img src="./images/logo.jpg" alt="" />
      </div>
    </Link>
      
      <div className="search-cart-parent">
        <div className="search-parent">
          <input type="checkbox" name="" id="chkbox" />
          <div className="search-bar">
            <div className="search-box">
              <label htmlFor="chkbox">
                <span><AiOutlineSearch className="icon" /></span>
              </label>
            </div>
            <input type="search" placeholder="Search Here" className="search-input" />
          </div>
        </div>
        <div>
          <Link to='/cart' style={{color:'black'}}>
          <span>
          <BiShoppingBag className="icon" />
          </span>
          <span> ({totalQuantity})</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
