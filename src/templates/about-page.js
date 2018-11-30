import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Banner from "../components/Banner";

import '../assets/css/about.css'

import associate_1 from '../assets/img/blog/1.jpg'
import destination_1 from '../assets/img/destinations/destination_1.jpg'

const AboutAdventures = (props) => {
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
                        {/* <div className="details-social-link">
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

const DestinationsArea = (props) => {
    return (
        <div className="destinations-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>Destinations <span>Area</span></h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui<br /> id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="destinations-carousel">
                        <Destination />
                        <Destination />
                        <Destination />
                        <Destination />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Destination = (props) => {
    return (
        <div className="col-sm-6">
            <div className="single-destinations">
                <div className="destinations-image">
                    <img src={destination_1} alt="" />
                </div>
                <div className="destinations-text">
                    <h4>What is travel? We answer the big, burning question.....</h4>
                    <p>The question of What Travel Is is inter- esting, but more for what it tells you about the people doing the asking.</p>
                </div>
            </div>
        </div>
    )
}

const AssociatesArea = (props) => {
    return (
        <div className="associate-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>{props.heading1} <span>{props.heading2}</span></h1>
                            </div>
                            <p>{props.blurb}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="associate-carousel">
                        {props.partners.map(partner =>
                            <Associate
                                partner={partner}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

const Associate = (props) => {
    return (
        <div className="col-md-6">
            <div className="single-associate">
                <div className="row">
                    <div className="col-md-3 col-sm-4">
                        <div className="associate-image">
                            <img
                                src={props.partner.image.image}
                                alt={props.partner.image.alt}
                            />
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-8 margin-left">
                        <div className="associate-text">
                            <h4>{props.partner.heading1} <span>{props.partner.heading2}</span></h4>
                            <p>{props.partner.text}</p>
                        </div>
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
                <title>About us - Wild Coast Walks</title>
            </Helmet>

            <Banner
                extraClass="about-banner"
                title1="About"
                title2="US"
                text={frontmatter.banner.blurb}
                breadcrumb="About us"
                imageBanner={frontmatter.banner.imagebanner}
            />
            {/* <AboutAdventures /> */}
            <AssociatesArea
                heading1={frontmatter.partnersarea.heading1}
                heading2={frontmatter.partnersarea.heading2}
                blurb={frontmatter.partnersarea.introduction}
                partners={frontmatter.partnersarea.partner}
            />
            <DestinationsArea
                heading1={frontmatter.destinationsarea.heading1}
                heading2={frontmatter.destinationsarea.heading2}
                blurb={frontmatter.destinationsarea.introduction}
                destinations={frontmatter.destinationsarea.destination}
            />
        </div >
    )
}

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
		frontmatter {
            banner {
                blurb
                imagebanner {
                    image
                    alt
                }
          }
          destinationsarea {
            heading1
            heading2
            introduction
            destination {
              image {
                image
                alt
              }
              heading1
              heading2
              text
            }
          }
          partnersarea {
            heading1
            heading2
            introduction
            partner {
              image {
                image
                alt
              }
              heading1
              heading2
              text
            }
          }
        }
    }
  }
`