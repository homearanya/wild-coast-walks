import React from "react";
import { StaticQuery, graphql } from "gatsby";

import contact_2 from "../assets/img/icon/contact-2.png";
import contact_2_hover from "../assets/img/icon/contact-2-hover.png";
import contact_4 from "../assets/img/icon/contact-4.png";
import contact_4_hover from "../assets/img/icon/contact-4-hover.png";

import "../assets/css/contactDetails.css";

export default function ContactDetails() {
  return (
    <StaticQuery
      query={graphql`
        query ContactDetails {
          file(relativePath: { eq: "contact.md" }) {
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
        const { contact_details } = data.file.childMarkdownRemark.frontmatter;
        return (
          <div className="col-md-5">
            <div className="contact-details-area">
              <div className="contact-information-area section-padding">
                <div className="row">
                  <div className="section-title text-center">
                    <div className="title-border">
                      <h1>
                        Contact <span>Details</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: "50px" }}>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="contact-info text-center">
                        <div className="col-md-6">
                          <div className="contact-image">
                            <div className="contact-icon">
                              <div className="icon-table-cell">
                                <a
                                  href={`tel:${
                                    contact_details.phone.phonenumber
                                  }`}
                                >
                                  <img
                                    className="primary-img"
                                    src={contact_2}
                                    alt="phone number"
                                  />
                                  <img
                                    className="secondary-img"
                                    src={contact_2_hover}
                                    alt="phone number"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="contact-text">
                            <h4>Phone</h4>
                            <a
                              href={`tel:${contact_details.phone.phonenumber}`}
                            >
                              <p>{contact_details.phone.phonedisplay}</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="contact-info text-center">
                        <div className="col-md-6">
                          <div className="contact-image">
                            <div className="contact-icon">
                              <div className="icon-table-cell">
                                <a href={`mailto:${contact_details.email}`}>
                                  <img
                                    className="primary-img"
                                    src={contact_4}
                                    alt="email address"
                                  />
                                  <img
                                    className="secondary-img"
                                    src={contact_4_hover}
                                    alt="email address"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="contact-text">
                            <h4>Email</h4>
                            <a href={`mailto:${contact_details.email}`}>
                              <p>{contact_details.email}</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
