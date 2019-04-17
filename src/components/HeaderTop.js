import React from "react";
import { StaticQuery, graphql } from "gatsby";

import "../assets/css/headerTop.css";

export default function HeaderTop() {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          file(relativePath: { eq: "contact-details/contact.md" }) {
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
      render={data => (
        <div className="header-top hidden-xs">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="contact-details">
                  <div className="email-address">
                    <i className="fa fa-envelope" />
                    {
                      data.file.childMarkdownRemark.frontmatter.contact_details
                        .email
                    }
                  </div>
                  <div className="phone-number">
                    <i className="fa fa-phone-square" />
                    {
                      data.file.childMarkdownRemark.frontmatter.contact_details
                        .phone
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
}
