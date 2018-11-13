import React from 'react'
import Slider from "react-slick";
import '../assets/css/slick-theme.css'
import '../assets/css/slick.css'
import '../assets/css/partnerSlider.css'

import brand_1 from '../assets/img/brand/1.jpg'
import brand_2 from '../assets/img/brand/2.jpg'
import brand_3 from '../assets/img/brand/3.jpg'
import brand_4 from '../assets/img/brand/4.jpg'

export default function PartnerSlider() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <div className="row">
            <div className="partner-carousel carousel-style-two">
                <Slider {...settings}>
                    <div className="col-md-3">
                        <a href="#"><img src={brand_1} alt="" /></a>
                    </div>
                    <div className="col-md-3">
                        <a href="#"><img src={brand_2} alt="" /></a>
                    </div>
                    <div className="col-md-3">
                        <a href="#"><img src={brand_3} alt="" /></a>
                    </div>
                    <div className="col-md-3">
                        <a href="#"><img src={brand_4} alt="" /></a>
                    </div>
                    <div className="col-md-3">
                        <a href="#"><img src={brand_1} alt="" /></a>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
