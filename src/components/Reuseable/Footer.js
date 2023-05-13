import React, { Fragment } from 'react'
import './Reuseablescss/Footer.scss'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiOutlineMail } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone, BsPinterest } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import tiktok from "../../assets/tiktok.png"
import twitter from "../../assets/twitter.png"
const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container">
          <div className="icons">
            <a href="#">
              <img src="https://cdn.shopify.com/s/files/1/0662/4598/4498/files/Icons_ffa14b39-9427-426d-9d05-ba7d439824d1.png?v=1670873242" alt="" />
            </a>
            <a href={'#'}>
              <img src={twitter} alt="" />
            </a>
            <a href={'#'}>
              <img src={tiktok} alt="" />
            </a>

          </div>
          <ul style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', listStyle: 'none' }}>
            <li>
              {" "}
              <Link to="/" style={{ color: '#393939' }}>
                Home
                {/* <i className="fas fa-caret-down" /> */}
              </Link>
            </li>
            <li>
              <Link to="/shop" style={{ color: '#393939' }}>
                Shop
                {/* <i className="fas fa-caret-down" /> */}
              </Link>
            </li>

            <li>
              <a href="https://final--fluffy-mochi-9598b3.netlify.app/" style={{ color: '#393939' }}>
                Lip Viewer
              </a>
            </li>

            <li>
              <Link to="/about" style={{ color: '#393939' }}>About Us</Link>
            </li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolore natus quidem nesciunt ab necessitatibus quam, porro in at laboriosam alias eius quibusdam mollitia tenetur similique nam animi! Maiores, dolorum.</p>
          <p>© 2023 website name</p>
        </div>

      </footer>

    </Fragment>
  )
}

export default Footer