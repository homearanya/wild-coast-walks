import React from 'react'

import '../assets/css/bestSellArea.css'

import BestSellSlider from "../components/BestSellSlider"

import sell_5 from '../assets/img/sell/5.jpg'

export default function BestSellArea() {
    return (
        <div className="best-sell-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>Best <span>Selling Trips</span></h1>
                            </div>
                            <p>Not sure what you’re looking for and need a little inspiration? We can help. Check out our handpicked <br />lists of topical trips you can take right now.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="sell-text-container">
                            <div className="title-container">
                                <h3>WILDLIFE</h3>
                                <div className="best-sell-link">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-rss"></i></a>
                                </div>
                            </div>
                            <p>Get closer to nature. From the jungles of India to the African bush, our small group tours take you to the heart of nature. From elephants silhouetted against an Africa sunset to orangutans swinging in the treetops.....</p>
                            <a href="#" className="button-one">VIew trip</a>
                        </div>
                        <BestSellSlider />
                    </div>
                    <div className="col-md-6 hidden-sm">
                        <img src={sell_5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
