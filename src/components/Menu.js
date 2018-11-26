import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import '../assets/css/meanmenu.css'
import '../assets/css/menu.css'

import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

export default function Menu() {
    return (
        <StaticQuery
            query={graphql`
                query TourMenuQuery {
                    markdownRemark (fields : {slug : {eq : "/tour-menu/"}}) {
                        fields {
                            tours {
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                }
                            }
                        }
                        frontmatter {
                            section {
                                heading1
                                heading2
                                image {
                                    image
                                    alt
                                }
                                tours {
                                    tour
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const { section } = data.markdownRemark.frontmatter
                const { tours } = data.markdownRemark.fields
                console.log('tours', tours)
                const toursObject = tours.reduce((obj, tour) => {
                    obj[tour.frontmatter.title.trim().toLowerCase()] = tour.fields.slug
                    return obj;
                }, {});
                section.forEach(section => {
                    section.tours.forEach((tour, index) => {
                        section.tours[index]['slug'] = toursObject[tour.tour.trim().toLowerCase()]
                    });
                })
                return <div>
                    <MenuDesktop sections={section} />
                    <MenuMobile sections={section} />
                </div>
            }}
        />
    )
}
