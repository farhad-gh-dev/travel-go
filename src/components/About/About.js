import React from "react"

import TeamImage from "../../images/team.jpg"

export default function About() {
  return (
    <div className="about mt-5" id="about">
      <div className="col-12 mx-auto section-paddings py2">
        <div className="row">
          <div className="col-12 col-md-7 order-2 order-md-1 d-block d-md-flex justify-content-center">
            <div className="col-12 col-lg-11 col-xl-10 pr-3 pr-md-5 py-3">
              <h3 className="title text-capitalize font-weight-normal mb-5 mb-md-2 mb-lg-4 mb-xl-5">
                we offer you the best option for your next adventure
              </h3>
              <div className="px-2 px-md-3 py-2 py-md-4">
                <p className="description font-weight-normal">
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
          <div className="col-12 col-md-5 order-1 order-md-2 px-0 mb-5 mb-md-0">
            <div className="about-image h-100">
              <img src={TeamImage} alt="team" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
