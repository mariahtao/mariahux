module.exports = {
  siteMetadata: {
    title: `Mariahux`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-direct-import`,
      options: {
        packages: [
          "my-package-name",
          {
            "name": "my-package-name/sub-package",
            "indexFile": "my-package-name/sub-package/index.es.js"
          }
        ],
      },
    },
  ],
}
