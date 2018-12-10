import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const FooterContactDetails = (props) => {
    return (
        <div className="col-md-4 col-sm-12">
            <div className="single-footer-widget contact-text-info">
                <h4>Contact Us</h4>
                <div className="footer-widget-list">
                    <ul>
                        <li className="icon envelope">{props.contactDetails.email}</li>
                        <li className="icon phone">{props.contactDetails.phone}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
const Newsletter = (props) => {
    return (
        <div className="newsletter-area">
            <div className="container">
                <div className="row">
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
                </div>
            </div>
        </div>
    )
}

export default function FooterWidgetArea() {
    return (
        <StaticQuery
            query={graphql`
            query FooterQuery {
                FooterBackgroundImage: file (relativePath : {eq: "footer.md"}) {
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
                      }
                    }
                }
                ContactDetails: file (relativePath : {eq: "contact.md"}) {
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
                const { image: backgroundImage } = data.FooterBackgroundImage.childMarkdownRemark.frontmatter.image
                const { contact_details } = data.ContactDetails.childMarkdownRemark.frontmatter
                return (
                    <div className="footer-widget-area"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            backgroundImage: `url(${backgroundImage.childImageSharp.fluid.src})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundAttachment: 'scroll',
                            backgroundPosition: 'center top',
                            backgroundSize: 'cover'
                        }}>
                        <div className="container">
                            <div className="row">
                                <FooterContactDetails contactDetails={contact_details} />
                                <Newsletter />
                            </div>
                        </div>
                    </div>
                )
            }
            }
        />

    )
}
