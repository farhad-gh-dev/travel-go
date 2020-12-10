import React from "react"

import TeamImage from "../../images/team.png"

export default function About() {
  return (
    <div className="about">
      <div className="bg-color"></div>
      <img src={TeamImage} alt="team-image" className="h-100" />
    </div>
  )
}
