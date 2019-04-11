import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import dateformat from "dateformat";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import SEO from "../components/SEO/SEO";
import BookButton from "../components/BookButton";

import "../assets/css/tourCalendar.css";
// import eventImage from "../assets/img/adventure-list/22.jpg";
// import icon_level from "../assets/img/icon/level.png";
// import icon_35 from "../assets/img/icon/35.png";
// import icon_36 from "../assets/img/icon/36.png";
// import icon_37 from "../assets/img/icon/37.png";
// import icon_38 from "../assets/img/icon/38.png";
// import icon_39 from "../assets/img/icon/39.png";
// import icon_40 from "../assets/img/icon/40.png";

const Filter = props => {
  return (
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
                <li>
                  <a href="shop-grid-no-sidebar.html" className="grid-view">
                    Shop Grid No Sidebar
                  </a>
                </li>
                <li>
                  <a href="shop-grid-with-sidebar.html" className="list-view">
                    Shop Grid With Sidebar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const Event = props => {
  let imageFluid = "";
  let imageAlt = "";
  if (props.tourInfo.imagethumbnail) {
    imageFluid = props.tourInfo.imagethumbnail.image.childImageSharp.fluid;
    imageAlt = props.tourInfo.imagethumbnail.alt;
  }
  return (
    <div className="col-md-12">
      <div className="single-list-item">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="adventure-img">
              <Link to={props.tourSlug}>
                <Img fluid={imageFluid} alt={imageAlt} />
              </Link>
            </div>
          </div>
          <div className="col-md-8 col-sm-6 margin-left-list">
            <div className="adventure-list-container">
              <div className="adventure-list-image">
                <h2>
                  {dateformat(props.eventDate, "mmm")}
                  <br />
                  {dateformat(props.eventDate, "dd")}
                </h2>
                <ul>
                  <li>
                    <h3>{props.tourInfo.destination}</h3>
                  </li>
                  <li>
                    <h3>{props.tourInfo.activity}</h3>
                  </li>
                </ul>
              </div>
              <div className="adventure-list-text">
                <h1>
                  <a href="#">{`${props.tourInfo.tour_id} / ${
                    props.tourInfo.duration
                  } Trip`}</a>
                </h1>
                <h2>
                  <span className="persons">From </span>
                  {props.tourInfo.price}
                  {/* <span className="light">/</span> */}
                  <span className="persons"> per person</span>
                </h2>
                <p>
                  {props.tourInfo.shortdescription.length > 215
                    ? props.tourInfo.shortdescription.substring(0, 212) + "..."
                    : props.tourInfo.shortdescription}
                </p>
                <div className="list-buttons">
                  <Link to={props.tourSlug} className="button-one button-blue">
                    More Info
                  </Link>
                  <div className="trip-booking-info">
                    <BookButton
                      text="Book this trip"
                      tour={props.tourInfo.tour_id}
                      date={dateformat(props.eventDate, "dd mmm yyyy")}
                    />
                  </div>
                  {/* <div className="list-rating">
                    <i className="fa fa-star color" />
                    <i className="fa fa-star color" />
                    <i className="fa fa-star color" />
                    <i className="fa fa-star color" />
                    <i className="fa fa-star-o" />
                  </div> */}
                  {/* <div className="adventure-list-link">
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
        </div>
      </div>
    </div>
  );
};
export default ({ data }) => {
  const {
    blurb: upcomingEventsBlurb
  } = data.UpcomingEventsQuery.childMarkdownRemark.frontmatter;
  const { fields, frontmatter } = data.calendarQuery;
  const enableCalendar = data.switch.frontmatter.calendarswitch;

  const upcomingEvents = data.EventsQuery.edges;
  // filter out expired events
  let currentUpcomingEvents = [];
  let today = new Date();
  upcomingEvents.forEach(event => {
    let eventDate = new Date(event.node.frontmatter.date);
    if (eventDate > today) {
      currentUpcomingEvents.push({
        eventDate: event.node.frontmatter.date,
        tourSlug: event.node.fields.eventtour.fields.slug,
        tourInfo: event.node.fields.eventtour.frontmatter
      });
    }
  });
  const pageMeta = {
    title: `Tour Calendar · Slackpacking & Cycle Tours`,
    description: `Find your tour. If the dates don't suit you we can still organise it for you`,
    slug: fields.slug,
    datePublished: false
  };
  return (
    <Layout>
      <SEO pageData={pageMeta} />
      <Banner
        extraClass="grid"
        title1="Tour"
        title2="Calendar"
        text={upcomingEventsBlurb}
        breadcrumb="Calendar"
        imageBanner={frontmatter.imagebanner}
      />

      <div className="adventures-grid section-padding list">
        <div className="container">
          {/* <Filter />
                    <div className="clearfix"></div> */}
          <div className="row">
            {enableCalendar ? (
              <div>
                {currentUpcomingEvents.map((event, index) => (
                  <Event
                    key={index}
                    eventDate={event.eventDate}
                    tourSlug={event.tourSlug}
                    tourInfo={event.tourInfo}
                  />
                ))}
                {/* <div className="pagination-content">
                  <div className="pagination-button">
                    <ul className="pagination">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-left" />
                        </a>
                      </li>
                      <li className="current">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            ) : (
              <p>Coming soon!</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const CalendarPageQuery = graphql`
  query CalendarPage($id: String!) {
    switch: markdownRemark(fields: { slug: { eq: "/config/" } }) {
      frontmatter {
        calendarswitch
      }
    }
    calendarQuery: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        imagebanner {
          image {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 750) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
    UpcomingEventsQuery: file(relativePath: { eq: "upcoming-events.md" }) {
      childMarkdownRemark {
        frontmatter {
          blurb
        }
      }
    }
    EventsQuery: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "upcoming-events" } } }
    ) {
      edges {
        node {
          fields {
            eventtour {
              fields {
                slug
              }
              frontmatter {
                tour_id
                destination
                activity
                duration
                price
                shortdescription
                imagethumbnail {
                  image {
                    childImageSharp {
                      fluid(maxWidth: 370, maxHeight: 294) {
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
            date
          }
        }
      }
    }
  }
`;
