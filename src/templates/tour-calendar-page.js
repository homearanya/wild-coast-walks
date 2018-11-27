import React from "react"
import { Helmet } from "react-helmet"

import '../assets/css/tourCalendar.css'
import Banner from "../components/Banner";

import eventImage from '../assets/img/adventure-list/22.jpg'
import icon_level from '../assets/img/icon/level.png'
import icon_35 from '../assets/img/icon/35.png'
import icon_36 from '../assets/img/icon/36.png'
import icon_37 from '../assets/img/icon/37.png'
import icon_38 from '../assets/img/icon/38.png'
import icon_39 from '../assets/img/icon/39.png'
import icon_40 from '../assets/img/icon/40.png'

export default ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tour Calendar - Wild Coast Walks</title>
            </Helmet>

            <Banner
                extraClass="grid"
                title1="Tour"
                title2="Calendar"
                text1="Upcoming Events"
                text2=""
                breadcrumb="Calendar"
                imageBanner={frontmatter.imagebanner}
            />

            <div className="adventures-grid section-padding list">
                <div className="container">
                    <div className="shop-item-filter">
                        <form action="#" id="banner-searchbox">
                            <div className="row">
                                <div className="col-lg-4 hidden-md col-sm-12">
                                    <p>Showing Trips 1 to 12 of 19 total</p>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4">
                                    <div className="adventure-cat box-small">
                                        <select name="type" className="search-adventure">
                                            <option>Adventure Type</option>
                                            <option>Bungee jumping</option>
                                            <option>Bicycle touring</option>
                                            <option>Jungle tourism</option>
                                            <option>Shark tourism</option>
                                            <option>Mountain biking</option>
                                            <option>Mountaineering</option>
                                            <option>Rock Adventure</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-5">
                                    <div className="adventure-cat box-small">
                                        <select name="level" className="search-adventure">
                                            <option>Easy Level</option>
                                            <option>Advance Level</option>
                                            <option>Moderate Level</option>
                                            <option>Basic Level</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2 hidden-sm">
                                    <div className="adventure-cat box-small">
                                        <select name="price" className="search-adventure">
                                            <option>Price</option>
                                            <option>$100-$300</option>
                                            <option>$400-$600</option>
                                            <option>$700-$800</option>
                                            <option>$900-$1000</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-3">
                                    <div className="adventure-tab clearfix">
                                        <ul className="nav nav-tabs navbar-left">
                                            <li><a href="shop-grid-no-sidebar.html" className="grid-view">Shop Grid No Sidebar</a></li>
                                            <li><a href="shop-grid-with-sidebar.html" className="list-view">Shop Grid With Sidebar</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="clearfix"></div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="single-list-item">
                                <div className="row">
                                    <div className="col-md-4 col-sm-5">
                                        <div className="adventure-img">
                                            <a href="#"><img src={eventImage} alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-sm-7 margin-left-list">
                                        <div className="adventure-list-container">
                                            <div className="adventure-list-text">
                                                <h1><a href="#">Beach Trip in Miami  / 7 Days Trip</a></h1>
                                                <h2>$659<span className="light">/</span><span className="persons">per person</span></h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius tortor at placerat rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum vel condimentum tortor. </p>
                                                <div className="list-buttons">
                                                    <a href="#" className="button-one button-blue">Learn More</a>
                                                    <div className="list-rating">
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <div className="adventure-list-link">
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                                        <a href="#"><i className="fa fa-rss"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="adventure-list-image">
                                                <div className="image-top">
                                                    <img src={icon_level} alt="" />
                                                </div>
                                                <h2>Easy level</h2>
                                                <ul className="image-bottom">
                                                    <li><img src={icon_35} alt="" /></li>
                                                    <li><img src={icon_36} alt="" /></li>
                                                    <li><img src={icon_37} alt="" /></li>
                                                    <li><img src={icon_38} alt="" /></li>
                                                    <li><img src={icon_39} alt="" /></li>
                                                    <li><img src={icon_40} alt="" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="single-list-item">
                                <div className="row">
                                    <div className="col-md-4 col-sm-5">
                                        <div className="adventure-img">
                                            <a href="#"><img src={eventImage} alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-sm-7 margin-left-list">
                                        <div className="adventure-list-container">
                                            <div className="adventure-list-text">
                                                <h1><a href="#">Beach Trip in Miami  / 7 Days Trip</a></h1>
                                                <h2>$659<span className="light">/</span><span className="persons">per person</span></h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius tortor at placerat rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum vel condimentum tortor. </p>
                                                <div className="list-buttons">
                                                    <a href="#" className="button-one button-blue">Learn More</a>
                                                    <div className="list-rating">
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <div className="adventure-list-link">
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                                        <a href="#"><i className="fa fa-rss"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="adventure-list-image">
                                                <div className="image-top">
                                                    <img src={icon_level} alt="" />
                                                </div>
                                                <h2>Easy level</h2>
                                                <ul className="image-bottom">
                                                    <li><img src={icon_35} alt="" /></li>
                                                    <li><img src={icon_36} alt="" /></li>
                                                    <li><img src={icon_37} alt="" /></li>
                                                    <li><img src={icon_38} alt="" /></li>
                                                    <li><img src={icon_39} alt="" /></li>
                                                    <li><img src={icon_40} alt="" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="single-list-item">
                                <div className="row">
                                    <div className="col-md-4 col-sm-5">
                                        <div className="adventure-img">
                                            <a href="#"><img src={eventImage} alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-sm-7 margin-left-list">
                                        <div className="adventure-list-container">
                                            <div className="adventure-list-text">
                                                <h1><a href="#">Beach Trip in Miami  / 7 Days Trip</a></h1>
                                                <h2>$659<span className="light">/</span><span className="persons">per person</span></h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius tortor at placerat rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum vel condimentum tortor. </p>
                                                <div className="list-buttons">
                                                    <a href="#" className="button-one button-blue">Learn More</a>
                                                    <div className="list-rating">
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <div className="adventure-list-link">
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                                        <a href="#"><i className="fa fa-rss"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="adventure-list-image">
                                                <div className="image-top">
                                                    <img src={icon_level} alt="" />
                                                </div>
                                                <h2>Easy level</h2>
                                                <ul className="image-bottom">
                                                    <li><img src={icon_35} alt="" /></li>
                                                    <li><img src={icon_36} alt="" /></li>
                                                    <li><img src={icon_37} alt="" /></li>
                                                    <li><img src={icon_38} alt="" /></li>
                                                    <li><img src={icon_39} alt="" /></li>
                                                    <li><img src={icon_40} alt="" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="single-list-item">
                                <div className="row">
                                    <div className="col-md-4 col-sm-5">
                                        <div className="adventure-img">
                                            <a href="#"><img src={eventImage} alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-sm-7 margin-left-list">
                                        <div className="adventure-list-container">
                                            <div className="adventure-list-text">
                                                <h1><a href="#">Beach Trip in Miami  / 7 Days Trip</a></h1>
                                                <h2>$659<span className="light">/</span><span className="persons">per person</span></h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius tortor at placerat rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum vel condimentum tortor. </p>
                                                <div className="list-buttons">
                                                    <a href="#" className="button-one button-blue">Learn More</a>
                                                    <div className="list-rating">
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <div className="adventure-list-link">
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                                        <a href="#"><i className="fa fa-rss"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="adventure-list-image">
                                                <div className="image-top">
                                                    <img src={icon_level} alt="" />
                                                </div>
                                                <h2>Easy level</h2>
                                                <ul className="image-bottom">
                                                    <li><img src={icon_35} alt="" /></li>
                                                    <li><img src={icon_36} alt="" /></li>
                                                    <li><img src={icon_37} alt="" /></li>
                                                    <li><img src={icon_38} alt="" /></li>
                                                    <li><img src={icon_39} alt="" /></li>
                                                    <li><img src={icon_40} alt="" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="single-list-item">
                                <div className="row">
                                    <div className="col-md-4 col-sm-5">
                                        <div className="adventure-img">
                                            <a href="#"><img src={eventImage} alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-sm-7 margin-left-list">
                                        <div className="adventure-list-container">
                                            <div className="adventure-list-text">
                                                <h1><a href="#">Beach Trip in Miami  / 7 Days Trip</a></h1>
                                                <h2>$659<span className="light">/</span><span className="persons">per person</span></h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius tortor at placerat rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum vel condimentum tortor. </p>
                                                <div className="list-buttons">
                                                    <a href="#" className="button-one button-blue">Learn More</a>
                                                    <div className="list-rating">
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <div className="adventure-list-link">
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                                        <a href="#"><i className="fa fa-rss"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="adventure-list-image">
                                                <div className="image-top">
                                                    <img src={icon_level} alt="" />
                                                </div>
                                                <h2>Easy level</h2>
                                                <ul className="image-bottom">
                                                    <li><img src={icon_35} alt="" /></li>
                                                    <li><img src={icon_36} alt="" /></li>
                                                    <li><img src={icon_37} alt="" /></li>
                                                    <li><img src={icon_38} alt="" /></li>
                                                    <li><img src={icon_39} alt="" /></li>
                                                    <li><img src={icon_40} alt="" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="single-list-item no-margin">
                                <div className="row">
                                    <div className="col-md-4 col-sm-5">
                                        <div className="adventure-img">
                                            <a href="#"><img src={eventImage} alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-sm-7 margin-left-list">
                                        <div className="adventure-list-container">
                                            <div className="adventure-list-text">
                                                <h1><a href="#">Beach Trip in Miami  / 7 Days Trip</a></h1>
                                                <h2>$659<span className="light">/</span><span className="persons">per person</span></h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius tortor at placerat rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum vel condimentum tortor. </p>
                                                <div className="list-buttons">
                                                    <a href="#" className="button-one button-blue">Learn More</a>
                                                    <div className="list-rating">
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star color"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <div className="adventure-list-link">
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                                        <a href="#"><i className="fa fa-rss"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="adventure-list-image">
                                                <div className="image-top">
                                                    <img src={icon_level} alt="" />
                                                </div>
                                                <h2>Easy level</h2>
                                                <ul className="image-bottom">
                                                    <li><img src={icon_35} alt="" /></li>
                                                    <li><img src={icon_36} alt="" /></li>
                                                    <li><img src={icon_37} alt="" /></li>
                                                    <li><img src={icon_38} alt="" /></li>
                                                    <li><img src={icon_39} alt="" /></li>
                                                    <li><img src={icon_40} alt="" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-content">
                        <div className="pagination-button">
                            <ul className="pagination">
                                <li><a href="#"><i className="fa fa-angle-left"></i></a></li>
                                <li className="current"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export const CalendarPageQuery = graphql`
  query CalendarPage ($id: String!) {
    markdownRemark(id: { eq: $id }) {
        frontmatter {
            imagebanner {
                image
                alt
            }
        }   
     }
  }
`