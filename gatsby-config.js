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
        projectId: "uct4hy7z",
        dataset: "production",
        token: "skKzkUZLRjH56F6jKm67gWeySbJ5vf9mHKotaFBAdfsixo8uOuWbl8JO0vy1RG92mU875T4OWy4Jn1Uj7saAuOtwStgYDFctp9BixuiaoesTBa1gstD7vpuuFnKC8BioncAAHuZQ9hy0f59iv0FnoRcUrE9rNiSRO8qqR8KrUpYqhzYw23mp",
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
