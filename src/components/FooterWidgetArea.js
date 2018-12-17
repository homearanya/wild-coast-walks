import React from "react";
import { StaticQuery, graphql } from "gatsby";

import NewsletterForm from "./NewsletterForm";

const FooterContactDetails = props => {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="single-footer-widget contact-text-info">
        <div className="section-title text-center">
          <div className="title-border">
            <h1 className="text-white">
              Contact <span>Us</span>
            </h1>
          </div>
        </div>
        <div className="footer-widget-list">
          <ul>
            <li className="icon envelope">{props.contactDetails.email}</li>
            <li className="icon phone">{props.contactDetails.phone}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function FooterWidgetArea() {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          FooterDetails: file(relativePath: { eq: "footer.md" }) {
            childMarkdownRemark {
              frontmatter {
                image {
                  image {
                    childImageSharp {
                      fluid(maxWidth: 1600) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                  alt
                }
                newsletterarea {
                  heading1
                  heading2
                  blurb
                }
              }
            }
          }
          ContactDetails: file(relativePath: { eq: "contact.md" }) {
            childMarkdownRemark {
              frontmatter {
                contact_details {
                  email
                  phone
                }
              }
            }
          }
        }
      `}
      render={data => {
        const {
          image: backgroundImage
        } = data.FooterDetails.childMarkdownRemark.frontmatter.image;
        const {
          contact_details
        } = data.ContactDetails.childMarkdownRemark.frontmatter;
        const {
          newsletterarea
        } = data.FooterDetails.childMarkdownRemark.frontmatter;
        return (
          <div
            className="footer-widget-area"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              backgroundImage: `url(${
                backgroundImage.childImageSharp.fluid.src
              })`,
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
              backgroundPosition: "center top",
              backgroundSize: "cover"
            }}
          >
            <div className="container">
              <div className="row">
                <FooterContactDetails contactDetails={contact_details} />
                <NewsletterForm newsletterArea={newsletterarea} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
