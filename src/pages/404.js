import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";

import "../assets/css/404.css";

export default ({ data }) => {
  const { siteMetadata } = data.siteMetaDataQuery;
  const { backgroundimage } = data.NotFoundQuery.frontmatter;
  console.log("backgroundimage", backgroundimage);
  const postMeta = {
    title: `Page Not Found - ${siteMetadata.title}`,
    description: `Page not found. Go back to home page`,
    slug: "/404/",
    datePublished: false
  };
  return (
    <Layout>
      <SEO postData={postMeta} />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div
        className="error-area"
        style={{
          backgroundColor: "#edecec",
          backgroundImage: `url(${
            backgroundimage.image.childImageSharp.fluid.src
          })`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          backgroundPosition: "right top",
          backgroundSize: "50% 100%"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="error-text-container">
                <h1>Oops...</h1>
                <h2>Page Not Found!</h2>
                <p>
                  Sorry the Page Could not be Found here.
                  <br />
                  Try using the button below to go to main page
                  <br />
                  of the site
                </p>
                <Link to="/">Go Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const notFoundPageQuery = graphql`
  query NotFoundPage {
    NotFoundQuery: markdownRemark(fields: { slug: { eq: "/notfound/" } }) {
      frontmatter {
        backgroundimage {
          image {
            childImageSharp {
              fluid(maxWidth: 785) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
    siteMetaDataQuery: site {
      siteMetadata {
        title
      }
    }
  }
`;
