import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Banner from "../components/Banner";
import ContactDetails from "../components/ContactDetails";

import '../assets/css/contact.css'

const ContactForm = (props) => {
    return (
        <div className="col-md-7" style={{ backgroundColor: '#ffffff' }}>
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
    )
}

export default ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact us - Wild Coast Walks</title>
            </Helmet>

            <Banner
                extraClass="contact-banner"
                title1="Contact"
                title2="US"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum."
                breadcrumb="Contact us"
                imageBanner={frontmatter.imagebanner}
            />

            <div className="container">
                <div className="row">
                    <ContactForm />
                    <ContactDetails />
                </div>
            </div>
        </div >
    )
}

export const contactPageQuery = graphql`
  query ContactPage ($id: String!) {
    markdownRemark(id: { eq: $id }) {
        frontmatter {
            imagebanner {
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
`