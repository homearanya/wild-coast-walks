import React from 'react'
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Content, { HTMLContent } from '../components/Content'
import TourGallery from '../components/TourGallery';
import Banner from "../components/Banner";

import '../assets/css/tour.css'

const AdventuresGrid = (props) => {
    return (
        <div className="adventures-grid section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="shop-item-filter">
                            <form action="#" id="banner-searchbox" className="details-form">
                                <div className="row">
                                    <div className="col-md-3 col-sm-4 col-xs-12">
                                        <div className="adventure-cat">
                                            <select name="destination" className="search-adventure">
                                                <option>Select Destination</option>
                                                <option>Madagascar</option>
                                                <option>Botswana</option>
                                                <option>Canada, Alaska</option>
                                                <option>Antarctica</option>
                                                <option>Swaziland</option>
                                                <option>Ethiopia</option>
                                                <option>Tanzania</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-xs-12">
                                        <div className="adventure-cat">
                                            <select name="duration" className="search-adventure">
                                                <option>Duration</option>
                                                <option>3 to 10 days</option>
                                                <option>5 to 7 days</option>
                                                <option>7 to 10 days</option>
                                                <option>10 to 15 days</option>
                                                <option>15 to 20 days</option>
                                                <option>20 to 25 days</option>
                                                <option>25 to 30 days</option>
                                                <option>30 to 60days</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2 hidden-sm col-xs-12">
                                        <div className="adventure-cat box-small">
                                            <select name="departing" className="search-adventure">
                                                <option>Departing</option>
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 col-xs-12">
                                        <div className="adventure-cat box-small">
                                            <select name="price" className="search-adventure">
                                                <option>Price</option>
                                                <option>$5000</option>
                                                <option>$8000</option>
                                                <option>$10000</option>
                                                <option>$12000</option>
                                                <option>$14000</option>
                                                <option>$16000</option>
                                                <option>$18000</option>
                                                <option>$20000</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-3 col-xs-12">
                                        <div className="details-button">
                                            <button type="submit" id="btn-search-category">SEARCH</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TripInformation = (props) => {
    const TourContent = HTMLContent || Content
    return (
        <div className="trip-information section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 trip-information-left">
                        <div className="row">
                            <div className="trip-info-left-text">
                                <div className="section-title text-center">
                                    <div className="title-border">
                                        <h1>At a <span>Glance</span></h1>
                                    </div>
                                    <p>{props.tourInfo.frontmatter.shortdescription}</p>
                                </div>
                                <div className="clearfix"></div>
                                <ul className="details-info">
                                    <li className=""><span>Destination</span>{props.tourInfo.frontmatter.destination}</li>
                                    <li className=""><span>Activity</span>{props.tourInfo.frontmatter.activity}</li>
                                    <li className=""><span>Duration</span>{props.tourInfo.frontmatter.duration}</li>
                                    <li className=""><span>Price</span>{`From ${props.tourInfo.frontmatter.price} pp`}</li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="trip-booking-info">
                                    <button id="booking-button" type="submit">Book this trip</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {props.tourInfo.frontmatter.photoGallery &&
                                props.tourInfo.frontmatter.photoGallery.photo > 0 ?
                                <TourGallery photos={props.tourInfo.frontmatter.photoGallery.photo} />
                                : null}
                        </div>
                    </div>
                    <div className="col-md-6 trip-information-right">
                        <div className="row">
                            <div className="trip-info-left-text">
                                <div className="section-title text-center">
                                    <div className="title-border">
                                        <h1>Trip <span>Overview</span></h1>
                                    </div>
                                    <TourContent content={props.tourInfo.html} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TripInclusion = (props) => {
    return (
        <div className="trip-inclution section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>Trip <span>Inclutions</span></h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui<br /> id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="include-item">
                            <div className="include-icon">
                                <i className="fa fa-cutlery"></i>
                            </div>
                            <div className="include-text">
                                <h4>Meals</h4>
                                <p>8 breakfasts, 3 lunches, 2 dinners</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="include-item">
                            <div className="include-icon">
                                <i className="fa fa-truck"></i>
                            </div>
                            <div className="include-text">
                                <h4>Transport</h4>
                                <p>Bus, Minibus, Raft, Bus, Minibus</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 hidden-sm">
                        <div className="include-item no-margin">
                            <div className="include-icon">
                                <i className="fa fa-home"></i>
                            </div>
                            <div className="include-text">
                                <h4>Accommodation</h4>
                                <p>Camping (with basic facilities) (1 night), Guesthouse (5 nights), Hotel (3 nights)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TripPricingArea = (props) => {
    return (
        <div className="trip-pricing-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1 className="text-white">Trip <span>Date &amp; Price</span></h1>
                            </div>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui<br /> id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form action="#" method="post">
                            <div className="table-content table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <td className="trip-date"><div>Departure Dates</div></td>
                                            <td className="trip-status"><div>Trip Status</div></td>
                                            <td className="trip-price"><div>Price <span>(Per person)</span></div></td>
                                            <td className="trip-action"><div>Action</div></td>
                                        </tr>
                                        <tr><td className="transparent" colSpan={4}></td></tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="trip-date"><div>19 Dec 2015 - 28 Dec 2015</div></td>
                                            <td className="trip-status"><div>Fully booked</div></td>
                                            <td className="trip-price"><div>$1,200 - $1,400</div></td>
                                            <td className="trip-action"><div><button className="booking-button-two" type="submit">Book now</button></div></td>
                                        </tr>
                                        <tr>
                                            <td className="trip-date"><div>31 Oct 2015 - 9 Nov 2015</div></td>
                                            <td className="trip-status"><div>Available</div></td>
                                            <td className="trip-price"><div>$1,048 - $2156</div></td>
                                            <td className="trip-action"><div><button className="booking-button-two" type="submit">Book now</button></div></td>
                                        </tr>
                                        <tr>
                                            <td className="trip-date"><div>24 Oct 2015 - 2 Nov 2015</div></td>
                                            <td className="trip-status"><div>Fully booked</div></td>
                                            <td className="trip-price"><div>$1,200 - $1,400</div></td>
                                            <td className="trip-action"><div><button className="booking-button-two" type="submit">Book now</button></div></td>
                                        </tr>
                                        <tr>
                                            <td className="trip-date"><div>19 Dec 2015 - 28 Dec 2015</div></td>
                                            <td className="trip-status"><div>Available</div></td>
                                            <td className="trip-price"><div>$1,048 - $2156</div></td>
                                            <td className="trip-action"><div><button className="booking-button-two" type="submit">Book now</button></div></td>
                                        </tr>
                                        <tr>
                                            <td className="trip-date"><div>31 Oct 2015 - 9 Nov 2015</div></td>
                                            <td className="trip-status"><div>Fully booked</div></td>
                                            <td className="trip-price"><div>$1,200 - $1,400</div></td>
                                            <td className="trip-action"><div><button className="booking-button-two" type="submit">Book now</button></div></td>
                                        </tr>
                                        <tr>
                                            <td className="trip-date"><div>24 Oct 2015 - 2 Nov 2015</div></td>
                                            <td className="trip-status"><div>Available</div></td>
                                            <td className="trip-price"><div>$1,048 - $2156</div></td>
                                            <td className="trip-action"><div><button className="booking-button-two" type="submit">Book now</button></div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function TourPage({ data }) {
    const { siteMetadata } = data.siteMetaDataQuery
    const { TourPageQuery: tourInfo } = data
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${tourInfo.frontmatter.title} - Tours - ${siteMetadata.title}`}</title>
            </Helmet>

            <Banner
                extraClass="details-one"
                title1={tourInfo.frontmatter.title}
                title2=""
                text="The right tour for the right traveller"
                breadcrumb="tour"
                imageBanner={tourInfo.frontmatter.imagebanner}
            />

            {/* <AdventuresGrid /> */}
            <TripInformation tourInfo={tourInfo} />
        </div>
    )
}

export const tourPageQuery = graphql`
    query TourPage($id: String!) {
        TourPageQuery: markdownRemark(id: {eq: $id }) {
            html
            frontmatter {
              title
              destination
              activity
              duration
              price
              shortdescription
              imagebanner {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 1600) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    alt
              }
              photoGallery {
                photo {
                    alt
                    caption
                    image {
                        childImageSharp {
                            fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                  }
                }
            }   
        }
        siteMetaDataQuery: site {
            siteMetadata {
              title
            }
        }
    }
`