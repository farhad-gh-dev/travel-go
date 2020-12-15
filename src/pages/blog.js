import React from "react"
import SEO from "../components/seo"

import JapanImage from "../images/blog-posts/japan.jpg"
import NewYorkImage from "../images/blog-posts/new-york.jpg"

export default function blog() {
  const postsData = [
    {
      image: JapanImage,
      title: "japan",
      mainText:
        "The Land of the Rising Sun is a country where the past meets the future. Japanese culture stretches back millennia, yet has also been quick to adopt and created the latest modern fashions and trends..",
    },
    {
      image: NewYorkImage,
      title: "NewYork",
      mainText:
        "As New York City continues on an encouraging trajectory of recovery, we are actively planning for a safe, responsible citywide comeback that will reconnect us with each other and our beloved five boroughs. Read on for the most useful and current information for navigating the City, plus plenty of resources for planning ahead.",
    },
  ]

  return (
    <div>
      <SEO title="Travel Go | Blog" />
      <div className="container py-5">
        <div className="row">
          {postsData.map(postData => {
            return (
              <div className="col-6 px-4">
                <div className="image-container">
                  <img
                    src={postData.image}
                    alt="japan-image"
                    className="w-100"
                  />
                </div>
                <div className="text-area py-4 px-3">
                  <div className="post-detail mb-4">details</div>
                  <div className="post-title display-4 text-capitalize mb-4">
                    {postData.title}
                  </div>
                  <div
                    className="post-main-text"
                    style={{
                      lineHeight: "1.5em",
                      height: "3em",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "100px",
                    }}
                  >
                    {postData.mainText}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
