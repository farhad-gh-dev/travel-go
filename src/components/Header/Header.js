import React from 'react'

import Navbar from '../Navbar/Navbar';
import BannerImage from '../../images/japanese-castle.png';

export default function Header() {
    return (
        <div className="header">
            <Navbar />

            <div className="banner mt-5">
                <div className="banner-bg-color">
                    <div></div>
                </div>

                <img src={BannerImage} alt="japanese-castle" className="banner-image"/>
            </div>
        </div>
    )
}
