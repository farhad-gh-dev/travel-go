//navbar images
import Logo from "../images/travel-go-icon.png"
import TwitterIcon from "../images/icons/twitter.svg"
import InstagramIcon from "../images/icons/instagram.svg"
import FacebookIcon from "../images/icons/facebook.svg"

//header banner image
import BannerImage from "../images/japanese-castle.png"

//cities images
import ParisImage from "../images/cities-images/paris.jpg"
import SpainImage from "../images/cities-images/spain.jpg"
import ItalyImage from "../images/cities-images/italy.jpg"

//Header component data
const navbarLinks = [
  { to: "/about", text: "About" },
  { to: "#blog-section", text: "Blog" },
  { to: "/gallery", text: "Gallery" },
  { to: "/books", text: "Books" },
]

const socialMediaIcons = [
  { to: "#", icon: TwitterIcon, alt: "twitter-icon" },
  { to: "#", icon: InstagramIcon, alt: "instagram-icon" },
  { to: "#", icon: FacebookIcon, alt: "facebook-icon" },
]

//CitiesImages component data
const citiesData = {
  leftSide: [
    {
      image: ParisImage,
      imageAlt: "paris-image",
      imageShadowColor: { backgroundColor: "rgba(190, 178, 0, 0.3)" },
      name: "paris",
      description: "city of lovers",
    },
    {
      image: ItalyImage,
      imageAlt: "italy-image",
      imageShadowColor: { backgroundColor: "rgba(0, 48, 143, 0.2)" },
      name: "italy",
      description: "city of lovers",
    },
  ],
  rightSide: [
    {
      image: SpainImage,
      imageAlt: "spain-image",
      imageShadowColor: { backgroundColor: "rgba(255,103,0, 0.25)" },
      name: "spain",
      description: "city of lovers",
    },
  ],
}

export { Logo, navbarLinks, socialMediaIcons, BannerImage, citiesData }
