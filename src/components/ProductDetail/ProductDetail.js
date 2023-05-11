import React from 'react'
import Navbar from '../Reuseable/Navbar'
import Navlink from '../Reuseable/Navlink'
import { AiFillFacebook, AiOutlineGooglePlus } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import './ProductDetailscss/ProductDetail.scss'
import {
    getCartTotal,
    removeItem,
    decreaseItemQuantity,
    increaseItemQuantity,
} from "../../features/cartSlice";
import Footer from '../Reuseable/Footer'
const ProductDetail = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Navlink />
            </div>
           <div>
       <div className='product-detail-parent'>
       <div className='product-grid-detail'>
                <div className='img-div'>
                    <img src="./images/detail.webp" alt="" />
                </div>
               <div className='product-detail'>
               <h1>ISLAND ESCAPE - BODY GLAZE</h1>
                <p>
                    In Stock
                </p>
               <div style={{marginBottom:'10px'}}>
               <span className='price'>$17.00</span>
               </div>
             
                <span className='demand'>ASK ABOUT THIS PRODUCT</span>

                <div>
                    <button>Add to Cart</button>
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
                    <span className='icon'><FaUsers/></span>
                    <span className='tit'> people are currently adding this item to cart</span>
                </div>
               </div>
            </div>
          <div className='detail'>
          <h1 className='title'>Product Detail</h1>
            <div className='what'>
                <h1>WHAT IT IS</h1>
                <p>Peppermint-scented, luxuriously textured balm re-hydrates, pampers, and helps repair and nurture lips, transforming them to a new level of softness, smoothness and suppleness. It can be worn alone or over lip color for a dewy, more youthful-looking pout.</p>
                <li>Peppermint scented luxurious balm</li>
                <li>Help repair and nurture lips</li>
                <li>Leaves lips soft, supple and smooth</li>
            </div>
            <div className='what'>
                <h1>How TO USE</h1>
                <p>Usage: Apply liberally to lips morning and evening, and as often as needed throughout the day.</p>
              
            </div>
            <div className='what'>
                <h1>INGREDIENTS</h1>
                <p>Ingredients: Bis-Diglyceryl Polyacyladipate-2, Disostearyl Malate, Limnanthes Alba Seed Oil, Simmondsia Chinensis Seed oil, Caprylic/Capric Triglyceride, Candelilla Cera, Microcrystalline Wax, Ozokerite, Olive Seed Oil, Squalane, Tocopheryl Acetate, Mentha Piperita Oil, Phenoxyethanol.</p>
              
            </div>
          </div>
       </div>
           </div>
<div>
    <Footer/>
</div>
        </div>
    )
}

export default ProductDetail