import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import '../assets/css/footerWidgetArea.css'
import footerStyles from '../assets/css/footerWidgetArea.module.css'

import FooterContactDetails from './FooterContactDetails'

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
                return (
                    <div className="footer-widget-area"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            backgroundImage: `url(${data.file.childMarkdownRemark.frontmatter.image.image})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundAttachment: 'scroll',
                            backgroundPosition: 'center top',
                            backgroundSize: 'cover'
                        }}>
                        <div className="container">
                            <div className="row">
                                <FooterContactDetails />
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
