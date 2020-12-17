module.exports = {
  siteMetadata: {
    title: `Travel Go`,
    description: `with our help, choose the best destination for you and start your adventure | travel go`,
    author: `source-architect`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/data/blog-posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Travel-Go`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#444444`,
        display: `minimal-ui`,
        icon: `src/images/travel-go-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
