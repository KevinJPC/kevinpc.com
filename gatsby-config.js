const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Kevin Pitti Castro`,
    siteUrl: `https://www.kevinpc.com`,
    description: ``
  },
  plugins: ["gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/logo.png"
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, 'src/components'),
          "@content": path.resolve(__dirname, 'content'),
        },
        extensions: ["js", "json"],
      }
    },
  ]
};