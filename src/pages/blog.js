import React from "react"
import SEO from "../components/seo"

import Navbar from "../components/Navbar/Navbar"
import { navbarLinks, socialMediaIcons, Logo } from "../data/HomePageData"

import PostsPanel from "../components/PostsPanel/PostsPanel"

export default function blog() {
  return (
    <div>
      <Navbar
        navbarLinks={navbarLinks}
        socialMediaIcons={socialMediaIcons}
        Logo={Logo}
      />
      <SEO title="Travel Go | Blog" />
      <div className="container py-5">
        <div className="text-capitalize display-4 mb-5">blog section</div>
        <PostsPanel />
      </div>
    </div>
  )
}
