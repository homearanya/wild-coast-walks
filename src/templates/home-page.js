import React from 'react'
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import MyContext, { ContextProviderComponent } from "../components/Context"
import Spinner from '../components/Spinner'
import SliderArea from "../components/SliderArea";
import AboutArea from "../components/AboutArea";
import Products from "../components/Products";
import BlogArea from "../components/BlogArea";


export default function index({ data }) {
    const { frontmatter } = data.markdownRemark
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wild Coast Walks</title>
            </Helmet>

            <ContextProviderComponent>
                <MyContext.Consumer>
                    {({ data }) => {
                        return data.loadSpinner ? <Spinner /> : null;
                    }}
                </MyContext.Consumer>
                <SliderArea
                    slider={frontmatter.slider}
                />
                <AboutArea />
                <Products />
                <BlogArea />
            </ContextProviderComponent>
        </div>
    )
}

export const homePageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
      }
    }
  }
`