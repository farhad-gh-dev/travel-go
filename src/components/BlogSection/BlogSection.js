import React from "react"
import { Link } from "gatsby"

import ParisImage from "../../images/blog/paris.png"

export default function BlogSection() {
  const titles = ["paris", "italy", "spain", "rome"]

  return (
    <div className="container-fluid">
      <div className="blog-section col-8 mx-auto">
        <div className="head my-5">
          <h3 className="title font-weight-normal">blog</h3>
          <Link
            to="/blog"
            className="link-model blue-color underline text-capitalize"
          >
            see all posts
          </Link>
        </div>
        <div className="posts-by-title row">
          {titles.map((title, index) => {
            return (
              <div className="title col-3 text-center text-uppercase">
                <div className={`${index === 0 ? "black-border" : ""}`}>
                  {title}
                </div>
              </div>
            )
          })}
        </div>
        <div className="post-sample row mt-5">
          <div className="col-8">
            <img src={ParisImage} alt="paris-image" className="w-100" />
          </div>
          <div className="text-area col-4">
            things you need to know before going to paris
          </div>
        </div>
      </div>
    </div>
  )
}
