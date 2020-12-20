import React from "react"
import { Link } from "gatsby"

export default function PostCard({ postData }) {
  return (
    <div className="post-card row pb-4 pt-5 border-bottom border-secondary">
      <div className="post-image col-12 col-md-5">
        {/* <img src={postData.bannerImage} alt="test" className="w-100 rounded" /> */}
        <div className="h-100 position-relative">
          <div
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
          ></div>
        </div>
      </div>
      <div className="post-text col-12 col-md-7 d-flex flex-column justify-content-between pl-4 pl-sm-3 pl-md-5">
        <div className="py-5 py-md-4">
          <div className="h1 font-weight-light text-capitalize mb-4 mb-md-5">
            {postData.title}
          </div>
          <div className="pl-0 pl-md-2">{postData.description}</div>
        </div>
        <div className="d-flex justify-content-between text-capitalize">
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
