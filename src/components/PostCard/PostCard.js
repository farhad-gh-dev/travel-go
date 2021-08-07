import React from "react"
import { Link } from "gatsby"
import "./post-card.scss"

export default function PostCard({ postData }) {
  return (
    <div className="post-card row pb-4 pt-5 border-bottom border-secondary">
      <div className="post-image col-12 col-md-5">
        {/* <img src={postData.bannerImage} alt="test" className="w-100 rounded" /> */}
        <div className="h-100 position-relative overflow-hidden">
          <Link
            to={`/blog/${postData.title
              .replaceAll(/ /g, "_")
              .replaceAll(/-/g, "_")
              .replaceAll(/'/g, "")}`}
            className="image-container cover-parent dark-cover bg-dark rounded"
            style={
              postData.bannerImage
                ? {
                    backgroundImage: `url(${postData.bannerImage})`,
                  }
                : {
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }
            }
          ></Link>
        </div>
      </div>
      <div className="post-text col-12 col-md-7 d-flex flex-column justify-content-between pl-4 pl-sm-3 pl-md-5">
        <div className="pt-5 pt-md-0 pt-lg-4 ">
          <Link
            to={`/blog/${postData.title
              .replaceAll(/ /g, "_")
              .replaceAll(/-/g, "_")
              .replaceAll(/'/g, "")}`}
            className="post-title d-block text-decoration-none text-dark text-capitalize mb-4 mb-md-5"
          >
            {postData.title}
          </Link>
          <div className="pl-0 pl-md-2 mb-5 mb-md-4">
            {postData.description}
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row flex-md-column flex-lg-row justify-content-between text-capitalize">
          <div className="post-details">
            by {postData.writer} on {postData.date}
          </div>
          <div className="post-link">
            <Link
              to={`/blog/${postData.title
                .replaceAll(/ /g, "_")
                .replaceAll(/-/g, "_")
                .replaceAll(/'/g, "")}`}
            >
              read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
