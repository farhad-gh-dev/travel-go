import React from 'react'

import ParisImage from '../../images/cities-images/paris.jpg';

export default function CitiesImages() {
    const citiesData=[
        {img: ParisImage}
    ]

    return (
        <div className="cities-images container py-5">
            <div className="images row">
                <div className="col-6 pl-4 pb-4">
                    <img src={ParisImage} className="w-100"/>
                    <div className="city-name">
                        <span>p</span>
                        <span>a</span>
                        <span>r</span>
                        <span>i</span>
                        <span>s</span>
                    </div>
                    <div className="city-description">city of lovers</div>
                </div>
            </div>
        </div>
    )
}
