const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Kevin Pitti Castro`,
    siteUrl: `https://kevinpc.com`,
    description: `Kevin es un un desarrollador web enfocado en trabajar principalmente en el frontend pero también el backend de aplicaciones web. Amante de la tecnología.`
  },
  plugins: ["gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-9TLRW87B6J"
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