import React from "react";
import { StaticQuery, graphql } from "gatsby";

import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

export default function Menu(props) {
  return (
    <StaticQuery
      query={graphql`
        query MenuQuery {
          switches: markdownRemark(fields: { slug: { eq: "/config/" } }) {
            frontmatter {
              blogswitch
              calendarswitch
            }
          }
          LogoQuery: markdownRemark(fields: { slug: { eq: "/logo/" } }) {
            frontmatter {
              colorlogo {
                image {
                  childImageSharp {
                    fluid(maxWidth: 150) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
              whitelogo {
                image {
                  childImageSharp {
                    fluid(maxWidth: 150) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
            }
          }
          tourMenu: markdownRemark(fields: { slug: { eq: "/tour-menu/" } }) {
            fields {
              menutours {
                fields {
                  slug
                }
                frontmatter {
                  title
                  duration
                }
              }
            }
            frontmatter {
              section {
                heading1
                heading2
                image {
                  image {
                    childImageSharp {
                      fluid(maxWidth: 450) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
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
        const switches = data.switches.frontmatter;
        const { frontmatter: logos } = data.LogoQuery;
        const { section } = data.tourMenu.frontmatter;
        const { menutours } = data.tourMenu.fields;
        const toursObject = menutours.reduce((obj, tour) => {
          obj[tour.frontmatter.title.trim().toLowerCase()] = tour;
          return obj;
        }, {});
        section.forEach(section => {
          section.tours.forEach((tour, index) => {
            if (toursObject[tour.tour.trim().toLowerCase()]) {
              section.tours[index]["slug"] =
                toursObject[tour.tour.trim().toLowerCase()].fields.slug;
              section.tours[index]["duration"] =
                toursObject[
                  tour.tour.trim().toLowerCase()
                ].frontmatter.duration;
            } else {
              console.log("issue with tour:", tour.tour.trim().toLowerCase());
            }
          });
        });
        return (
          <div>
            <MenuDesktop
              sections={section}
              switches={switches}
              logos={logos}
              tourPage={props.tourPage}
            />
            <MenuMobile sections={section} switches={switches} />
          </div>
        );
      }}
    />
  );
}
