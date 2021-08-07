import React from "react"

import DarkSaltClear from "../../images/books/book1.jpg"
import GhostWays from "../../images/books/book2.jpg"
import "./books.scss"

const BookCard = ({ itemData }) => {
  return (
    <div className="book-container row margins mb4">
      <div
        className={`col-12 col-md-4 px-5 px-xs-5 px-md-2 px-lg-3 ${
          itemData.imagePosition === "left" ? "order-1" : "order-1 order-md-2"
        }`}
      >
        <img
          src={itemData.image}
          alt="dark-salt-clear-book"
          className="book-image w-100 mb-5 mb-md-0"
        />
      </div>
      <div
        className={`col-12 col-md-8 ${
          itemData.imagePosition === "left" ? "order-2" : "order-2 order-md-1"
        } px-3 px-sm-4 px-md-3 px-lg-5`}
      >
        <div className="title text-capitalize margins mb2 mb4-xl">
          {itemData.title}
        </div>
        <div className="about-book margins mb1 font-weight-bold">
          {itemData.aboutBook}
        </div>
        <div className="content-sample">{itemData.contentSample}</div>
        <div className="book-shop-link mt-3">
          <a href={itemData.saleLink} className="text-capitalize">
            get one now{" "}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Books() {
  const BooksData = [
    {
      image: DarkSaltClear,
      imagePosition: "left",
      title: "dark, salt, clear",
      saleLink: "/",
      aboutBook: `From an adventurous and discerning new voice reminiscent of Robert Macfarlane, a captivating portrait of a community eking out its living in a coastal landscape as stark and storied as it is beautiful.`,
      contentSample: `Before arriving in Newlyn, a Cornish fishing village at the end of the
      railway line, Lamorna Ash was told that no fisherman would want a girl
      joining an expedition. Weeks later, the only female on board a trawler
      called the Filadelfia, she is heading out to sea with the dome of the
      sky above and the black waves below.`,
    },
    {
      image: GhostWays,
      imagePosition: "right",
      title: "ghostways",
      saleLink: "/",
      aboutBook: `A hauntingly beautiful diptych of works inspired by Robert Macfarlane’s travels with celebrated collaborators to two eerie corners of England.`,
      contentSample: `In Holloway, "a perfect miniature prose-poem" (William Dalrymple), Macfarlane, artist Stanley Donwood, and writer Dan Richards travel to Dorset, near the south coast of England, to explore a famed "hollowed way"―a path used by walkers and riders for so many centuries that it has become worn far down into the soft golden bedrock of the region.

      In Ness, "a triumphant libretto of mythic modernism for our poisoned age" (Max Porter), Macfarlane and Donwood create a modern myth about Orford Ness, the ten-mile-long shingle spit that lies off the coast of East Anglia, which the British government used for decades to conduct secret weapons tests.
      
      18 illustrations`,
    },
  ]

  return (
    <div className="books container-fluid section-paddings py3" id="books">
      <div className="col-12 col-lg-10 col-xl-8 mx-auto">
        <h3 className="section-title text-center text-capitalize margins mb4">
          checkout this books
        </h3>
        {BooksData.map(itemData => {
          return <BookCard itemData={itemData} />
        })}
      </div>
    </div>
  )
}
