import React from "react"

import TeamImage from "../../images/team.jpg"

export default function About() {
  return (
    <div className="about mt-5">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h3>what we do?</h3>
          </div>
          <div className="col-5">
            <div className="about-image h-100">
              <img src={TeamImage} alt="team-image" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
