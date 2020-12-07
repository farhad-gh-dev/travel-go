import React from 'react';
import {Link} from 'gatsby'

import Logo from '../../images/travel-go-icon.png';
import SearchIcon from '../../images/icons/search.svg';
import TwitterIcon from '../../images/icons/twitter.svg';
import InstagramIcon from '../../images/icons/instagram.svg';
import FacebookIcon from '../../images/icons/facebook.svg';

export default function Navbar() {
    const navbarLinks = [
        {to: '/about', text: 'About'},
        {to: '/blog', text: 'Blog'},
        {to: '/gallery', text: 'Gallery'},
        {to: '/books', text: 'Books'},
    ];

    const socialMediaIcons = [
        {to: '#', icon: TwitterIcon, alt: 'twitter-icon'},
        {to: '#', icon: InstagramIcon, alt: 'instagram-icon'},
        {to: '#', icon: FacebookIcon, alt: 'facebook-icon'},
    ]

    return (
        <div className="navbar-container">
            <div className="header-navbar">
                <div className="logo-container">
                    <img src={Logo} className="logo" alt="travel-go-logo"/>
                </div>

                <div className="navbar-links">
                    {navbarLinks.map(link => 
                        <Link to={link.to} className="navbar-link text-secondary">{link.text}</Link>
                    )}

                    <div className="navbar-link search-panel"><img src={SearchIcon} alt="search-icon"/></div>
                </div>

                <div className="social-media">
                    <div className="bar"></div>
                    <div className="social-media-icon">
                        <div className="vertical-bar mb-2"><div></div></div>
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
