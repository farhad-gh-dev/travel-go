import React from "react"

import JapanImage from "../../images/blog/japan.jpg"
import DubaiImage from "../../images/blog/dubai.jpg"
import LondonImage from "../../images/blog/london.jpg"

export default function BlogSection() {
  const postsData = [
    {
      image: JapanImage,
      title: "japan streets at night",
      mainText: `The Land of the Rising Sun is a country where the past meets
    the future. Japanese culture stretches back millennia, yet has
    also been quick to adopt and created the latest modern
    fashions and trends..`,
    },
    {
      image: DubaiImage,
      title: "Where to Stay in Dubai",
      mainText:
        "Dubai is unlike anywhere else on the planet. With its bold architecture and audacious style, the United Arab Emirates’ largest city is a distinct fusion of its Bedouin heritage and an ultramodern style all its own.",
    },
    {
      image: LondonImage,
      title: "thing to do in london on a budget",
      mainText: `The capital of the United Kingdom is a thriving multicultural metropolis. The contrast between the spectacular historic sights and the lively cultural scene makes a visit to London an interesting and exciting adventure. Wander through St. James park, visit Westminster Abbey, explore the streets of Shoreditch, and take a ride up the River Thames.`,
    },
  ]

  return (
    <div className="blog-section section-paddings py2">
      <div className="col-8 mx-auto">
        <div className="text-center mb-5">
          <h3 className="section-title text-capitalize">our blog</h3>
        </div>
        <div className="cards-container row">
          {postsData.map(post => {
            return (
              <div className="col-4 px-4">
                <div className="post-card text-light shadow">
                  <img
                    src={post.image}
                    alt="japan-at-night"
                    className="w-100"
                  />
                  <div className="card-text d-flex flex-column justify-content-center align-items-center text-center">
                    <h4 className="post-title font-weight-light text-capitalize mb-5 px-5">
                      {post.title}
                    </h4>
                    <p className="px-4">{post.mainText}</p>
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
