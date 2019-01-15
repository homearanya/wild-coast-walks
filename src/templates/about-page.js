import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import SEO from "../components/SEO/SEO";

import "../assets/css/about.css";

const AboutAdventures = props => {
  return (
    <div className="about-adventures section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-title text-center">
              <div className="title-border">
                <h1>
                  About <span>SA Adventure Trails</span>
                </h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pharetra sit amet aliquam id diam maecenas. Dui accumsan sit
                amet nulla facilisi morbi. Vel quam elementum pulvinar etiam.
                Iaculis urna id volutpat lacus laoreet. Nisl purus in mollis
                nunc sed id semper risus in. Arcu non sodales neque sodales ut
                etiam sit amet nisl. Pharetra magna ac placerat vestibulum
                lectus mauris ultrices. Feugiat nibh sed pulvinar proin gravida
                hendrerit lectus. Purus sit amet luctus venenatis. Dictum non
                consectetur a erat. Vel risus commodo viverra maecenas accumsan.
                Scelerisque purus semper eget duis at tellus at. Urna duis
                convallis convallis tellus id interdum. Feugiat scelerisque
                varius morbi enim nunc faucibus a pellentesque sit. Nibh nisl
                condimentum id venenatis a condimentum. Nunc sed id semper
                risus. Dolor sit amet consectetur adipiscing elit ut aliquam.
                Potenti nullam ac tortor vitae purus faucibus ornare suspendisse
                sed. Nec ultrices dui sapien eget mi.
              </p>
            </div>
            {/* <a href="#" className="button-one">Buy Now</a> */}
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
  );
};

const DestinationsArea = props => {
  return (
    <div className="destinations-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <div className="title-border">
                <h1>
                  {props.heading1} <span>{props.heading2}</span>
                </h1>
              </div>
              <p>{props.blurb}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="destinations-carousel">
            {props.destinations.map((destination, index) => (
              <Destination key={index} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Destination = props => {
  return (
    <div className="col-md-6">
      <div className="single-destinations">
        <div className="destinations-image">
          <Img
            fluid={props.destination.image.image.childImageSharp.fluid}
            alt={props.destination.image.alt}
          />
        </div>
        <div className="destinations-text">
          <h4>
            {props.destination.heading1}{" "}
            <span>{props.destination.heading2}</span>
          </h4>
          {props.destination.content.paragraph.map((paragraph, index) => (
            <p key={index}>{paragraph.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const AssociatesArea = props => {
  return (
    <div className="associate-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <div className="title-border">
                <h1>
                  {props.heading1} <span>{props.heading2}</span>
                </h1>
              </div>
              <p>{props.blurb}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="associate-carousel">
            {props.partners.map((partner, index) => (
              <Associate key={index} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Associate = props => {
  return (
    <div className="col-md-6">
      <div className="single-associate">
        <div className="row">
          <div className="col-md-3 col-sm-4">
            <div className="associate-image">
              <Img
                fluid={props.partner.image.image.childImageSharp.fluid}
                alt={props.partner.image.alt}
              />
            </div>
          </div>
          <div className="col-md-9 col-sm-8 margin-left">
            <div className="associate-text">
              <h2>
                {props.partner.heading1} <span>{props.partner.heading2}</span>
              </h2>
              {props.partner.content.paragraph.map((paragraph, index) => (
                <p key={index}>{paragraph.text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ({ data }) => {
  const { fields, frontmatter } = data.AboutPageQuery;
  const pageMeta = {
    title: `About Us . Slackpacking, Walks & Cycle Tours`,
    description: `SA Adventure Trails is a marketing association between Paul Colvin of Wild Coast Walks and Julia Colvin of Spekboom Tours.`,
    slug: fields.slug,
    datePublished: false
  };
  return (
    <Layout>
      <SEO pageData={pageMeta} />
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
    </Layout>
  );
};

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    AboutPageQuery: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        banner {
          blurb
          imagebanner {
            image {
              childImageSharp {
                fluid(maxWidth: 1600, maxHeight: 750) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            alt
          }
        }
        destinationsarea {
          heading1
          heading2
          introduction
          destination {
            image {
              image {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
            heading1
            heading2
            content {
              paragraph {
                text
              }
            }
          }
        }
        partnersarea {
          heading1
          heading2
          introduction
          partner {
            image {
              image {
                childImageSharp {
                  fluid(maxWidth: 270) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
            heading1
            heading2
            content {
              paragraph {
                text
              }
            }
          }
        }
      }
    }
  }
`;
