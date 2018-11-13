module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/Layout`)
            }
        },
        {
            resolve: 'gatsby-plugin-netlify-identity-widget',
            options: {
                container: '#netlify-modal'
            }
        }
    ]
}