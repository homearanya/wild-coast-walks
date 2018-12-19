var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`
  }
};

module.exports = {
  siteMetadata: {
    title: "SA Adventure Trails",
    description: `
    SA Adventure Trails is a marketing association between Paul Colvin of Wild Coast Walks and Julia Colvin of Spekboom Tours. Together we offer the best selection of fully supported hiking and cycling tours in KwaZulu Natal and the Eastern Cape Wild Coast`,
    canonicalUrl: "https://www.trails.co.za",
    image: "https://www.trails.co.za/img/meander-hike-gallery_2.jpg",
    author: {
      name: "Carlos Gonzalez",
      minibio: `
        <strong>Carlos Gonzalez</strong> is a front-end web developer specialised in ReactJS/Gatsby.
        He lives in Howick, KZN, South Africa.
      `
    },
    organization: {
      name: "Carlos Gonzalez",
      url: "https://github.com/homearanya",
      logo: "https://avatars1.githubusercontent.com/u/30703943?s=460&v=4"
    },
    siteUrl: "https://www.trails.co.za" // for gatsby plugin sitemap
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/assets/img/icon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`)
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/general`,
        name: "general"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "staticimages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src_images`,
        path: `${__dirname}/src/assets/img/`
      }
    },
    netlifyCmsPaths, // Including in your Gatsby plugins will transform any paths in your frontmatter
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          netlifyCmsPaths, // Including in your Remark plugins will transform any paths in your markdown body
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 930,
              backgroundColor: "transparent" // required to display blurred image first
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://wildtrails.us17.list-manage.com/subscribe/post?u=792c9f598edc1eff7ee0c6658&amp;id=b7114c9ca6" // see instructions section below
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    "gatsby-plugin-netlify-identity-widget",
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ],
  mapping: {
    "MarkdownRemark.fields.hometours": `MarkdownRemark`,
    "MarkdownRemark.fields.menutours": `MarkdownRemark`,
    "MarkdownRemark.fields.tourevents": `MarkdownRemark`,
    "MarkdownRemark.fields.eventtour": `MarkdownRemark`
  }
};
