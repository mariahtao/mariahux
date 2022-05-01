/*require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})*/

module.exports = {
  siteMetadata: {
    title: `mariahux`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-page-transitions',
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "",
        dataset: "",
        token: "",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `schemas`,
        path: `${__dirname}/schemas`,
      },
    }, 
  ],
}
