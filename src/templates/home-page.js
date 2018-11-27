import React from 'react'
import MyContext, { ContextProviderComponent } from "../components/Context"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import BlogArea from "../components/BlogArea";
import Spinner from '../components/Spinner'
import SliderArea from "../components/SliderArea";
import AboutArea from "../components/AboutArea";
import ToursPopular from "../components/ToursPopular";


export default function index({ data }) {
  const { frontmatter } = data.markdownRemark
  const { hometours } = data.markdownRemark.fields
  const toursObject = hometours.reduce((obj, tour) => {
    obj[tour.frontmatter.title.trim().toLowerCase()] = tour
    return obj;
  }, {});

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wild Coast Walks</title>
      </Helmet>

      <ContextProviderComponent>
        <MyContext.Consumer>
          {({ data }) => {
            return data.loadSpinner ? <Spinner /> : null
          }}
        </MyContext.Consumer>

        <SliderArea
          slider={frontmatter.slider}
        />
        <MyContext.Consumer>
          {({ data }) => {
            return data.loadSpinner ? null :
              <div>
                <AboutArea
                  aboutArea={frontmatter.aboutarea}
                />
                <ToursPopular
                  toursObject={toursObject}
                  toursArea={frontmatter.toursarea}
                />
                <BlogArea
                  blogArea={frontmatter.blogarea}
                />
              </div>
          }}
        </MyContext.Consumer>
      </ContextProviderComponent>
    </div>
  )
}

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        hometours {
          fields {
            slug
          }
          frontmatter {
            title
            destination
            activity
            duration
            price
            description
            imagethumbnail {
              image
              alt
            }
          }
        }
      }
      frontmatter {
        slider {
          heading1
          heading2
          subheading1
          subheading2
          image {
            alt
            image
          }
        }
        aboutarea {
          heading1
          heading2
          blur
          image {
            alt
            image
          }
        }
        toursarea {
          heading1
          heading2
          introduction
          section {
            heading1
            heading2
            tours {
              tour
            }
          }
        }
        blogarea {
          blur
          heading1
          heading2
          switch
        }
      }
      }
  }
`