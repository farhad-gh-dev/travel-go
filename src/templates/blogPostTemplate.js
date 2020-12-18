import React from "react"
import { graphql } from "gatsby"

import Navbar from "../components/Navbar/Navbar"
import SEO from "../components/seo"
import { socialMediaIcons, navbarLinks, Logo } from "../data/HomePageData"

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const bannerImage = frontmatter.bannerImage
  return (
    <div className="blog-post-template">
      <SEO title={`Travel Go | ${frontmatter.title}`} />
      <div
        className="post-header text-light mb-5"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <Navbar
          socialMediaIcons={socialMediaIcons}
          navbarLinks={navbarLinks}
          logo={Logo}
          darkMode={true}
        />
        <div className="title-container cover-parent d-flex align-items-center justify-content-center">
          <div className="container mx-auto text-center font-weight-light">
            <div className="col-12 col-md-12 col-lg-9 col-xl-10 mx-auto">
              <h1 className="title font-weight-light text-light mb-5 px-3 px-md-5">
                {frontmatter.title}
              </h1>
              <p className="description px-3 px-lg-5">
                {frontmatter.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-body container">
        <div className="col-9">
          <div className="post-details d-flex align-items-end mb-4 py-3 border-bottom">
            <div
              style={{ backgroundImage: `url(${frontmatter.writerAvatar})` }}
              className="writer-avatar rounded-circle mr-3"
            ></div>
            <div className="text-secondary text-capitalize">
              <div className="h4">by {frontmatter.writer}</div>
              <div>published in {frontmatter.date}</div>
            </div>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        writer
        writerAvatar
        title
        description
        bannerImage
      }
    }
  }
`
