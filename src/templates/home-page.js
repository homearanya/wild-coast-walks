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
  const { tours } = data.markdownRemark.fields
  const toursObject = tours.reduce((obj, tour) => {
    obj[tour.frontmatter.title.trim()] = tour
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
          tours {
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
              slide1 {
                heading1
                heading2
                subheading1
                subheading2
                image {
                  image
                  alt
                }
              }
              slide2 {
                heading1
                heading2
                subheading1
                subheading2
                image {
                  image
                  alt
                }
              }      
            }
            aboutarea {
              heading2
              blur
              image {
                image
                alt
              }
            }
            toursarea {
              heading1
              heading2
              introduction
              block1 {
                heading1
                tours {
                  tour1
                  tour2
                  tour3
                }
              }
              block2 {
                heading1
                tours {
                  tour1
                  tour2
                  tour3
                }
              }
              block3 {
                heading1
                tours {
                  tour1
                  tour2
                  tour3
                }
              }
              block4 {
                heading1
                tours {
                  tour1
                  tour2
                  tour3
                }
              }
            }
            blogarea {
              switch
              heading1
              heading2
            }
        }
    }
  }
`