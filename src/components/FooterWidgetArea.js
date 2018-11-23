import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import '../assets/css/footerWidgetArea.css'
import footerStyles from '../assets/css/footerWidgetArea.module.css'

const ContactDetails = (props) => {
    return (
        <StaticQuery
            query={graphql`
                query FooterQuery {
                    file (relativePath : {eq: "contact.md"}) {
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
            render={data => (
                <div className="col-md-4 col-sm-12">
                    <div className="single-footer-widget contact-text-info">
                        <h4>Contact Us</h4>
                        <div className="footer-widget-list">
                            <ul>
                                <li className="icon envelope">{data.file.childMarkdownRemark.frontmatter.contact_details.email}</li>
                                <li className="icon phone">{data.file.childMarkdownRemark.frontmatter.contact_details.phone}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        />
    )
}

const Newsletter = (props) => {
    return (
        <div className="col-md-8 col-sm-12">
            <div className="section-title text-center">
                <div className="title-border">
                    <h1 className="text-white">Subscribe for <span>Newsletter</span></h1>
                </div>
                <p className="text-white">Join our community of over 300,000 global readers who receive emails filled with news,<br /> promotions, and other good stuff from G Adventures.</p>
            </div>
            <form action="#" method="post" id="newsletter">
                <div className="newsletter-content">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-1 col-xs-12">
                            <input type="text" name="email" placeholder="Enter your email address ......" />
                        </div>
                        <div className="col-sm-3 col-xs-12">
                            <button type="submit" className="button"><span>Subscribe</span></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default function FooterWidgetArea() {
    return (
        <StaticQuery
            query={graphql`
            query FooterQuery {
                file (relativePath : {eq: "footer.md"}) {
                    childMarkdownRemark {
                      frontmatter {
                        image {
                          image
                          alt
                        }
                      }
                    }
                }
            }
        `}
            render={data => {
                console.log('footer background image', data.file.childMarkdownRemark.frontmatter.Image.Image)
                return (
                    <div className="footer-widget-area"
                        style={{ backgroundImage: `url($(data.file.childMarkdownRemark.frontmatter.Image.Image))` }}>
                        <div className="container">
                            <div className="row">
                                <ContactDetails />
                                <Newsletter />
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className={"footer-link " + footerStyles.footerSocial}>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            }
        />

    )
}
