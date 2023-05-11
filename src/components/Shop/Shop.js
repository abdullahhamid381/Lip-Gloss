import React from 'react'
import './Shopscss/Shop.scss'
import { Link } from 'react-router-dom'
import { productslider } from '../../productData'
import Navbar from '../Reuseable/Navbar'
import Navlink from '../Reuseable/Navlink'
import Footer from '../Reuseable/Footer'
import { useSelector } from 'react-redux'
const Shop = () => {
    const items = useSelector((state) => state.allCart.items);
    return (

        <div>

            <div>
                <Navbar />
            </div>
            <div>
                <Navlink />
            </div>
            <div className="product-shop-parent">



                {items.map((item) => {
                    return (
                        <Link to="/products" style={{ color: "black" }}>
                            <div>

                                <div >
                                    <img src={item.img} alt="" />
                                </div>
                                <div>
                                    <p className="title">{item.title}</p>
                                </div>
                                <div>
                                    <h5 className="price">{item.price}</h5>
                                </div>

                            </div>
                        </Link>
                    );
                })}


            </div >
            <Footer/>
        </div>

    )
}

export default Shop