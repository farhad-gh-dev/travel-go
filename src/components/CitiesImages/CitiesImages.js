import React from "react"

import { citiesData } from "../../data/HomePageData"

const ImageCard = ({ cityData, direction }) => {
  return (
    <div className="col-12 col-md-6">
      {cityData.map((city, index) => {
        return (
          <div
            className={`image-card ${
              index === 0 && direction === "left" && "pt-0"
            }`}
          >
            <div className="image-container w-100">
              <img src={city.image} alt={city.imageAlt} className="w-100" />
              <div className="image-shadow" style={city.imageShadowColor}></div>
            </div>
            <div className="city-name">
              {city.name.split("").map(letter => (
                <span>{letter}</span>
              ))}
            </div>
            <div className="city-description">{city.description}</div>
          </div>
        )
      })}
    </div>
  )
}

export default function CitiesImages() {
  return (
    <div className="cities-images w-100">
      <div className="container px-0">
        <div className="row">
          <ImageCard cityData={citiesData.leftSide} direction={"left"} />
          <ImageCard cityData={citiesData.rightSide} direction={"right"} />
        </div>
      </div>
    </div>
  )
}
