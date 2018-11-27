import React from 'react'
import { Helmet } from "react-helmet"

import Banner from "../components/Banner";

import '../assets/css/tours.css'

import tour_1 from '../assets/img/adventure-list/9.jpg'
import bannerImage from '../assets/img/banner/15.jpg'

export default () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Destinations and Tours - Wild Coast Walks</title>
        </Helmet>

        <Banner
            extraClass="grid"
            title1="Adventure"
            title2="Listing"
            text1="Three Columns Grid View Adventure Listing"
            text2=""
            breadcrumb="Tours"
            imageBanner={bannerImage}

        />
        <div className="adventures-grid section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="shop-item-filter">
                            <form action="#" id="banner-searchbox">
                                <div className="row">
                                    <div className="col-md-3 col-sm-3">
                                        <div className="adventure-cat">
                                            <select name="category" className="search-adventure">
                                                <option>Select Adventure</option>
                                                <option>Bungee jumping</option>
                                                <option>Bicycle touring</option>
                                                <option>Jungle tourism</option>
                                                <option>Shark tourism</option>
                                                <option>Mountain biking</option>
                                                <option>Mountaineering</option>
                                                <option>Rock Adventure</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-4">
                                        <div className="adventure-cat">
                                            <select name="destination" className="search-adventure">
                                                <option>Select Your Destination</option>
                                                <option>Madagascar</option>
                                                <option>Botswana</option>
                                                <option>Canada, Alaska</option>
                                                <option>Antarctica</option>
                                                <option>Swaziland</option>
                                                <option>Ethiopia</option>
                                                <option>Tanzania</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        <div className="adventure-cat">
                                            <select name="date" className="search-adventure">
                                                <option>Date</option>
                                                <option>1-4-2016</option>
                                                <option>5-9-2016</option>
                                                <option>3-10-2016</option>
                                                <option>15-2-2017</option>
                                                <option>22-7-2017</option>
                                                <option>10-8-2017</option>
                                                <option>7-11-2017</option>
                                                <option>9-12-2017</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2 hidden-sm">
                                        <div className="adventure-cat">
                                            <select name="price" className="search-adventure">
                                                <option>Price</option>
                                                <option>$5000</option>
                                                <option>$8000</option>
                                                <option>$10000</option>
                                                <option>$12000</option>
                                                <option>$14000</option>
                                                <option>$16000</option>
                                                <option>$18000</option>
                                                <option>$20000</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-3">
                                        <div className="adventure-tab clearfix">
                                            <ul className="nav nav-tabs navbar-left">
                                                <li><a className="grid-view" href="shop-grid-no-sidebar.html">Shop Grid No Sidebar</a></li>
                                                <li><a className="list-view" href="shop-grid-with-sidebar.html" >Shop Grid Sidebar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-adventure">
                            <a href="#"><img src={tour_1} alt="" /></a>
                            <div className="adventure-text effect-bottom">
                                <div className="transparent-overlay">
                                    <h4><a href="#">Adventure Trip | <span>Europe</span></a></h4>
                                    <span className="trip-time"><i className="fa fa-clock-o"></i>5 Day Trip</span>
                                    <span className="trip-level"><i className="fa fa-send-o"></i>Level: Basic</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla. </p>
                                </div>
                                <div className="adventure-price-link">
                                    <span className="trip-price">$659</span>
                                    <span className="trip-person">Per Person</span>
                                    <div className="adventure-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-adventure">
                            <a href="#"><img src={tour_1} alt="" /></a>
                            <div className="adventure-text effect-bottom">
                                <div className="transparent-overlay">
                                    <h4><a href="#">Refreshment Trip | <span>India</span></a></h4>
                                    <span className="trip-time"><i className="fa fa-clock-o"></i>4 Day Trip</span>
                                    <span className="trip-level"><i className="fa fa-send-o"></i>Level: Basic</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla. </p>
                                </div>
                                <div className="adventure-price-link">
                                    <span className="trip-price">$408</span>
                                    <span className="trip-person">Per Person</span>
                                    <div className="adventure-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-adventure">
                            <a href="#"><img src={tour_1} alt="" /></a>
                            <div className="adventure-text effect-bottom">
                                <div className="transparent-overlay">
                                    <h4><a href="#">Cycling | <span>Nepal</span></a></h4>
                                    <span className="trip-time"><i className="fa fa-clock-o"></i>7 Day Trip</span>
                                    <span className="trip-level"><i className="fa fa-send-o"></i>Level: Advance</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla. </p>
                                </div>
                                <div className="adventure-price-link">
                                    <span className="trip-price">$970</span>
                                    <span className="trip-person">Per Person</span>
                                    <div className="adventure-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-adventure">
                            <a href="#"><img src={tour_1} alt="" /></a>
                            <div className="adventure-text effect-bottom">
                                <div className="transparent-overlay">
                                    <h4><a href="#">Family Trip | <span>Bangladesh</span></a></h4>
                                    <span className="trip-time"><i className="fa fa-clock-o"></i>3 Day Trip</span>
                                    <span className="trip-level"><i className="fa fa-send-o"></i>Level: Basic</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla. </p>
                                </div>
                                <div className="adventure-price-link">
                                    <span className="trip-price">$350</span>
                                    <span className="trip-person">Per Person</span>
                                    <div className="adventure-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-adventure">
                            <a href="#"><img src={tour_1} alt="" /></a>
                            <div className="adventure-text effect-bottom">
                                <div className="transparent-overlay">
                                    <h4><a href="#">Adventure Trip | <span>Aeoli Islands</span></a></h4>
                                    <span className="trip-time"><i className="fa fa-clock-o"></i>10 Day Trip</span>
                                    <span className="trip-level"><i className="fa fa-send-o"></i>Level: Advance</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla. </p>
                                </div>
                                <div className="adventure-price-link">
                                    <span className="trip-price">$950</span>
                                    <span className="trip-person">Per Person</span>
                                    <div className="adventure-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-adventure">
                            <a href="#"><img src={tour_1} alt="" /></a>
                            <div className="adventure-text effect-bottom">
                                <div className="transparent-overlay">
                                    <h4><a href="#">Arts and Culture | <span>Egypt</span></a></h4>
                                    <span className="trip-time"><i className="fa fa-clock-o"></i>6 Day Trip</span>
                                    <span className="trip-level"><i className="fa fa-send-o"></i>Level: Basic</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla. </p>
                                </div>
                                <div className="adventure-price-link">
                                    <span className="trip-price">$568</span>
                                    <span className="trip-person">Per Person</span>
                                    <div className="adventure-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-adventure">
                            <a href="#"><img src={tour_1} alt="" /></a>
                            <div className="adventure-text effect-bottom">
                                <div className="transparent-overlay">
                                    <h4><a href="#">Adventure | <span>Everest Camp</span></a></h4>
                                    <span className="trip-time"><i className="fa fa-clock-o"></i>30 Day Trip</span>
                                    <span className="trip-level"><i className="fa fa-send-o"></i>Level: Advance</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla. </p>
                                </div>
                                <div className="adventure-price-link">
                                    <span className="trip-price">$999</span>
                                    <span className="trip-person">Per Person</span>
                                    <div className="adventure-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-adventure">
                            <a href="#"><img src={tour_1} alt="" /></a>
                            <div className="adventure-text effect-bottom">
                                <div className="transparent-overlay">
                                    <h4><a href="#">Road Trip | <span>Ireland</span></a></h4>
                                    <span className="trip-time"><i className="fa fa-clock-o"></i>15 Day Trip</span>
                                    <span className="trip-level"><i className="fa fa-send-o"></i>Level: Advance</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla. </p>
                                </div>
                                <div className="adventure-price-link">
                                    <span className="trip-price">$852</span>
                                    <span className="trip-person">Per Person</span>
                                    <div className="adventure-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 hidden-sm col-xs-12">
                        <div className="single-adventure">
                            <a href="#"><img src={tour_1} alt="" /></a>
                            <div className="adventure-text effect-bottom">
                                <div className="transparent-overlay">
                                    <h4><a href="#">Adventure | <span>Australia</span></a></h4>
                                    <span className="trip-time"><i className="fa fa-clock-o"></i>10 Day Trip</span>
                                    <span className="trip-level"><i className="fa fa-send-o"></i>Level: Advance</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla. </p>
                                </div>
                                <div className="adventure-price-link">
                                    <span className="trip-price">$378</span>
                                    <span className="trip-person">Per Person</span>
                                    <div className="adventure-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="pagination-content">
                            <div className="pagination-button">
                                <ul className="pagination">
                                    <li><a href="#"><i className="fa fa-angle-left"></i></a></li>
                                    <li className="current"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
)