const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

let toursObject = new Object();
let eventsObject = new Object();

exports.createPages = ({ actions, graphql, getNode }) => {
  const { createPage, createNodeField } = actions;
  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/src/pages/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              destination
              activity
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }
    // create pages
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        // tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      });
    });
    // create tour/events relationships
    for (let key in toursObject) {
      if (toursObject.hasOwnProperty(key) && eventsObject[key]) {
        if (eventsObject[key].length > 0) {
          createNodeField({
            name: `tourevents`,
            node: getNode(toursObject[key]),
            value: eventsObject[key]
          });
        }
      }
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    let value = createFilePath({ node, getNode });
    if (value.includes("/tours/")) {
      value = `/tours/${node.frontmatter.destination
        .replace(/\s+/g, "-")
        .toLowerCase()}/${node.frontmatter.activity
        .replace(/\s+/g, "-")
        .toLowerCase()}${value.substring(6)}`;
    }
    createNodeField({
      name: `slug`,
      node,
      value
    });

    // collect nodes for homepage/tours & tourmenu/tours relation
    if (
      node.frontmatter.templateKey &&
      node.frontmatter.templateKey.includes("tour-page")
    ) {
      toursObject[node.frontmatter.tour_id.trim().toLowerCase()] = node.id;
    } else if (
      node.frontmatter.templateKey &&
      node.frontmatter.templateKey.includes("upcoming-events")
    ) {
      if (eventsObject[node.frontmatter.tour.trim().toLowerCase()]) {
        eventsObject[node.frontmatter.tour.trim().toLowerCase()].push(node.id);
      } else {
        eventsObject[node.frontmatter.tour.trim().toLowerCase()] = [];
        eventsObject[node.frontmatter.tour.trim().toLowerCase()].push(node.id);
      }
    }
  }
};
