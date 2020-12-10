import React, {useState} from 'react';
import {Link} from 'gatsby';

import SearchIcon from '../../images/icons/search.svg';

export default function Navbar({navbarLinks, socialMediaIcons, Logo}) {
    const [searchIsVisible, setSearchIsVisible] = useState(false);

    return (
        <div className="navbar-container">
            <div className="header-navbar">
                <div className="logo-container">
                    <img src={Logo} className="logo" alt="travel-go-logo"/>
                </div>

                <div className="navbar-links">
                    <div className="search-panel">
                        <img src={SearchIcon} alt="search-icon" onClick={() => setSearchIsVisible(!searchIsVisible)}/>
                        <input type="text" placeholder="term to search" className={`search-input ${searchIsVisible ? 'visible':''}`}/>
                    </div>

                    {navbarLinks.map(link => 
                        <Link to={link.to} className="navbar-link text-secondary">{link.text}</Link>
                    )}
                </div>

                <div className="social-media">
                    <div className="bar"></div>
                    <div className="social-media-icon">
                        <div className="vertical-bar mb-1"><div></div></div>
                        {socialMediaIcons.map(link => 
                            <Link to={link.to} className="text-secondary">
                                <img src={link.icon} alt={link.alt} className="mt-2"/>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
