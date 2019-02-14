import React from "react";
import { StaticQuery, graphql } from "gatsby";

import NewsletterForm from "./NewsletterForm";
import ContactDetails from "./ContactDetails";

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
                        ...GatsbyImageSharpFluid
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
                  phone {
                    phonedisplay
                    phonenumber
                  }
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
        // const {
        //   contact_details
        // } = data.ContactDetails.childMarkdownRemark.frontmatter;
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
                {/* <FooterContactDetails contactDetails={contact_details} /> */}
                <ContactDetails />
                <NewsletterForm newsletterArea={newsletterarea} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
