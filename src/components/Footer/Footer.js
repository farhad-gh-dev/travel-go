import React from "react"

import Logo from "../../images/travel-go-icon.png"
import InstagramLogo from "../../images/icons/instagram.svg"
import TwitterLogo from "../../images/icons/twitter.svg"
import FacebookLogo from "../../images/icons/facebook.svg"

export default function Footer() {
  const socialMediaIcons = [InstagramLogo, TwitterLogo, FacebookLogo]

  return (
    <div className="footer container-fluid">
      <div className="row section-paddings py1">
        <div className="left-column col-12 col-md-4 order-2 order-md-1 text-center mb-5">
          <div className="text-uppercase display-5 mb-3">contact us</div>
          <div className="text-capitalize">
            <div className="">mail - travel.go@gmail.com </div>
            <div className="">phone number - 903-592-0244 </div>
          </div>
        </div>
        <div className="middle-column col-12 col-md-4 order-3 order-md-2 text-center">
          <div className="logo-container d-flex align-items-center justify-content-center mb-5">
            <div>
              <img src={Logo} alt="travel-go-logo" className="mr-3" />
            </div>
            <div className="company-name text-capitalize text-left">
              travel go
            </div>
          </div>
          <div className="copyright text-center text-capitalize">
            designed and developed by
            <div className="font-weight-bold text-uppercase">
              <a
                href="https://github.com/source-architect"
                target="_blank"
                rel="nofollow noopener"
                className="link-model"
              >
                source architect
              </a>
            </div>
          </div>
        </div>
        <div className="right-column col-12 col-md-4 order-1 order-md-3 text-center mb-5">
          <div className="text-capitalize font-italic">
            <div className="d-inline-block mr-3">follow us on social media</div>
            <div className="social-media-icons d-inline-block">
              {socialMediaIcons.map(icon => {
                return (
                  <a href="https://instagram.com" className="ml-2">
                    <img src={icon} alt="social-media-icon" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
