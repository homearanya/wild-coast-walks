import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Event from "../components/Event";

const UpcomingEvents = () => {
  return (
    <StaticQuery
      query={graphql`
        query UpcomingEventsQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "upcoming-events" } } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  date
                  tour {
                    fields {
                      slug
                    }
                    frontmatter {
                      tour_id
                      destination
                      activity
                      duration
                      price
                      shortdescription
                      imagethumbnail {
                        image {
                          childImageSharp {
                            fluid(maxWidth: 370, maxHeight: 294) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                        alt
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        let today = new Date();
        const { edges: upcomingEvents } = data.allMarkdownRemark;
        return (
          <div className="tour-calendar adventures-grid section-padding list">
            <div className="container">
              <div className="row">
                <div>
                  {upcomingEvents
                    .filter(
                      event => new Date(event.node.frontmatter.date) > today
                    )
                    .map(event => {
                      const { frontmatter, id } = event.node;
                      return <Event key={id} eventInfo={frontmatter} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default UpcomingEvents;
