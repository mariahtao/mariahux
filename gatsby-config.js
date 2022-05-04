module.exports = {
  siteMetadata: {
    title: `Mariah Tao`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mariah Tao`,
        start_url: `/`,
        background_color: `#212529`,
        display: `standalone`,
        icon: `src/assets/fav.svg`,
      },
    },
  ],
}
