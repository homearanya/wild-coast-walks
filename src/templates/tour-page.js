import React from 'react'
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
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
    return (
        <div className="trip-information">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="trip-info-left-text">
                                <div className="section-title text-center">
                                    <div className="title-border">
                                        <h1>Trip <span>Overview</span></h1>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                                <div className="clearfix"></div>
                                <ul className="details-info">
                                    <li className=""><span>Duration</span>5 days</li>
                                    <li className=""><span>Price</span>From R6500 per person</li>
                                </ul>
                                {/* <div className="details-social-link">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-rss"></i></a>
                                </div> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="trip-booking-info">
                                <button id="booking-button" type="submit">Book this trip</button>
                            </div>
                        </div>
                    </div>
                    <Gallery />
                </div>
            </div>
        </div>

    )
}

function makeUnsplashSrc(id) {
    return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`;
}
function makeUnsplashSrcSet(id, size) {
    return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`;
}
function makeUnsplashThumbnail(id, orientation = 'landscape') {
    const dimensions = orientation === 'square'
        ? 'w=300&h=300'
        : 'w=240&h=159';

    return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}

const DEFAULT_IMAGES = [
    { id: '1470619549108-b85c56fe5be8', caption: 'Photo by Alan Emery', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
    { id: '1471079502516-250c19af6928', caption: 'Photo by Jeremy Bishop', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
    { id: '1454023492550-5696f8ff10e1', caption: 'Photo by Jessica Weiller', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
    { id: '1470854989922-5be2f7456d78', caption: 'Photo by Piotr Łaskawski', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
    { id: '1470317596697-cbdeda56f999', caption: 'Photo by Michel Bosma', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
    { id: '1470777639313-60af88918203', caption: 'Photo by Cris Saur', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/GNUcUx-iObg (Koala)
    { id: '1471101173712-b9884175254e', caption: 'Photo by Pedro Lastra', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/5oRzZU5uwSM (Dragonfly)
    { id: '1471127432458-65206be149c9', caption: 'Photo by Ernesto Velázquez', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/Kpgt4pl03O0 (Deer)
    { id: '1453550486481-aa4175b013ea', caption: 'Photo by Benjamin Pley', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/WiSeaZ4E6ZI (Elephant)
    { id: '1415904663467-dfdc16cae794', caption: 'Photo by Levi Saunders', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/NUMlxTPsznM (Coyote)
];

const Gallery = (props) => {

    return (
        <div className="col-md-6">
            <TourGallery images={DEFAULT_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
                src: makeUnsplashSrc(id),
                thumbnail: makeUnsplashThumbnail(id, orientation),
                srcSet: [
                    makeUnsplashSrcSet(id, 1024),
                    makeUnsplashSrcSet(id, 800),
                    makeUnsplashSrcSet(id, 500),
                    makeUnsplashSrcSet(id, 320),
                ],
                caption,
                orientation,
                useForDemo,
            }))} />
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

export default ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wild Coast Walks</title>
            </Helmet>

            <Banner
                extraClass="details-one"
                title1={frontmatter.title}
                title2=""
                text="The right tour for the right traveller"
                breadcrumb="tour"
                imageBanner={frontmatter.imagebanner}
            />

            {/* <AdventuresGrid /> */}
            <TripInformation />
        </div>
    )
}

export const tourPageQuery = graphql`
  query TourPage($id: String!) {
                markdownRemark(id: {eq: $id }) {
                frontmatter {
            title
            imagebanner {
                image
                alt
            }
        }   
     }
  }
`