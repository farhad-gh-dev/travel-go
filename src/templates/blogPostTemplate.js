import React from "react"
import { graphql } from "gatsby"

import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import SEO from "../components/seo"
import { socialMediaIcons, navbarLinks, Logo } from "../data/HomePageData"

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div className="blog-post-template">
      <SEO title={`${frontmatter.title ? frontmatter.title : "NO Title"}`} />
      <div
        className="post-header text-light mb-5"
        style={
          frontmatter.bannerImage
            ? {
                backgroundImage: `url(${frontmatter.bannerImage})`,
              }
            : {
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }
        }
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
                {frontmatter.title ? frontmatter.title : "NO Title"}
              </h1>
              <p className="description px-3 px-lg-5">
                {frontmatter.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="post-body container margins mb3">
        <div className="col-12 col-md-10 mx-auto">
          <div className="post-details mb-4 py-3 border-bottom">
            <div
              style={
                frontmatter.writerAvatar
                  ? {
                      backgroundImage: `url(${frontmatter.writerAvatar})`,
                    }
                  : {
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                    }
              }
              className="writer-avatar d-inline-block rounded-circle mr-3"
            ></div>
            <div className="text-secondary d-inline-block text-capitalize">
              <div className="h4 ">
                by {frontmatter.writer ? frontmatter.writer : "--"}
              </div>
              <div>
                published in {frontmatter.date ? frontmatter.date : "--"}
              </div>
            </div>
          </div>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {frontmatter.contentSource && (
            <div className="mt-4 text-capitalize">
              all rights for this article are reserved to{" "}
              <a
                href={frontmatter.contentSource}
                className="link-model"
                target="_blank"
                rel="nofollow noopener"
              >
                this source
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer />
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
        contentSource
      }
    }
  }
`
