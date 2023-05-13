import React from "react";
import "./Reuseablescss/Navlink.scss";
import { Link } from "react-router-dom";
const Navlink = () => {
  return (
    <div className="nav-link-parent">
      <div className="menu-bar">
        <ul>
          <li>
            {" "}
            <Link to="/">
              Home
              {/* <i className="fas fa-caret-down" /> */}
            </Link>
          </li>
          <li>
            <Link to="/shop">
              Shop
              {/* <i className="fas fa-caret-down" /> */}
            </Link>
          </li>

          <li>
            <a href="https://final--fluffy-mochi-9598b3.netlify.app/">
              Lip Viewer
            </a>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navlink;
