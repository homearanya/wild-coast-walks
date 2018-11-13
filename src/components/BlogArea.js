import React from 'react'

import '../assets/css/blogArea.css'


import blog_1 from '../assets/img/blog/1.jpg'
import blog_2 from '../assets/img/blog/2.jpg'

export default function BlogArea() {
    return (
        <div className="blog-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>Latest <span>Blog Posts</span></h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui<br /> id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="blog-carousel">
                        <div className="col-md-6">
                            <div className="single-blog hover-effect">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="blog-image box-hover">
                                            <a href="blog-details.html"><img src={blog_1} alt="" /></a>
                                            <div className="date-time">
                                                <span className="date">10</span>
                                                <span className="month">AUG</span>
                                            </div>
                                        </div>
                                        <div className="blog-link">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-google-plus"></i></a>
                                            <a href="#"><i className="fa fa-linkedin"></i></a>
                                            <a href="#"><i className="fa fa-rss"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 margin-left">
                                        <div className="blog-text">
                                            <h4><a href="blog-details.html">What is travel? We answer the big, burning question.....</a></h4>
                                            <p>The question of What Travel Is is inter- esting, but more for what it tells you about the people doing the asking.</p>
                                            <a href="blog-details.html" className="button-one">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="single-blog hover-effect no-margin">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="blog-image box-hover">
                                            <a href="blog-details.html"><img src={blog_2} alt="" /></a>
                                            <div className="date-time">
                                                <span className="date">10</span>
                                                <span className="month">AUG</span>
                                            </div>
                                        </div>
                                        <div className="blog-link">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-google-plus"></i></a>
                                            <a href="#"><i className="fa fa-linkedin"></i></a>
                                            <a href="#"><i className="fa fa-rss"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 margin-left">
                                        <div className="blog-text">
                                            <h4><a href="blog-details.html">What is travel? We answer the big, burning question.....</a></h4>
                                            <p>The question of What Travel Is is inter- esting, but more for what it tells you about the people doing the asking.</p>
                                            <a href="blog-details.html" className="button-one">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
