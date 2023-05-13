import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Reuseable/Navbar'
import Navlink from '../Reuseable/Navlink'
import { AiFillFacebook, AiOutlineGooglePlus } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import './ProductDetailscss/ProductDetail.scss'
import {
    getCartTotal,
    removeItem,
    decreaseItemQuantity,
    increaseItemQuantity,
} from "../../features/cartSlice";
import Footer from '../Reuseable/Footer'
import { productslider } from '../../productData'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../features/cartSlice'
const ProductDetail = () => {
    const items = useSelector((state) => state.allCart.items);
    const { id } = useParams();
    const dispatch = useDispatch();
    const Filterfullproduct = items.filter((pro) => pro.id == id);
    console.log(Filterfullproduct);
    const {
        img,
        title,
        price,
        stock,
        id: product__id,
        demand,
        what,
        pointfirst,
        pointsecond,
        pointthird,
        use,
        ingredients,
    } = Filterfullproduct[0];
    window.scrollTo(0, 0)
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
            </div>
            <div>
                <div className='product-detail-parent'>
                    <div>
                        <div className='product-grid-detail'>
                            <div className='img-div'>
                                <img src={img} alt="" />
                            </div>
                            <div className='product-detail'>
                                <h1>{title}</h1>
                                <p>
                                    {stock}
                                </p>
                                <div style={{ marginBottom: '10px' }}>
                                    <span className='price'>{price}</span>
                                </div>

                                <span className='demand'>{demand}</span>

                                <div>
                                    <button onClick={() => dispatch(addToCart(Filterfullproduct[0]))}>Add to Cart</button>
                                </div>
                                <div className='icon-flex'>
                                    <div className='icon-parent'>
                                        <span className='icons'><AiFillFacebook /></span>
                                        <span className='icons-title'> Share</span>
                                    </div>
                                    <div className="icon-parent">
                                        <span className='icons'> <AiOutlineGooglePlus /></span>
                                        <span className='icons-title'> Google +</span>
                                    </div>
                                    <div className="icon-parent">
                                        <span className='icons'> <BsPinterest /></span>
                                        <span className='icons-title'> Pin it</span>
                                    </div>
                                    <div className="icon-parent">
                                        <span className='icons'> <MdEmail /></span>
                                        <span className='icons-title'> Email</span>
                                    </div>

                                </div>
                                <div className='people'>
                                    <span className='icon'><FaUsers /></span>
                                    <span className='tit'> people are currently adding this item to cart</span>
                                </div>
                            </div>
                        </div>
                        <div className='detail'>
                            <h1 className='title'>Product Detail</h1>
                            <div className='what'>
                                <h1>WHAT IT IS</h1>
                                <p>{what}</p>
                                <li>{pointfirst}</li>
                                <li>{pointsecond}</li>
                                <li>{pointthird}</li>
                            </div>
                            <div className='what'>
                                <h1>How TO USE</h1>
                                <p>{use}</p>

                            </div>
                            <div className='what'>
                                <h1>INGREDIENTS</h1>
                                <p>{ingredients}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default ProductDetail