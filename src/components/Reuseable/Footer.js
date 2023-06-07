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
          <div className="row">
            <div className="footer-col" style={{}}>
              <h4>Contact Us</h4>
              <ul>
                <li> <a> <span style={{marginRight:'5px'}}>
                  <CiLocationOn />
                </span > 1811 Sardis Rd N Suite 204,
                  Charlotte, NC, 28270</a></li>
                <li><span></span><a><span style={{marginRight:'5px'}}> <BsTelephone /> </span> (980) 292-1002</a></li>
                <li><a> <span style={{marginRight:'5px'}}><AiOutlineMail /> </span>
                  hello@lipnpour.com</a></li>
                <li style={{marginTop:'20px'}}><a  style={{fontSize:'15px'}}>Stay Connected</a></li>
                <div style={{display:'flex',gap:'15px'}}>
                  <span style={{color:'white'}}><AiFillFacebook/></span>
                  <span style={{color:'white'}}><BsPinterest/></span>
                  <span style={{color:'white'}}><AiOutlineInstagram/></span>
                  <span style={{color:'white'}}><AiFillYoutube/></span>
                </div>
              </ul>
            </div>
            <div className="footer-col" style={{  }}>
              <h4>Pages</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><a href="https://final--fluffy-mochi-9598b3.netlify.app/">Create your lippe</a></li>
                <li><Link to='/about'>About</Link></li>
               
              </ul>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a>Islans Escape</a></li>
                <li><a>Peach Passion</a></li>
                <li><a>Lip gloss</a></li>
              
              </ul>
            </div>
            {/* <div className="footer-col" style={{ }}>
              <h4>Newsletter</h4>
              <div className="social-links">
               <p style={{margin:'0',fontSize:'13px',color:'white'}}>Be The First To Know About The Latest Deals, Secret Sales, Style Updates, & More!</p>
               <input placeholder='Email address' type="search" style={{border:'none',outline:'none',marginTop:'10px',padding:'5px 10px',borderRadius:'4px'}}/>
               <button style={{border:'none',outline:'none',marginTop:'10px',borderRadius:'5px',padding:'5px 10px',background:'#EAC8CF',color:'white'}}>SUBSCRIBE</button>
              </div>
            </div> */}
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