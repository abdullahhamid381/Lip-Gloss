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
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam modi est eveniet asperiores porro repudiandae expedita obcaecati voluptatum alias nam dicta tenetur vero incidunt similique labore, culpa exercitationem voluptates. Iure voluptate fuga atque inventore, dolorum maxime dicta aperiam, voluptas asperiores doloremque explicabo tempora ipsam praesentium magnam vero, enim et eos officiis. Accusantium mollitia ratione, repellendus doloribus est doloremque ut possimus officiis voluptate commodi error? Impedit aspernatur, voluptatem consequuntur et cupiditate accusamus deserunt officia iusto nihil inventore, corrupti maxime. Vel fugiat atque deleniti corporis neque quam, maxime aliquid nisi laborum! Minus corporis ducimus cum facilis enim harum. Officia fugiat a culpa!
          </p>


            </div>
            <div>
              <img src='images/firsth.jpg' alt="" width={'100%'}/>
            </div>
          </div>
          </div>
          <Footer/>
        </div>
    </div>
  )
}

export default About