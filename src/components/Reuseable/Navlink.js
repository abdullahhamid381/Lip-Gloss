import React from 'react'
import './Reuseablescss/Navlink.scss'
import { Link } from 'react-router-dom'
const Navlink = () => {
  return (
   <div className='nav-link-parent'>
    <div className="menu-bar">
    <ul>
    <li>
        <Link to='/shop'>
          SHOP NOW
          {/* <i className="fas fa-caret-down" /> */}
        </Link>
        {/* <div className="dropdown-menu">
          <ul>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">
                Team <i className="fas fa-caret-right" />
              </a>
              <div className="dropdown-menu-1">
                <ul>
                  <li>
                    <a href="#">Team-1</a>
                  </li>
                  <li>
                    <a href="#">Team-2</a>
                  </li>
                  <li>
                    <a href="#">Team-3</a>
                  </li>
                  <li>
                    <a href="#">Team-4</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div> */}
      </li>
     
    
     
     
      <li>
        <Link to='/about'>ABOUT US</Link>
      </li>
    
    </ul>
  </div>

   </div>
  )
}

export default Navlink