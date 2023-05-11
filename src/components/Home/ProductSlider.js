import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
    const items = useSelector((state) => state.allCart.items);

    const dispatch = useDispatch();
    return (

        <div className="product-slider-parent">
            <div className="heading">
                <h3>{title}</h3>
                <p>{para}</p>
            </div>
            <Link to="/products" style={{ color: "black" }}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}



                    rewind={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {data.map((item) => {
                        return (

                            <div>
                                <SwiperSlide>
                                    <div >
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <p className="title">{item.title}</p>
                                    </div>
                                    <div>
                                        <h5 className="price">{item.price}</h5>
                                    </div>
                                </SwiperSlide>
                            </div>

                        );
                    })}
                </Swiper>
            </Link>
        </div>

    );
};

export default ProductSlider;