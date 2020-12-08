import React from 'react'

import Navbar from '../Navbar/Navbar';
import BannerImage from '../../images/japanese-castle.png';

export default function Header() {
    return (
        <div className="header">
            <Navbar />

            <div className="banner mt-2">
                <div className="small-screen-title ">
                    <h1 className="font-italic font-weight-normal m-0">Travel Around the World</h1>
                </div>
                <div className="banner-bg-color">
                    <h1 className="title font-italic font-weight-normal m-0">Travel Around the World</h1>
                    <div className="description col-6">An Award Winning Travel Blog, Featuring
                    Travel  Tips, Packing Guides, Articles and
                    Photography from Around the World.</div>
                    <div className="read-more-des ml-3">wanna start your adventure?</div>
                    <div className="read-more-btn mt-4 ml-3">
                        <button className="btn-model no-bg text-capitalize">read more</button>
                    </div>
                </div>

                <img src={BannerImage} alt="japanese-castle" className="banner-image"/>
            </div>
        </div>
    )
}
