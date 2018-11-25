const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

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
        })
}

// we use sourceNodes instead of onCreateNode because
//  at this time plugins will have created all nodes already

exports.sourceNodes = ({ actions, getNodes, getNode }) => {
    const { createNodeField } = actions
    let homeToursTitles = [];
    let homeToursIds = [];
    let tourItemTitles = [];
    let tourItemIds = [];
    let toursObject = new Object();
    let homeNodeId, mainMenuNodeId;

    // iterate thorugh all markdown nodes to link tours to home page and tours menu
    getNodes()
        .filter(node => node.internal.type === `MarkdownRemark`)
        .forEach(node => {
            console.log('sourceNodes', node.fileAbsolutePath)
            if (node.frontmatter.templateKey &&
                node.frontmatter.templateKey.includes('home-page')) {
                homeNodeId = node.id;
                const toursArea = node.frontmatter.toursarea;
                Object.keys(toursArea)
                    .filter(field => field.includes('block'))
                    .forEach(block => {
                        Object.keys(toursArea[block].tours)
                            .forEach(tour => homeToursTitles.push(toursArea[block].tours[tour]))
                    })
            } else if (node.frontmatter.templateKey &&
                node.frontmatter.templateKey.includes('tour-page')) {
                toursObject[node.frontmatter.title] = node.id;
            } else if (node.fileAbsolutePath &&
                node.fileAbsolutePath.includes('/src/general/tourMenu.md')) {
                mainMenuNodeId = node.id;
                // console.log('mainmenunodeId', mainMenuNodeId)
                // console.log('mainmenunode - frontmatter', node.frontmatter)
                // const toursItem = node.frontmatter.toursitem;
                // console.log('toursItem', toursItem)
                // Object.keys(toursItem)
                //     .filter(field => field.includes('block'))
                //     .forEach(block => {
                //         Object.keys(toursItem[block].tours)
                //             .forEach(tour => tourItemTitles.push(toursItem[block].tours[tour]))
                //     })
            }
        })

    homeToursTitles.forEach(tour => {
        if (toursObject[tour]) {
            homeToursIds.push(toursObject[tour])
        }
    })

    createNodeField({
        node: getNode(homeNodeId),
        name: `tours`,
        value: homeToursIds,
    })

    // tourItemTitles.forEach(tour => {
    //     if (toursObject[tour]) {
    //         tourItemIds.push(toursObject[tour])
    //     }
    // })
    // console.log('mainMenuNodeId', mainMenuNodeId)
    // console.log('tourItemIds', tourItemIds)
    // createNodeField({
    //     node: getNode(mainMenuNodeId),
    //     name: `tours`,
    //     value: tourItemIds,
    // })


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
    }
}