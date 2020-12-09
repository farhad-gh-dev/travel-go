import React from "react"
import SEO from "../components/seo"

import Header from '../components/Header/Header';
import CitiesImages from "../components/CitiesImages/CitiesImages";

const IndexPage = () => (
  <div className="home">
    <SEO title="Home" />
    <Header />
    <CitiesImages />
  </div>
)

export default IndexPage
