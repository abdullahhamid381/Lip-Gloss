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
      <Navbar />
      <div>
        <div>

          <div className='about-grid'>

            <div>
              <h1 style={{ color: 'rgb(83, 1, 19)', fontSize: '42px', marginBottom: '80px' }}>About Us</h1>
              <p>
                <b> Our story</b> started from humble beginnings in 2018 when Diamond, the CEO of Lip N Pour, had a hard time finding lip color that suited well for her skintone. She would sit at department stores for hours swatching colors on her hand, hoping to find the perfect color. When she realized there were more people like her, that’s when she had her ah hah moment. Diamond started doing her part by empowering the message of beauty in women. To help bring cosmetics and entertainment to the community, she developed a business idea known as Lip N Pour. The concept paired instructional cosmetics with friends, spirits, and a lively instructor. Diamond soon learned how much guests loved to create individual works of lip products in a casual, comfortable environment that was more about “the experience." Since 2018, Diamond have created thousands of custom lip colors. She have decided to take her business to the next level, and have began franchising the concept as Lip N Pour.
                <br /><br />
                <b>Our products</b> bring together the finest materials and stunning design to create something very special. We believe in quality, care, and creating unique products that everyone can enjoy. Colorful, creative, and inspired by what we see everyday, each product represents what we love about the world we live in. We hope they’ll inspire you too.
              </p>


            </div>
            <div>
              <img src={owner} alt="" width={'100%'} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default About