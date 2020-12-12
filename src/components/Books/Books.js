import React from "react"

import DarkSaltClear from "../../images/books/book1.jpg"

export default function Books() {
  return (
    <div className="books container-fluid section-paddings py3">
      <div className="col-8 mx-auto">
        <h3 className="text-center text-capitalize display-3 mb-5">
          checkout this book
        </h3>
        <div className="book-container row">
          <div className="col-4">
            <img
              src={DarkSaltClear}
              alt="dark-salt-clear-book"
              className="book-image w-100"
            />
          </div>
          <div className="col-6 pl-5">
            <div className="title display-4 text-capitalize margins mb4">
              dark, salt, clear
            </div>
            <div className="about-book margins mb1">
              From an adventurous and discerning new voice reminiscent of Robert
              Macfarlane, a captivating portrait of a community eking out its
              living in a coastal landscape as stark and storied as it is
              beautiful.
            </div>
            <div className="content-sample">
              Before arriving in Newlyn, a Cornish fishing village at the end of
              the railway line, Lamorna Ash was told that no fisherman would
              want a girl joining an expedition. Weeks later, the only female on
              board a trawler called the Filadelfia, she is heading out to sea
              with the dome of the sky above and the black waves below.
            </div>
            <div className="book-shop-link"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
