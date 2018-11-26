const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// variables to collect information for homepage/tours & tourmenu/tours relation
let homeTourTitles = [];
let homeTourIds = [];
let menuTourTitles = [];
let menuTourIds = [];
let toursObject = new Object();
let homeNodeId, tourMenuNodeId;

exports.createPages = ({ actions, graphql, getNode }) => {
    const { createPage, createNodeField } = actions
    return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fileAbsolutePath
            id
            fields {
                slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
            if (result.errors) {
                result.errors.forEach(e => console.error(e.toString()))
                return Promise.reject(result.errors)
            }
            // create pages
            const posts = result.data.allMarkdownRemark.edges

            posts.forEach(edge => {
                const id = edge.node.id
                const fileAbsolutePath = edge.node.fileAbsolutePath
                if (fileAbsolutePath.includes('/src/pages/')) {
                    createPage({
                        path: edge.node.fields.slug,
                        // tags: edge.node.frontmatter.tags,
                        component: path.resolve(
                            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
                        ),
                        // additional data can be passed via context
                        context: {
                            id,
                        },
                    })
                }
            })

            // create node fields for homepage/tours & tourmenu/tours relations
            homeTourTitles.forEach(tour => {
                if (toursObject[tour]) {
                    homeTourIds.push(toursObject[tour])
                }
            })

            if (homeTourIds.length > 0) {
                createNodeField({
                    node: getNode(homeNodeId),
                    name: `tours`,
                    value: homeTourIds,
                })
            }

            menuTourTitles.forEach(tour => {
                if (toursObject[tour]) {
                    menuTourIds.push(toursObject[tour])
                }
            })

            if (menuTourIds.length > 0) {
                createNodeField({
                    node: getNode(tourMenuNodeId),
                    name: `tours`,
                    value: menuTourIds,
                })
            }
        })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })

        // collect nodes for homepage/tours & tourmenu/tours relation
        if (node.frontmatter.templateKey &&
            node.frontmatter.templateKey.includes('home-page')) {
            homeNodeId = node.id;
            node.frontmatter.toursarea.section.forEach(section =>
                section.tours.forEach(tour => homeTourTitles.push(tour.tour.trim().toLowerCase()))
            )
        } else if (node.frontmatter.templateKey &&
            node.frontmatter.templateKey.includes('tour-page')) {
            toursObject[node.frontmatter.title.trim().toLowerCase()] = node.id;
        } else if (node.fileAbsolutePath &&
            node.fileAbsolutePath.includes('/src/general/tour-menu.md')) {
            tourMenuNodeId = node.id;
            node.frontmatter.section.forEach(section =>
                section.tours.forEach(tour => menuTourTitles.push(tour.tour.trim().toLowerCase()))
            )
        }
    }
}