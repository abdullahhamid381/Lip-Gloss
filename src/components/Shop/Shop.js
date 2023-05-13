import React from 'react'
import './Shopscss/Shop.scss'
import { Link } from 'react-router-dom'
import { productslider } from '../../productData'
import Navbar from '../Reuseable/Navbar'
import Navlink from '../Reuseable/Navlink'
import Footer from '../Reuseable/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Shop = () => {

    const navigate = useNavigate()
    const items = useSelector((state) => state.allCart.items);
    return (

        <div>

            <div>
                <Navbar />
            </div>
            <div>
            </div>
            <div className="heading__" style={{ marginTop: '80px', marginBottom: '-70px' }}>
                <h2>BEST SELLERS HEADING</h2>
            </div>
            <div className="product-shop-parent">



                {items.map((item) => {
                    return (

                        <div className="slider__item" onClick={() => navigate(`/product/${item.id}`)}>
                            <div >
                                <img src={item.img} alt="" />
                            </div>
                            <div className="flex__">
                                <div className="start">
                                    <h3>{item.title}</h3>
                                    <p>lip stick</p>

                                </div>
                                <div className="end">
                                    {item.price}
                                </div>
                            </div>
                        </div>

                    );
                })}


            </div >
            <Footer />
        </div>

    )
}

export default Shop