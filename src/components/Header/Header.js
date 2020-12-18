import React from "react"

import Navbar from "../Navbar/Navbar"
import {
  Logo,
  navbarLinks,
  socialMediaIcons,
  BannerImage,
} from "../../data/HomePageData"

export default function Header() {
  return (
    <div className="header">
      <Navbar
        navbarLinks={navbarLinks}
        socialMediaIcons={socialMediaIcons}
        logo={Logo}
      />

      <div className="banner mt-2">
        <div className="small-screen-title">
          <h1 className="font-italic font-weight-normal m-0">
            Travel Around the World
          </h1>
          <div className="text-capitalize">
            wanna start your adventure?{" "}
            <button className="link-model no-bg p-1 text-capitalize">
              learn more
            </button>
          </div>
        </div>
        <div className="banner-bg-color">
          <h1 className="title font-italic font-weight-normal m-0">
            Travel Around the World
          </h1>
          <div className="description col-4 col-lg-6 ">
            An Award Winning Travel Blog, Featuring Travel Tips, Packing Guides,
            Articles and Photography from Around the World.
          </div>
          <div className="read-more-des ml-3">wanna start your adventure?</div>
          <div className="read-more-btn mt-4 ml-3">
            <button className="btn-model no-bg text-capitalize">
              learn more
            </button>
          </div>
        </div>

        <img src={BannerImage} alt="japanese-castle" className="banner-image" />
      </div>
    </div>
  )
}
