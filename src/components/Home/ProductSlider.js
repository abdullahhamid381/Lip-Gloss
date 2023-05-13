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

const ProductSlider = ({ data, title, para }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="product-slider-parent">
            <Swiper
                slidesPerView={4}
                spaceBetween={14}
                rewind={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map((item) => {
                    const { id, title, img, price } = item;
                    return (
                        <SwiperSlide onClick={() => navigate(`/product/${id}`)}>
                            <div className="slider__item">
                                <div>
                                    <img src={img} alt="" />
                                </div>
                                <div className="flex__">
                                    <div className="start">
                                        <h3>{title}</h3>
                                        <p>lip stick</p>

                                    </div>
                                    <div className="end">
                                        {price}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default ProductSlider;
