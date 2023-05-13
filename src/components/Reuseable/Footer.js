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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolore natus quidem nesciunt ab necessitatibus quam, porro in at laboriosam alias eius quibusdam mollitia tenetur similique nam animi! Maiores, dolorum.</p>
          <p>© 2023 website name</p>
        </div>

      </footer>

    </Fragment>
  )
}

export default Footer