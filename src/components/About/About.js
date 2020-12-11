import React from "react"

import TeamImage from "../../images/team.jpg"

export default function About() {
  return (
    <div className="about mt-5">
      {/* <div className="bg-color"></div> */}
      <div className="about-image h-100">
        <div className="image-shadow"></div>
        <img src={TeamImage} alt="team-image" className="h-100" />
      </div>
    </div>
  )
}
