import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { navbarLinks, socialMediaIcons, Logo } from "../data/HomePageData"

import PostCard from "../components/PostCard/PostCard"

export default function blogPagesTemplate({ data, pageContext }) {
  const { currentPage, numPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : currentPage - 1
  const nextPage = currentPage + 1

  const allPosts = data.allMarkdownRemark.edges

  return (
    <div>
      <Navbar
        navbarLinks={navbarLinks}
        socialMediaIcons={socialMediaIcons}
        logo={Logo}
      />
      <SEO title="Travel Go | Blog" />
      <div className="container py-5">
        <h1 className="section-title text-capitalize mb-5">blog section</h1>
        {allPosts.map(post => {
          const postData = post.node.frontmatter

          return <PostCard postData={postData} />
        })}
        <div className="d-flex justify-content-between mt-4 mb-5">
          <div>
            {!isFirst && (
              <Link to={`/blog/${prevPage}`} rel="prev">
                ← Previous Page
              </Link>
            )}
          </div>
          <div>
            {!isLast && (
              <Link to={`/blog/${nextPage}`} rel="next">
                Next Page →
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query pageMarkdowns($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            writer
            date(formatString: "MMMM DD, YYYY")
            title
            description
            bannerImage
          }
        }
      }
    }
  }
`
