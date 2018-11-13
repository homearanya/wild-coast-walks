import React from 'react'
import { Link } from "gatsby"


import '../assets/css/aboutArea.css'

import about_picture from '../assets/img/about/about.jpg'

export default function AboutArea() {
    return (
        <div className="about-area section-padding text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 hidden-sm hidden-xs">
                        <img src={about_picture} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="about-container">
                            <div className="section-title">
                                <div className="title-border">
                                    <h1><span>Wild Coast Walks</span></h1>
                                </div>
                            </div>
                            <div className="about-text">
                                {/* <h1>This is your planet. Introduce yourself.</h1> */}
                                <p>We're are one of the oldest and most established luxury slack-packing operators in the Transkei, our walks take in some of the most unspoilt and picturesque sections of our coastline.</p>
                                <Link to="about">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
