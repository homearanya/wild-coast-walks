const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

// variables to collect information for homepage/tours & tourmenu/tours relation
let homeTourTitles = [];
let homeTourIds = [];
let menuTourTitles = [];
let menuTourIds = [];
let toursObject = new Object();
let eventsObject = new Object();
let homeNodeId, tourMenuNodeId;

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
      // }
    });

    // create node fields for homepage/tours & tourmenu/tours relations
    homeTourTitles.forEach(tour => {
      if (toursObject[tour]) {
        homeTourIds.push(toursObject[tour]);
      }
    });

    if (homeTourIds.length > 0) {
      createNodeField({
        node: getNode(homeNodeId),
        name: `hometours`,
        value: homeTourIds
      });
    }

    menuTourTitles.forEach(tour => {
      if (toursObject[tour]) {
        menuTourIds.push(toursObject[tour]);
      }
    });

    if (menuTourIds.length > 0) {
      createNodeField({
        node: getNode(tourMenuNodeId),
        name: `menutours`,
        value: menuTourIds
      });
    }

    // create tour/events relationships
    for (let key in toursObject) {
      if (toursObject.hasOwnProperty(key) && eventsObject[key]) {
        if (eventsObject[key].length > 0) {
          createNodeField({
            node: getNode(toursObject[key]),
            name: `tourevents`,
            value: eventsObject[key]
          });
          eventsObject[key].forEach(eventNodeId => {
            createNodeField({
              node: getNode(eventNodeId),
              name: `eventtour`,
              value: toursObject[key]
            });
          });
        }
      }
    }

    // console.log(homeTourIds)
    // console.log(menuTourTitles)
    // console.log(menuTourIds)
    // console.log(toursObject);
    // console.log(eventsObject);
    // console.log(homeNodeId)
    // console.log(tourMenuNodeId)
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node); // convert image paths for gatsby images
  const { createNodeField } = actions;
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
      node.frontmatter.templateKey.includes("home-page")
    ) {
      homeNodeId = node.id;
      node.frontmatter.toursarea.section.forEach(section =>
        section.tours.forEach(tour =>
          homeTourTitles.push(tour.tour.trim().toLowerCase())
        )
      );
    } else if (
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
    } else if (
      node.fileAbsolutePath &&
      node.fileAbsolutePath.includes("/src/general/tour-menu.md")
    ) {
      tourMenuNodeId = node.id;
      node.frontmatter.section.forEach(section =>
        section.tours.forEach(tour =>
          menuTourTitles.push(tour.tour.trim().toLowerCase())
        )
      );
    }
  }
};
