module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify-cms`,
        'gatsby-plugin-netlify-identity-widget',
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/Layout`)
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        `gatsby-transformer-remark`,
    ]
}