import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Homescss/ProductSlider.scss";
import { useSelector, useDispatch } from "react-redux";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { productslider } from "../../productData";

const ProductSlider = ({data,title,para}) => {
    

    const dispatch = useDispatch();
    const navigate =  useNavigate()
    return (

        <div className="product-slider-parent">
            <div className="heading">
                <h3 style={{color:'black'}}>{title}</h3>
                <p style={{color:'black'}}>{para}</p>
            </div>
         
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}



                    rewind={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {data.map((item) => {
                        const {id,title,img,price} = item
                        return (

                            <div>
                                <SwiperSlide onClick={()=> navigate(`/product/${id}`)}>
                                    <div data-aos='fade-down' >
                                        <img src={img} alt="" />
                                    </div>
                                  <div style={{margin:'10px 0'}}>
                                  <div data-aos='fade-up'>
                                        <p className="title" style={{color:'white',fontSize:'18px'}}>{title}</p>
                                    </div>
                                    <div data-aos='fade-down'>
                                        <h5 className="price" style={{color:'white',fontSize:'18px'}}>{price}</h5>
                                    </div>
                                  </div>
                                </SwiperSlide>
                            </div>

                        );
                    })}
                </Swiper>
           
        </div>

    );
};

export default ProductSlider;
