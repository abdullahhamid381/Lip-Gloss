import React from 'react'
import Navbar from '../Reuseable/Navbar'
import './Homescss/Home.scss'
import Navlink from '../Reuseable/Navlink'
import Banner from '../Reuseable/Banner'
import Part from './Part'
import ProductSlider from './ProductSlider'
import { productslider, productslidertwo } from '../../productData'
import two from '../assest/2.webp'
import three from '../assest/3.webp'
import four from '../assest/4.webp'
import five from '../assest/5.webp'
import six from '../assest/6.webp'
import seven from '../assest/7.webp'
import Team from './Team'
import Celebration from './Celebration'
import Footer from '../Reuseable/Footer'
import { useSelector } from 'react-redux'
import ThreeCol from '../ThreeCol'
const Home = () => {
    const items = useSelector((state) => state.allCart.items);
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                {/* <Navlink /> */}
            </div>
            <div>
                <Banner />
            </div>
            <ThreeCol />
            <div>
                {/* <Celebration /> */}
            </div>
            <div>
                {/* <Part first={two} second={three} third={four} /> */}
            </div>
            <div>


            </div>
            <div>
                {/* <Team /> */}
            </div>
            <div>
                {/* <Part first={five} second={six} third={seven} /> */}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home