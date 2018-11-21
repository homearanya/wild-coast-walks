import React from 'react'
import { Link } from "gatsby"


import '../assets/css/aboutArea.css'

export default function AboutArea(props) {
    return (
        <div className="about-area section-padding text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 hidden-sm hidden-xs">
                        <img src={props.aboutArea.image.image} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="about-container">
                            <div className="section-title">
                                <div className="title-border">
                                    <h1><span>{props.aboutArea.heading2}</span></h1>
                                </div>
                            </div>
                            <div className="about-text">
                                {/* <h1>This is your planet. Introduce yourself.</h1> */}
                                <p>{props.aboutArea.blur}</p>
                                <Link to="/about">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
