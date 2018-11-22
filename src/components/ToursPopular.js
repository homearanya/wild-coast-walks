import React from 'react'
import { Link } from "gatsby"

import '../assets/css/product.css'

import advlist_1 from '../assets/img/adventure-list/27.jpg'

const Product = (props) => {
    return (
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-adventure">
                <Link to="/tour/"><img src={props.imgSrc} alt="" /></Link>
                <div className="adventure-text effect-bottom">
                    <div className="transparent-overlay">
                        <h4><Link to="/tour/">{props.title} | <span>{props.destination}</span></Link></h4>
                        <span className="trip-time"><i className="fa fa-clock-o"></i>{props.duration}</span>
                        <span className="trip-level"><i className="fa fa-send-o"></i>{props.level}</span>
                        <p>{props.description}</p>
                    </div>
                    <div className="adventure-price-link">
                        <span className="trip-price">{props.price}</span>
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
    )
}


export default function Tours(props) {
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
                    <div className="section-title text-center">
                        <h2><span>Wild Coast</span> Slackpack</h2>
                    </div>
                    <Product
                        imgSrc={advlist_1}
                        imgAlt=""
                        title="Meander Hike"
                        destination="Wild Coast"
                        duration="5 nights"
                        level="Level: Basic"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla."
                        price="$659"
                    />
                    <Product
                        imgSrc={advlist_1}
                        imgAlt=""
                        title="Sunshine Hike"
                        destination="Wild Coast"
                        duration="5 nights"
                        level="Level: Basic"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla."
                        price="$559"
                    />
                    <Product
                        imgSrc={advlist_1}
                        imgAlt=""
                        title="Mini Break Hike"
                        destination="Wild Coast"
                        duration="3 nights"
                        level="Level: Basic"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla."
                        price="$359"
                    />
                </div>
                <div className="row">
                    <div className="section-title text-center">
                        <h2><span>Drakensberg</span> Slackpack</h2>
                    </div>
                    <Product
                        imgSrc={advlist_1}
                        imgAlt=""
                        title="Giants Cup"
                        destination="Drakensberg"
                        duration="4 nights"
                        level="Level: Basic"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla."
                        price="$659"
                    />
                    <Product
                        imgSrc={advlist_1}
                        imgAlt=""
                        title="Amphitheatre "
                        destination="Drakensberg"
                        duration="4 nights"
                        level="Level: Basic"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla."
                        price="$559"
                    />
                    <Product
                        imgSrc={advlist_1}
                        imgAlt=""
                        title="Mehloding"
                        destination="Drakensberg"
                        duration="4 nights"
                        level="Level: Basic"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla."
                        price="$359"
                    />
                </div>
                <div className="row">
                    <div className="section-title text-center">
                        <h2><span>Midlands</span> Slackpack</h2>
                    </div>
                    <Product
                        imgSrc={advlist_1}
                        imgAlt=""
                        title="Karkloof Falls2Falls"
                        destination="Midlands"
                        duration="3 nights"
                        level="Level: Basic"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla."
                        price="$659"
                    />
                    <Product
                        imgSrc={advlist_1}
                        imgAlt=""
                        title="Dargle Samango"
                        destination="Midlands"
                        duration="3 nights"
                        level="Level: Basic"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla."
                        price="$559"
                    />
                    <Product
                        imgSrc={advlist_1}
                        imgAlt=""
                        title="Nhlosane Hike"
                        destination="Midlands"
                        duration="3 nights"
                        level="Level: Basic"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla."
                        price="$359"
                    />
                </div>
                <div className="row">
                    <div className="section-title text-center">
                        <h2><span>Midlands</span> Cycle Tours</h2>
                    </div>
                    <Product
                        imgSrc={advlist_1}
                        imgAlt=""
                        title="Battlefields"
                        destination="Midlands"
                        duration="7 nights"
                        level="Level: Basic"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla."
                        price="$659"
                    />
                    <Product
                        imgSrc={advlist_1}
                        imgAlt=""
                        title="Midlands Meander"
                        destination="Midlands"
                        duration="3 nights"
                        level="Level: Basic"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla."
                        price="$559"
                    />
                    <Product
                        imgSrc={advlist_1}
                        imgAlt=""
                        title="Trappist Monastery"
                        destination="Midlands"
                        duration="5 nights"
                        level="Level: Basic"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare ut est in molestie. Vestibulum convallis congue velit, et facilisis lorem efficitur et. Morbi vitae pellentesque nulla."
                        price="$359"
                    />
                </div>
            </div>
        </div>
    )
}
