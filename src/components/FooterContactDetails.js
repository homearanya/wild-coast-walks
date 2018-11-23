import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const FooterContactDetails = (props) => {
    return (
        <StaticQuery
            query={graphql`
                query FooterContactQuery {
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

export default FooterContactDetails
