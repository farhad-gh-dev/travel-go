/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(
    `./src/templates/blogPostTemplate.js`
  )

  const blogPagesTemplate = require.resolve(
    `./src/templates/blogPagesTemplate.js`
  )

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const postUrl = `${node.frontmatter.title}`
      .replace(/ /g, "_")
      .replace(/-/g, "_")
      .replace(/'/g, "")
    createPage({
      path: postUrl ? `/blog/${postUrl}` : "/blog/bad_post",
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        title: node.frontmatter.title,
      },
    })
  })

  // Create blog-list pages
  const postsLength = result.data.allMarkdownRemark.edges.length
  const postsPerPage = 7
  const numPages = Math.ceil(postsLength / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogPagesTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
