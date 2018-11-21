import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Banner from "../components/Banner";

import '../assets/css/contact.css'

import contact_2 from '../assets/img/icon/contact-2.png'
import contact_2_hover from '../assets/img/icon/contact-2-hover.png'
import contact_4 from '../assets/img/icon/contact-4.png'
import contact_4_hover from '../assets/img/icon/contact-4-hover.png'


export default ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact us - Wild Coast Walks</title>
            </Helmet>

            <Banner
                extraClass="contact-banner grid-two"
                title1="Contact"
                title2="US"
                text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui"
                text2="id, convallis iaculis eros. Praesent porta lacinia elementum."
                breadcrumb="Contact us"
            />

            <div className="container">
                <div className="row">
                    <div className="col-md-7" style={{ backgroundColor: '#edecec' }}>
                        <div className="contact-form">
                            <div className="contact-us-form-wrapper">
                                <div className="contact-us-form section-padding">
                                    <div className="row">
                                        <div className="section-title text-center">
                                            <div className="title-border">
                                                <h1>Contact <span>US</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <form action="mail.php" method="post">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input name="f_name" type="text" className="form-box" placeholder="First name" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input name="l_name" type="text" className="form-box" placeholder="Last name" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input name="email" type="email" className="form-box" placeholder="Email" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input name="number" type="text" className="form-box" placeholder="Phone number" />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <textarea name="message" className="yourmessage" placeholder="Your message"></textarea>
                                                        <input type="submit" value="Send Message" className="submit-button" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                            <div class="col-md-6">
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
                                                    <p>{frontmatter.contact_details.phone}</p>
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
                                                    <p>{frontmatter.contact_details.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
	markdownRemark (fields: {slug : {eq: "/config-contact/"}}) {
        frontmatter {
          contact_details {
            email
            phone
          }
        }
    }
  }
`