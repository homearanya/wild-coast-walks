import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

import MyContext from "../components/Context"
import SliderArea from "../components/SliderArea"
import Spinner from '../components/Spinner'

import '../assets/css/home-page.css'

import blog_1 from '../assets/img/blog/1.jpg'
import blog_2 from '../assets/img/blog/2.jpg'

const AboutArea = (props) => {
  return (
    <div className="about-area section-padding text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 hidden-sm hidden-xs">
            <Img fluid={props.aboutArea.image.image.childImageSharp.fluid} alt={props.aboutArea.image.alt} />
          </div>
          <div className="col-md-6">
            <div className="about-container">
              <div className="section-title">
                <div className="title-border">
                  <h1>{props.aboutArea.heading1} <span>{props.aboutArea.heading2}</span></h1>
                </div>
              </div>
              <div className="about-text">
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

const ToursPopular = (props) => {
  return (
    <div className="best-sell-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <div className="title-border">
                <h1>{props.toursArea.heading1} <span>{props.toursArea.heading2}</span></h1>
              </div>
              <p>{props.toursArea.introduction}</p>
            </div>
          </div>
        </div>
        {props.toursArea.section.map((section, index) =>
          <ToursSection key={index} sectionDetails={section} toursObject={props.toursObject}></ToursSection>
        )}
      </div>
    </div>
  )
}
const ToursSection = (props) => {
  const tours = props.sectionDetails.tours
  return (
    <div className="row">
      <div className="section-title text-center">
        <h2>{props.sectionDetails.heading1} <span>{props.sectionDetails.heading2}</span></h2>
      </div>
      {tours.map((tour, index) => {
        return <Tour key={index} tourDetails={props.toursObject[tour.tour.trim().toLowerCase()]} />
      })}
    </div>
  )
}
const Tour = (props) => {
  if (!props.tourDetails) {
    return null
  }
  const tourSlug = props.tourDetails.fields.slug;
  const tourDetails = props.tourDetails.frontmatter;
  let imageFluid = '';
  let imageAlt = '';
  if (tourDetails.imagethumbnail) {
    imageFluid = tourDetails.imagethumbnail.image.childImageSharp.fluid;
    imageAlt = tourDetails.imagethumbnail.alt;
  }
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="single-adventure">
        <Link to={tourSlug}><Img fluid={imageFluid} alt={imageAlt} /></Link>
        <div className="adventure-text effect-bottom">
          <div className="transparent-overlay">
            <h4><Link to={tourSlug}>{tourDetails.title} | <span>{tourDetails.destination}</span></Link></h4>
            <span className="trip-time"><i className="fa fa-clock-o"></i>{tourDetails.duration}</span>
            <span className="trip-level"><i className="fa fa-send-o"></i>{tourDetails.level}</span>
            <p>{tourDetails.description.substring(0, 230) + '...'}</p>
          </div>
          <div className="adventure-price-link">
            <span className="trip-person">From</span>
            <span className="trip-person"><span>{tourDetails.price}</span></span>
            <span className="trip-person">per person</span>
            <span className="trip-price">&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const BlogArea = (props) => {
  return (
    <div>
      {props.blogSwitch ?
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
        :
        null}
    </div>
  )
}


export default function index({ data }) {
  const { frontmatter } = data.homePageQuery
  const { hometours } = data.homePageQuery.fields
  const { blogswitch } = data.blogAreaQuery.childMarkdownRemark.frontmatter
  const toursObject = hometours.reduce((obj, tour) => {
    obj[tour.frontmatter.title.trim().toLowerCase()] = tour
    return obj;
  }, {});
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wild Coast Walks</title>
      </Helmet>
      <MyContext.Consumer>
        {({ data, set }) => {
          return (
            <div>
              {data.loadSpinner ? <Spinner /> : null}
              <SliderArea
                slider={frontmatter.slider}
                setSpinner={set}
              />
              <div>
                <AboutArea
                  aboutArea={frontmatter.aboutarea}
                />
                <ToursPopular
                  toursObject={toursObject}
                  toursArea={frontmatter.toursarea}
                />
                <BlogArea
                  blogArea={frontmatter.blogarea}
                  blogswitch={blogswitch}
                />
              </div>
            </div>
          )
        }}
      </MyContext.Consumer>
    </div>
  )
}

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    homePageQuery: markdownRemark(id: { eq: $id }) {
      fields {
        hometours {
          fields {
            slug
          }
          frontmatter {
            title
            destination
            activity
            duration
            price
            description
            imagethumbnail {
              image {
                childImageSharp {
                  fluid(maxWidth: 370) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
        }
      }
      frontmatter {
        slider {
          heading1
          heading2
          subheading1
          subheading2
          image {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1600) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        aboutarea {
          heading1
          heading2
          blur
          image {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 786) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        toursarea {
          heading1
          heading2
          introduction
          section {
            heading1
            heading2
            tours {
              tour
            }
          }
        }
        blogarea {
          blur
          heading1
          heading2
          switch
        }
      }
    }
    blogAreaQuery: file (relativePath : {eq: "config.md"}) {
      childMarkdownRemark {
          frontmatter {
              blogswitch
          }
      }
    }
  }
`