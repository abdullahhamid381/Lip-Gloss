import React from 'react'
import Navbar from '../Reuseable/Navbar'
import './Homescss/Home.scss'
import Navlink from '../Reuseable/Navlink'
import Banner from '../Reuseable/Banner'
import Part from './Part'
import ProductSlider from './ProductSlider'
const Home = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <Navlink/>
        </div>
        <div>
            <Banner/>
        </div>
        <div>
            <Part/>
        </div>
        <div>
            <ProductSlider/>
        </div>
    </div>
  )
}

export default Home