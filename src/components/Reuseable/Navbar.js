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
import logo from '../assest/logo.jpg'
import cartIcon from "../../assets/cart.svg"
import search from "../../assets/search.svg"
import Navlink from "./Navlink";
export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className="navbar-paretn">
      <div className="container">
        <div className="empty">
          <Navlink />
        </div>

        <div className="logo" >
          <Link to='/' style={{ border: 'none', textDecoration: 'none' }}>
            <h2 style={{ color: 'black' }}>LOGO</h2>          </Link>
        </div>


        <div className="search-cart-parent">
          <div className="search-parent">
            <input type="checkbox" name="" id="chkbox" />
            <div className="search-bar">
              <div className="search-box">
                <label htmlFor="chkbox">
                  <img src={search} alt="" />
                </label>
              </div>
              <input type="search" placeholder="Search Here" className="search-input" />
            </div>
          </div>
          <div>
            <Link to='/cart' style={{ color: 'black' }}>
              <span>
                <img style={{ filter: 'invert(1)' }} src={cartIcon} alt="" />
              </span>
              <span style={{
                fontSize: '10px',
                position: 'relative',
                top: '-10px',
                left: '-4px'
              }}> ({totalQuantity})</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
