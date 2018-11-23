import React from 'react'
import { Link } from "gatsby"

import '../assets/css/product.css'

const Block = (props) => {
    const tours = props.blockDetails.tours
    return (
        <div className="row">
            <div className="section-title text-center">
                <h2>{props.blockDetails.heading1}<span></span></h2>
            </div>
            <Tour tourDetails={props.toursObject[tours.tour1.trim()]} />
            <Tour tourDetails={props.toursObject[tours.tour2.trim()]} />
            <Tour tourDetails={props.toursObject[tours.tour3.trim()]} />
        </div>
    )
}
const Tour = (props) => {
    if (!props.tourDetails) {
        return null
    }
    const tourDetails = props.tourDetails.frontmatter;
    let imageSrc = '';
    let imageAlt = '';
    if (tourDetails.imagethumbnail) {
        imageSrc = tourDetails.imagethumbnail.image;
        imageAlt = tourDetails.imagethumbnail.alt;
    }
    return (
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-adventure">
                <Link to="/tour/"><img src={imageSrc} alt={imageAlt} /></Link>
                <div className="adventure-text effect-bottom">
                    <div className="transparent-overlay">
                        <h4><Link to="/tour/">{tourDetails.title} | <span>{tourDetails.destination}</span></Link></h4>
                        <span className="trip-time"><i className="fa fa-clock-o"></i>{tourDetails.duration}</span>
                        <span className="trip-level"><i className="fa fa-send-o"></i>{tourDetails.level}</span>
                        <p>{tourDetails.description.substring(0, 230) + '...'}</p>
                    </div>
                    <div className="adventure-price-link">
                        <span className="trip-person">From</span>
                        <span className="trip-person"><span>{tourDetails.price}</span></span>
                        <span className="trip-person">per person</span>
                        <span className="trip-price">&nbsp;</span>
                        {/* <div className="adventure-link">
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
