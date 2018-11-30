import React from 'react'

import '../assets/css/portfolioArea.css'

import portfolio_1 from '../assets/img/portfolio/1.jpg'
import portfolio_2 from '../assets/img/portfolio/2.jpg'
import portfolio_3 from '../assets/img/portfolio/3.jpg'
import portfolio_4 from '../assets/img/portfolio/4.jpg'
import portfolio_5 from '../assets/img/portfolio/5.jpg'
import portfolio_6 from '../assets/img/portfolio/6.jpg'
import portfolio_7 from '../assets/img/portfolio/7.jpg'
import portfolio_8 from '../assets/img/portfolio/8.jpg'

export default function PortfolioArea() {
    return (
        <div className="portfolio-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>Browse by <span>Adventures</span></h1>
                            </div>
                            <p>Everyone loves to travel, but not everyone loves to travel the same way. G Adventures Travel Styles gather trips of a feather<br /> together so you can spend less time and more time dreaming about where you’ll go next.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-4">
                        <div className="single-portfolio">
                            <a href="#"><img src={portfolio_1} alt="" /></a>
                            <div className="portfolio-text effect-bottom">
                                <h4><a href="#">Family</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                {/* <div className="portfolio-link">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-rss"></i></a>
                                </div> */}
                            </div>
                        </div>
                        <div className="single-portfolio">
                            <a href="#"><img src={portfolio_5} alt="" /></a>
                            <div className="portfolio-text effect-bottom">
                                <h4><a href="#">Urban</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                {/* <div className="portfolio-link">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-rss"></i></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <div className="single-portfolio">
                            <a href="#"><img src={portfolio_2} alt="" /></a>
                            <div className="portfolio-text">
                                <h4><a href="#">Polar</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                {/* <div className="portfolio-link">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-rss"></i></a>
                                </div> */}
                            </div>
                        </div>
                        <div className="single-portfolio">
                            <a href="#"><img src={portfolio_6} alt="" /></a>
                            <div className="portfolio-text">
                                <h4><a href="#">Urban</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                {/* <div className="portfolio-link">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-rss"></i></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <div className="single-portfolio">
                            <a href="#"><img src={portfolio_3} alt="" /></a>
                            <div className="portfolio-text effect-bottom">
                                <h4><a href="#">Polar</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                {/* <div className="portfolio-link">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-rss"></i></a>
                                </div> */}
                            </div>
                        </div>
                        <div className="single-portfolio">
                            <a href="#"><img src={portfolio_7} alt="" /></a>
                            <div className="portfolio-text effect-bottom">
                                <h4><a href="#">Urban</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                {/* <div className="portfolio-link">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-rss"></i></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 hidden-sm">
                        <div className="single-portfolio">
                            <a href="#"><img src={portfolio_4} alt="" /></a>
                            <div className="portfolio-text">
                                <h4><a href="#">Polar</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                {/* <div className="portfolio-link">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-rss"></i></a>
                                </div> */}
                            </div>
                        </div>
                        <div className="single-portfolio">
                            <a href="#"><img src={portfolio_8} alt="" /></a>
                            <div className="portfolio-text">
                                <h4><a href="#">Urban</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                {/* <div className="portfolio-link">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-rss"></i></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
