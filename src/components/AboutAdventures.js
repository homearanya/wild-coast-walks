import React from 'react'

import '../assets/css/aboutAdventures.css'

export default function AboutAdventures() {
    return (
        <div className="about-adventures section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>About <span>adventures</span></h1>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....</p>
                        </div>
                        <a href="#" className="button-one">Buy Now</a>
                        <div className="details-social-link">
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
