import React from "react"
import SEO from "../components/seo"

import Header from "../components/Header/Header"
import CitiesImages from "../components/CitiesImages/CitiesImages"
import About from "../components/About/About"
import BlogSection from "../components/BlogSection/BlogSection"
import Books from "../components/Books/Books"
import Footer from "../components/Footer/Footer"

const IndexPage = () => (
  <div className="home">
    <SEO title="Home" />
    <Header />
    <About />
    <CitiesImages />
    <BlogSection />
    <Books />
    <Footer />
  </div>
)

export default IndexPage
