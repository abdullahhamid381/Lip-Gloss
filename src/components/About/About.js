import React from 'react'
import './Aboutscss/About.scss'
import Navbar from '../Reuseable/Navbar'
import Navlink from '../Reuseable/Navlink'
import owner from '../../components/assest/owner.webp'
import './Aboutscss/About.scss'
import Footer from '../Reuseable/Footer'
const About = () => {
  return (
    <div>
        <Navbar/>
        <Navlink/>
        <div>
          <div>
           
          <div className='about-grid'>
            
          <div>
          <h1 style={{color:'rgb(83, 1, 19)',fontSize:'42px',marginBottom:'80px'}}>About Us</h1>
          <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, molestiae maiores? Eligendi tenetur minima doloremque. Ipsum ea deserunt distinctio in alias iure quasi repudiandae temporibus voluptatum labore, deleniti, animi sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis magni omnis illum veniam praesentium. Ut beatae sint sit eius dolores voluptate nihil molestias quod officia perspiciatis, numquam blanditiis consequuntur necessitatibus dolorem! Hic, placeat harum? Nesciunt, temporibus quia. Quae, maxime! Ullam.
          </p>


            </div>
            <div>
              <img src='./images/firsth.jpg' alt="" width={'100%'}/>
            </div>
          </div>
          </div>
          <Footer/>
        </div>
    </div>
  )
}

export default About