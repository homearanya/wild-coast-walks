import React from 'react'
import Slider from "react-slick";
import '../assets/css/slick-theme.css'
import '../assets/css/slick.css'
import '../assets/css/bestSellSlider.css'

import sell_1 from '../assets/img/sell/1.jpg'
import sell_2 from '../assets/img/sell/2.jpg'
import sell_3 from '../assets/img/sell/3.jpg'
import sell_4 from '../assets/img/sell/4.jpg'

export default function BestSellSlider() {
    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className="row">
            <div className="best-sell-slider carousel-style-one">
                <Slider {...settings}>
                    <div>
                        <div className="col-md-3">
                            <div className="hover-effect">
                                <div className="box-hover">
                                    <a href="#">
                                        <img src={sell_1} alt="" />
                                        <span>Rail Trip</span>
                                    </a>
                                </div>
                            </div>
                            <div className="hover-effect">
                                <div className="box-hover">
                                    <a href="#" className="no-margin">
                                        <img src={sell_3} alt="" />
                                        <span>Egypt Trip</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-md-3">
                            <div className="hover-effect">
                                <div className="box-hover">
                                    <a href="#">
                                        <img src={sell_2} alt="" />
                                        <span>Brazil Trip</span>
                                    </a>
                                </div>
                            </div>
                            <div className="hover-effect">
                                <div className="box-hover">
                                    <a href="#" className="no-margin">
                                        <img src={sell_4} alt="" />
                                        <span>Sailing Trip</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-md-3">
                            <div className="hover-effect">
                                <div className="box-hover">
                                    <a href="#">
                                        <img src={sell_3} alt="" />
                                        <span>Egypt Trip</span>
                                    </a>
                                </div>
                            </div>
                            <div className="hover-effect">
                                <div className="box-hover">
                                    <a href="#" className="no-margin">
                                        <img src={sell_1} alt="" />
                                        <span>Rail Trip</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-md-3">
                            <div className="hover-effect">
                                <div className="box-hover">
                                    <a href="#">
                                        <img src={sell_4} alt="" />
                                        <span>sailing Trip</span>
                                    </a>
                                </div>
                            </div>
                            <div className="hover-effect">
                                <div className="box-hover">
                                    <a href="#" className="no-margin">
                                        <img src={sell_2} alt="" />
                                        <span>Brazil Trip</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
