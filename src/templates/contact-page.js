import React, { Component } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";

import "../assets/css/contact.css";

export default class ContactPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { frontmatter } = this.props.data.markdownRemark;
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
          text={frontmatter.blurb}
          breadcrumb="Contact us"
          imageBanner={frontmatter.imagebanner}
        />

        <div className="container">
          <div className="row">
            <div className="col-md-7" style={{ backgroundColor: "#ffffff" }}>
              <div id="contact-form" className="contact-form">
                <div className="contact-us-form-wrapper">
                  <div className="contact-us-form section-padding">
                    <div className="row">
                      <div className="section-title text-center">
                        <div className="title-border">
                          <h1>
                            Contact <span>Form</span>
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12">
                        {this.props.location.state &&
                        this.props.location.state.subject ? (
                          <ContactForm
                            subject={this.props.location.state.subject}
                          />
                        ) : (
                          <ContactForm />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ContactDetails />
          </div>
        </div>
      </div>
    );
  }
}

// export default ({ data }) => {
//   const { frontmatter } = data.markdownRemark;
//   return (
//     <div>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Contact us - Wild Coast Walks</title>
//       </Helmet>

//       <Banner
//         extraClass="contact-banner"
//         title1="Contact"
//         title2="US"
//         text={frontmatter.blurb}
//         breadcrumb="Contact us"
//         imageBanner={frontmatter.imagebanner}
//       />

//       <div className="container">
//         <div className="row">
//           <div className="col-md-7" style={{ backgroundColor: "#ffffff" }}>
//             <div className="contact-form">
//               <div className="contact-us-form-wrapper">
//                 <div className="contact-us-form section-padding">
//                   <div className="row">
//                     <div className="section-title text-center">
//                       <div className="title-border">
//                         <h1>
//                           Contact <span>Form</span>
//                         </h1>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-xs-12">
//                       <ContactForm />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <ContactDetails />
//         </div>
//       </div>
//     </div>
//   );
// };

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        blurb
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
`;
