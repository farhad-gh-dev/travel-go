import React, { useState } from "react"
import { Link } from "gatsby"

import SearchIcon from "../../images/icons/search.svg"
import "./navbar.scss"

export default function Navbar({
  navbarLinks,
  socialMediaIcons,
  logo,
  darkMode,
}) {
  const [searchIsVisible, setSearchIsVisible] = useState(false)

  return (
    <div className={`navbar-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="header-navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} className="logo" alt="travel-go-logo" />
          </Link>
        </div>

        <div className="navbar-links">
          <div className="search-panel">
            <img
              src={SearchIcon}
              alt="search-icon"
              onClick={() => setSearchIsVisible(!searchIsVisible)}
            />
            <input
              type="text"
              placeholder="term to search"
              className={`search-input ${searchIsVisible ? "visible" : ""}`}
              onChange={e => console.log(e.target.value)}
            />
          </div>

          {navbarLinks.map(link => (
            <Link to={link.to} className="navbar-link font-weight-normal">
              {link.text}
            </Link>
          ))}
        </div>

        <div className="social-media">
          <div className="bar"></div>
          <div className="social-media-icons">
            <div className="vertical-bar mb-1">
              <div></div>
            </div>
            {socialMediaIcons.map(link => (
              <Link to={link.to} className="icon d-block text-right">
                <img src={link.icon} alt={link.alt} className="mt-2" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
