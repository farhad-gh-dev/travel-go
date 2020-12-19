import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import Navbar from "../components/Navbar/Navbar"
import { navbarLinks, socialMediaIcons, Logo } from "../data/HomePageData"

import PostCard from "../components/PostCard/PostCard"

export default function Blog({ data }) {
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
        <div className="text-capitalize display-4 mb-5">blog section</div>
        {allPosts.map(post => {
          const postData = post.node.frontmatter

          return <PostCard postData={postData} />
        })}
      </div>
    </div>
  )
}

export const query = graphql`
  query allMarkDownsByDate {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            writer
            date
            title
            description
            bannerImage
          }
        }
      }
    }
  }
`
