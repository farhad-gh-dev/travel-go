import React from "react"

import TeamImage from "../../images/team.jpg"

export default function About() {
  return (
    <div className="about mt-5">
      <div className="col-12 mx-auto section-paddings py2">
        <div className="row">
          <div className="col-7 d-flex justify-content-center">
            <div className="col-9 pr-5 py-3">
              <h3 className="h1 text-capitalize font-weight-normal mb-5">
                we offer you the best option for your next adventure
              </h3>
              <div className="px-3 py-4">
                <p
                  className="h4 font-weight-normal"
                  style={{ lineHeight: "2.1rem" }}
                >
                  ___ Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident iste odit sint et labore, aliquam illum ex
                  reprehenderit harum nulla voluptas natus fugiat ratione
                  voluptate molestiae cumque ipsam nesciunt eaque blanditiis
                  saepe. Laboriosam illum voluptatum quas a eum optio deleniti
                  beatae? Officia, sint. Amet optio aliquid ea voluptates, nisi
                  vitae quae non veritatis, commodi nostrum quia, quod mollitia
                  rerum nobis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-5 px-0">
            <div className="about-image h-100">
              <img src={TeamImage} alt="team-image" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
