import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import contact_2 from '../assets/img/icon/contact-2.png'
import contact_2_hover from '../assets/img/icon/contact-2-hover.png'
import contact_4 from '../assets/img/icon/contact-4.png'
import contact_4_hover from '../assets/img/icon/contact-4-hover.png'

export default function ContactDetails() {
    return (
        <StaticQuery
            query={graphql`
            query ContactDetails {
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
                <div className="col-md-5">
                    <div className="contact-information-area section-padding">
                        <div className="row">
                            <div className="section-title text-center">
                                <div className="title-border">
                                    <h1>Contact <span>Information</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginBottom: '50px' }}>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="contact-info text-center">
                                        <div className="col-md-6">
                                            <div className="contact-image">
                                                <div className="contact-icon">
                                                    <div className="icon-table-cell">
                                                        <img className="primary-img" src={contact_2} alt="" />
                                                        <img className="secondary-img" src={contact_2_hover} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-text">
                                                <h4>Phone</h4>
                                                <p>{data.file.childMarkdownRemark.frontmatter.contact_details.phone}</p>
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
                                                        <img className="primary-img" src={contact_4} alt="" />
                                                        <img className="secondary-img" src={contact_4_hover} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-text">
                                                <h4>Email</h4>
                                                <p>{data.file.childMarkdownRemark.frontmatter.contact_details.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        />
    )
}
