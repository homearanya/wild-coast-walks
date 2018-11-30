import React from "react"
import { Helmet } from "react-helmet"

import Banner from "../components/Banner";

import '../assets/css/blogDetails.css'

import bannerImage from '../assets/img/banner/15.jpg'


export default () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Blog - Wild Coast Walks</title>
        </Helmet>

        <Banner
            extraClass="blog-one"
            title1="Adventure"
            title2="Blog"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum."
            breadcrumb="Blog"
            imageBanner={bannerImage}
        />
        <div className="blog-post-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="sidebar-widget">
                            <div className="single-sidebar-widget">
                                <h4>Search <span>Blog</span></h4>
                                <form id="text-search" action="#">
                                    <input type="text" placeholder="Search Here ....." />
                                    <button className="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            <div className="clearfix"></div>
                            <div className="single-sidebar-widget country-select">
                                <h4>Select <span>Categories</span></h4>
                                <ul className="widget-categories">
                                    <li><a href="#">Hiking <span>(10)</span></a></li>
                                    <li><a href="#">Camping <span>(175)</span></a></li>
                                    <li><a href="#">Trekking <span>(25)</span></a></li>
                                    <li><a href="#">Safari <span>(18)</span></a></li>
                                    <li><a href="#">Polar <span>(247)</span></a></li>
                                    <li><a href="#">Mountain <span>(95)</span></a></li>
                                    <li><a href="#">Biking <span>(39)</span></a></li>
                                    <li><a href="#">Climbing <span>(69)</span></a></li>
                                    <li className="no-margin"><a href="#" className="no-margin">Sailing <span>(27)</span></a></li>
                                </ul>
                            </div>
                            <div className="single-sidebar-widget">
                                <h4>Recent <span>Posts</span></h4>
                                <div className="single-widget-posts">
                                    <div className="post-img">
                                        <a href="#"><img src="img/blog/3.jpg" alt="" /></a>
                                    </div>
                                    <div className="posts-text">
                                        <h4><a href="#">Himalaia Trip | Europe</a></h4>
                                        <p><i className="fa fa-clock-o"></i> May 27, 2015</p>
                                    </div>
                                </div>
                                <div className="single-widget-posts">
                                    <div className="post-img">
                                        <a href="#"><img src="img/blog/4.jpg" alt="" /></a>
                                    </div>
                                    <div className="posts-text">
                                        <h4><a href="#">Himalaia Trip | Nepal</a></h4>
                                        <p><i className="fa fa-clock-o"></i> Aug 09, 2016</p>
                                    </div>
                                </div>
                                <div className="single-widget-posts no-margin">
                                    <div className="post-img">
                                        <a href="#"><img src="img/blog/5.jpg" alt="" /></a>
                                    </div>
                                    <div className="posts-text">
                                        <h4><a href="#">Himalaia Trip | China</a></h4>
                                        <p><i className="fa fa-clock-o"></i> Jun 22, 2016</p>
                                    </div>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <h4>Blog <span>Archives</span></h4>
                                <div className="blog-archive">
                                    <select className="archive" name="archive">
                                        <option>Select Month</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </select>
                                </div>
                            </div>
                            <div className="single-sidebar-widget icon-bottom tooltip-icons">
                                <h4>Blog <span>Tags</span></h4>
                                <div className="widget-icon">
                                    <span><a href="#" data-toggle="tooltip" title="Tents"><img alt="" src="img/icon/25.png" /></a></span>
                                    <span><a href="#" data-toggle="tooltip" title="Hiking"><img alt="" src="img/icon/26.png" /></a></span>
                                    <span><a href="#" data-toggle="tooltip" title="Cycling"><img alt="" src="img/icon/27.png" /></a></span>
                                    <span><a href="#" data-toggle="tooltip" title="Beach"><img alt="" src="img/icon/28.png" /></a></span>
                                    <span className="no-margin"><a href="#" data-toggle="tooltip" title="Ship Tour"><img alt="" src="img/icon/29.png" /></a></span>
                                    <span className="no-margin"><a href="#" data-toggle="tooltip" title="Boat Tour"><img alt="" src="img/icon/30.png" /></a></span>
                                    <span className="no-margin"><a href="#" data-toggle="tooltip" title="Water Games"><img alt="" src="img/icon/31.png" /></a></span>
                                    <span className="no-margin"><a href="#" data-toggle="tooltip" title="Jungle"><img alt="" src="img/icon/32.png" /></a></span>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="single-sidebar-widget widget-gallery">
                                <h4>Photo <span>Gallery</span></h4>
                                <div className="row">
                                    <div className="col-md-4 col-sm-2 col-xs-4">
                                        <a href="#"><img src="img/blog/6.jpg" alt="" /></a>
                                    </div>
                                    <div className="col-md-4 col-sm-2 col-xs-4">
                                        <a href="#"><img src="img/blog/7.jpg" alt="" /></a>
                                    </div>
                                    <div className="col-md-4 col-sm-2 col-xs-4">
                                        <a href="#"><img src="img/blog/8.jpg" alt="" /></a>
                                    </div>
                                    <div className="col-md-4 col-sm-2 col-xs-4">
                                        <a href="#"><img src="img/blog/9.jpg" alt="" /></a>
                                    </div>
                                    <div className="col-md-4 col-sm-2 col-xs-4">
                                        <a href="#"><img src="img/blog/10.jpg" alt="" /></a>
                                    </div>
                                    <div className="col-md-4 col-sm-2 col-xs-4">
                                        <a href="#"><img src="img/blog/11.jpg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="single-blog-post blog-post-details">
                            <div className="single-blog-post-img">
                                <a href="#"><img src="img/blog/large-1.jpg" alt="" /></a>
                                <div className="date-time">
                                    <span className="date">10</span>
                                    <span className="month">AUG</span>
                                </div>
                            </div>
                            <div className="single-blog-post-text">
                                <h4>How's the weather? Best times to travel.....</h4>
                                <div className="author-comments">
                                    <span><i className="fa fa-user"></i>ALICE HINES</span>
                                    <span><i className="fa fa-comment"></i>15 Comments</span>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.</p>
                                <p className="dark-bold">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown and printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="blog-button-links">
                                <span className="blog-tags">Tags: <a href="#">Store,</a> <a href="#">Women,</a> <a href="#">Dress,</a> <a href="#">Fashion</a></span>
                                {/* <div className="blog-links">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-rss"></i></a>
                                </div> */}
                            </div>
                        </div>
                        <div className="blog-comments">
                            <h4 className="blog-title">User <span>Comments</span></h4>
                            <div className="single-comment">
                                <div className="author-image">
                                    <img src="img/blog/author-1.jpg" alt="" />
                                </div>
                                <div className="comment-text">
                                    <div className="author-info">
                                        <h4><a href="#">Watson</a></h4>
                                        <span className="reply"><a href="#"><i className="fa fa-reply"></i>Reply</a></span>
                                        <span className="comment-time">45 Minutes Ago</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                </div>
                            </div>
                            <div className="single-comment comment-reply">
                                <div className="author-image">
                                    <img src="img/blog/author-2.jpg" alt="" />
                                </div>
                                <div className="comment-text">
                                    <div className="author-info">
                                        <h4><a href="#">Maria</a></h4>
                                        <span className="reply"><a href="#"><i className="fa fa-reply"></i>Reply</a></span>
                                        <span className="comment-time">8 Minutes Ago</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                </div>
                            </div>
                            <div className="single-comment">
                                <div className="author-image">
                                    <img src="img/blog/author-1.jpg" alt="" />
                                </div>
                                <div className="comment-text">
                                    <div className="author-info">
                                        <h4><a href="#">Watson</a></h4>
                                        <span className="reply"><a href="#"><i className="fa fa-reply"></i>Reply</a></span>
                                        <span className="comment-time">10 Minutes Ago</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled .</p>
                                </div>
                            </div>
                        </div>
                        <div className="leave-comment">
                            <h4 className="blog-title">Leave A <span>Comment</span></h4>
                            <form action="#" method="post" id="comment">
                                <div className="comment-form">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <label className="required">name</label>
                                            <input type="text" name="name" value="" />
                                            <label className="required">Email</label>
                                            <input type="email" name="email" value="" />
                                            <label>Subject</label>
                                            <input type="text" name="subject" value="" />
                                        </div>
                                        <div className="col-md-7">
                                            <label>Your Comments</label>
                                            <textarea rows="12" name="enquiry"></textarea>
                                        </div>
                                    </div>
                                    <input type="submit" className="comment-btn" value="Submit comment" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
)