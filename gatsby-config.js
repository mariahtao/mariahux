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
        icon: `src/assets/fav.png`,
      },
    },
    {
      resolve: `gatsby-plugin-direct-import`,
      options: {
        packages: [
          "framer-motion",
          {
            "name": "framer-motion/dist/es/render",
            "indexFile": "framer-motion/dist/es/render/index.mjs"
          },
          "popmotion",
          {
            "name": "popmotion/node_modules/tslib",
            "indexFile": "popmotion/node_modules/tslib/tslib.es6.js"
          },
          "webpack-hot-middlewear",
          {
            "name": "webpack-hot-middleware/node_modules/html-entities/lib",
            "indexFile": "webpack-hot-middleware/node_modules/html-entities/lib/index.js"
          },
          "reach-router",
          {
            "name": "reach-router/es",
            "indexFile": "reach-router/es/index.js"
          },
          "common-tags",
          {
            "name": "common-tags/es/TemplateTag",
            "indexFile": "common-tags/es/TemplateTag/TemplateTag.js"
          },
          "fast-refresh-overlay",
          {
            "name": "fast-refresh-overlay/helpers",
            "indexFile": "fast-refresh-overlay/helpers/focus-trap.js",
          },
          "react-dom",
          {
            "name": "react-dom/cjs",
            "indexFile": "react-dom/cjs/react-dom.development.js",
          },
          "gatsby-plugin-image",
          {
            "name": "gatsby-plugin-image/dist",
            "indexFile": "gatsby-plugin-image/dist/ndex.browser-4e524ce6.js"
          }
        ],
      },
    },
  ],
}
