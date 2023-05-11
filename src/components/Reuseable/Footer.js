import React, { Fragment } from 'react'
import './Reuseablescss/Footer.scss'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter,AiFillFacebook,AiOutlineInstagram,AiFillYoutube, AiOutlineMail } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone,BsPinterest } from 'react-icons/bs'
const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col" style={{marginTop:'50px'}}>
              <h4>Contact Us</h4>
              <ul>
                <li> <a href="#"> <span style={{marginRight:'5px'}}>
                  <CiLocationOn />
                </span > 1811 Sardis Rd N Suite 204,
                  Charlotte, NC, 28270</a></li>
                <li><span></span><a href="#"><span style={{marginRight:'5px'}}> <BsTelephone /> </span> (980) 292-1002</a></li>
                <li><a href="#"> <span style={{marginRight:'5px'}}><AiOutlineMail /> </span>
                  hello@lipnpour.com</a></li>
                <li style={{marginTop:'20px'}}><a href="#" style={{fontSize:'15px'}}>Stay Connected</a></li>
                <div style={{display:'flex',gap:'15px'}}>
                  <span style={{color:'white'}}><AiFillFacebook/></span>
                  <span style={{color:'white'}}><BsPinterest/></span>
                  <span style={{color:'white'}}><AiOutlineInstagram/></span>
                  <span style={{color:'white'}}><AiFillYoutube/></span>
                </div>
              </ul>
            </div>
            <div className="footer-col" style={{ marginTop: "20px" }}>
              <h4>get help on</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Pinterest</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Skype</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li><a href="#">watch</a></li>
                <li><a href="#">bag</a></li>
                <li><a href="#">shoes</a></li>
                <li><a href="#">dress</a></li>
              </ul>
            </div>
            <div className="footer-col" style={{ }}>
              <h4>Newsletter</h4>
              <div className="social-links">
               <p style={{margin:'0',fontSize:'13px',color:'white'}}>Be The First To Know About The Latest Deals, Secret Sales, Style Updates, & More!</p>
               <input placeholder='Email address' type="search" style={{border:'none',outline:'none',marginTop:'10px',padding:'5px 10px',borderRadius:'4px'}}/>
               <button style={{border:'none',outline:'none',marginTop:'10px',borderRadius:'5px',padding:'5px 10px',background:'#EAC8CF',color:'white'}}>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>

      </footer>
      <div>
        <center><h4 style={{ color: 'white', background: '#530113', padding: '10px  0 10px 0', margin: '0', fontWeight: 'lighter', fontSize: '13px' }}>Copyright All Rights Reserved Lip Gloss</h4></center>
      </div>
    </Fragment>
  )
}

export default Footer