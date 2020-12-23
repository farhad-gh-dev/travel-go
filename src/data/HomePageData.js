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
  { to: "/#about", text: "About" },
  { to: "/blog", text: "Blog" },
  { to: "/#gallery", text: "Gallery" },
  { to: "/#books", text: "Books" },
]

const socialMediaIcons = [
  { to: "#", icon: TwitterIcon, alt: "twitter" },
  { to: "#", icon: InstagramIcon, alt: "instagram" },
  { to: "#", icon: FacebookIcon, alt: "facebook" },
]

//CitiesImages component data
const citiesData = {
  leftSide: [
    {
      image: ParisImage,
      imageAlt: "paris",
      imageShadowColor: "rgb(235,232,178)",
      name: "paris",
      nameColor: "rgb(222, 178, 0)",
      description: "city of lovers",
    },
    {
      image: ItalyImage,
      imageAlt: "italy",
      imageShadowColor: "rgb(204,214,233)",
      name: "italy",
      nameColor: "rgb(0, 141, 222)",
      description: "city of lovers",
    },
  ],
  rightSide: [
    {
      image: SpainImage,
      imageAlt: "spain",
      imageShadowColor: "rgb(255,217,191)",
      name: "spain",
      nameColor: "rgb(222, 90, 0)",
      description: "city of lovers",
    },
  ],
}

export { Logo, navbarLinks, socialMediaIcons, BannerImage, citiesData }
