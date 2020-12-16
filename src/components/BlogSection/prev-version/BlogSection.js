import React, { useState } from "react"
import { Link } from "gatsby"

import ParisImage from "../../images/blog/paris.png"
import ThailandImage from "../../images/blog/thailand.png"
import MexicoImage from "../../images/blog/mexico.png"
import GermanyImage from "../../images/blog/germany.png"

export default function BlogSection() {
  const [slideToShow, setSlideToShow] = useState("paris")

  const testData = {
    paris: {
      title: "things you need to know before going to paris",
      headerImage: ParisImage,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident iste odit sint et labore, aliquam illum ex reprehenderit harum nulla voluptas natus fugiat ratione voluptate molestiae cumque ipsam nesciunt eaque blanditiis saepe. Laboriosam illum voluptatum quas a eum optio deleniti beatae? Officia, sint. Amet optio aliquid ea voluptates, nisi vitae quae non veritatis, commodi nostrum quia, quod mollitia rerum nobis.",
    },
    thailand: {
      title: "wandring where you wanna go?",
      headerImage: ThailandImage,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident iste odit sint et labore, aliquam illum ex reprehenderit harum nulla voluptas natus fugiat ratione voluptate molestiae cumque ipsam nesciunt eaque blanditiis saepe. Laboriosam illum voluptatum quas a eum optio deleniti beatae? Officia, sint. Amet optio aliquid ea voluptates, nisi vitae quae non veritatis, commodi nostrum quia, quod mollitia rerum nobis.",
    },
    germany: {
      title: "things you need to know before going to paris",
      headerImage: GermanyImage,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident iste odit sint et labore, aliquam illum ex reprehenderit harum nulla voluptas natus fugiat ratione voluptate molestiae cumque ipsam nesciunt eaque blanditiis saepe. Laboriosam illum voluptatum quas a eum optio deleniti beatae? Officia, sint. Amet optio aliquid ea voluptates, nisi vitae quae non veritatis, commodi nostrum quia, quod mollitia rerum nobis.",
    },
    mexico: {
      title: "things you need to know before going to paris",
      headerImage: MexicoImage,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident iste odit sint et labore, aliquam illum ex reprehenderit harum nulla voluptas natus fugiat ratione voluptate molestiae cumque ipsam nesciunt eaque blanditiis saepe. Laboriosam illum voluptatum quas a eum optio deleniti beatae? Officia, sint. Amet optio aliquid ea voluptates, nisi vitae quae non veritatis, commodi nostrum quia, quod mollitia rerum nobis.",
    },
  }

  return (
    <div className="blog-section container-fluid" id="blog-section">
      <div className="section-container col-9 mx-auto">
        <div className="head">
          <h3 className="title font-weight-normal">blog</h3>
          <Link to="/blog" className="text-capitalize">
            see all posts
          </Link>
        </div>
        <div className="posts-by-title row">
          {Object.keys(testData).map((title, index) => {
            return (
              <div className="title col-3 text-center text-uppercase">
                <div
                  className={`${slideToShow === title ? "black-border" : ""}`}
                  onClick={() => {
                    setSlideToShow(title)
                  }}
                >
                  {title}
                </div>
              </div>
            )
          })}
        </div>
        <div className="blog-post row mt-5">
          <div className="blog-image col-8">
            <img
              src={testData[slideToShow].headerImage}
              alt="paris-image"
              className="w-100"
            />
          </div>
          <div className="text-area col-4">
            <div className="title">{testData[slideToShow].title}</div>
            <div className="description">
              {testData[slideToShow].description}
              <div className="mt-4 text-right">
                <Link to="/post-title">Read more...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
