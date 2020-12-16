import React from "react"
import { Link } from "gatsby"

import JapanImage from "../../images/blog-posts/japan.jpg"
import NewYorkImage from "../../images/blog-posts/new-york.jpg"

export default function PostsPanel() {
  const postsData = [
    {
      image: JapanImage,
      title: "japan streets at night",
      mainText: `The Land of the Rising Sun is a country where the past meets
        the future. Japanese culture stretches back millennia, yet has
        also been quick to adopt and created the latest modern
        fashions and trends...`,
    },
    {
      image: NewYorkImage,
      title: "Where to Stay in new york",
      mainText:
        "As New York City continues on an encouraging trajectory of recovery, we are actively planning for a safe, responsible citywide comeback that will reconnect us with each other and our beloved five boroughs. Read on for the most useful and current information for navigating the City, plus plenty of resources for planning ahead...",
    },
  ]

  return (
    <div className="posts-panel">
      {postsData.map(postData => {
        return (
          <div className="post row pb-4 pt-5 border-bottom border-secondary">
            <div className="post-image col-12 col-md-5">
              <img src={postData.image} alt="test" className="w-100 rounded" />
            </div>
            <div className="post-text col-12 col-md-7 d-flex flex-column justify-content-between pl-4 pl-sm-3 pl-md-5">
              <div className="py-5 py-md-4">
                <div className="h1 font-weight-light text-capitalize mb-4 mb-md-5">
                  {postData.title}
                </div>
                <div className="pl-0 pl-md-2">{postData.mainText}</div>
              </div>
              <div className="d-flex justify-content-between text-capitalize">
                <div className="post-details">
                  by source architect on 16 december 2020
                </div>
                <div className="post-link">
                  <Link to={`${postData.title.replaceAll(/ /g, "_")}`}>
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
