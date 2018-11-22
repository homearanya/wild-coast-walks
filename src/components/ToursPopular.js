import React from 'react'
import { Link } from "gatsby"

import '../assets/css/product.css'

import advlist_1 from '../assets/img/adventure-list/27.jpg'

const Block = (props) => {
    const tours = props.blockDetails.tours
    return (
        <div className="row">
            <div className="section-title text-center">
                <h2>{props.blockDetails.heading1}<span></span></h2>
            </div>
            <Tour tourDetails={props.toursObject[tours.tour1]} />
            <Tour tourDetails={props.toursObject[tours.tour2]} />
            <Tour tourDetails={props.toursObject[tours.tour3]} />
        </div>
    )
}
const Tour = (props) => {
    if (!props.tourDetails) {
        return null
    }
    return (
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-adventure">
                <Link to="/tour/"><img src={props.tourDetails.imgSrc} alt="" /></Link>
                <div className="adventure-text effect-bottom">
                    <div className="transparent-overlay">
                        <h4><Link to="/tour/">{props.tourDetails.title} | <span>{props.tourDetails.destination}</span></Link></h4>
                        <span className="trip-time"><i className="fa fa-clock-o"></i>{props.tourDetails.duration}</span>
                        <span className="trip-level"><i className="fa fa-send-o"></i>{props.tourDetails.level}</span>
                        <p>{props.tourDetails.description}</p>
                    </div>
                    <div className="adventure-price-link">
                        <span className="trip-price">{props.tourDetails.price}</span>
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
                <Block blockDetails={props.toursArea.block1} toursObject={props.toursObject}></Block>
                <Block blockDetails={props.toursArea.block2} toursObject={props.toursObject}></Block>
                <Block blockDetails={props.toursArea.block3} toursObject={props.toursObject}></Block>
                <Block blockDetails={props.toursArea.block4} toursObject={props.toursObject}></Block>
            </div>
        </div>
    )
}
