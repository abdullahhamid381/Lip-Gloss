import React from 'react'
import './Reuseablescss/Navlink.scss'
const Navlink = () => {
  return (
   <div className='nav-link-parent'>
    <div className="menu-bar">
    <ul>
    <li>
        <a href="#">
          SHOP NOW
          {/* <i className="fas fa-caret-down" /> */}
        </a>
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
        <a href="#">HOW IT WORK</a>
      </li>
      <li>
        <a href="#">PRICING</a>
      </li>
      <li>
        <a href="#">
          CREATE YOUR LIPPIE
        </a>
      
      </li>
      <li>
        <a href="#">RESERVE SEAT</a>
      </li>
      <li>
        <a href="#">ABOUT US</a>
      </li>
      <li>
        <a href="#">FRANCHISE</a>
      </li>
    </ul>
  </div>

   </div>
  )
}

export default Navlink