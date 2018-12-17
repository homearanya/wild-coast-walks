import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";

import "../assets/css/contact.css";

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact us - Wild Coast Walks</title>
      </Helmet>

      <Banner
        extraClass="contact-banner"
        title1="Contact"
        title2="US"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum."
        breadcrumb="Contact us"
        imageBanner={frontmatter.imagebanner}
      />

      <div className="container">
        <div className="row">
          <div className="col-md-7" style={{ backgroundColor: "#ffffff" }}>
            <div className="contact-form">
              <div className="contact-us-form-wrapper">
                <div className="contact-us-form section-padding">
                  <div className="row">
                    <div className="section-title text-center">
                      <div className="title-border">
                        <h1>
                          Contact <span>US</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        imagebanner {
          image {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          alt
        }
      }
    }
  }
`;
