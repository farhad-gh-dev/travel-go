import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

import Logo from "../images/logo.svg"

const NotFoundPage = () => (
  <div className="fof-page d-flex align-items-center px-4 justify-content-center text-light font-weight-light">
    <SEO title="404 |Not found" />
    <div className="text-area row align-items-center justify-content-center">
      <div className="container-404 col-12 col-md-4 text-center">404</div>
      <div className="col-12 col-md-6 text-center text-md-left">
        <div className="container-text font-italic text-capitalize mb-4">
          page was not found
        </div>
        <div className="container-link d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="link text-capitalize mr-3">
            go to home page |
          </Link>
          <div className="brand d-inline-block text-uppercase font-weight-normal">
            <img src={Logo} alt="travel-go-logo" className="image mr-2" />
            travel go
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NotFoundPage
