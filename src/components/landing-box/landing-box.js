import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import scrollTo from "gatsby-plugin-smoothscroll"
import React from "react"

export default function LandingBox() {
  return (
    <div className="bg-black bg-opacity-75 absolute right-1/10 xs:right-1/4 md:right-1/4 top-1/4 w-4/5 h-1/2 xs:w-1/2 xs:h-1/2 sm:w-3/4 md:w-1/2 rounded-lg">
      <div className="text-white text-center flex flex-col h-3/4 justify-center">
        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-pacifico pb-4">
          Hi, my name is
        </h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-pacifico">
          Anthony Salemo
        </h1>
      </div>
      <div className="text-white flex justify-around bg-white bg-opacity-25 mx-2 sm:mx-12 p-4 text-sm sm:text-base font-semibold rounded-md">
        <div>
          <a
            href="https://www.linkedin.com/in/ajssalemo/"
            target="blank"
            rel="noopener noreferrer"
            aria-label="Link to LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
          </a>
          <a
            href="https://github.com/Ajsalemo"
            target="blank"
            rel="noopener noreferrer"
            className="ml-2 sm:ml-4"
            aria-label="Link to Github"
          >
            <FontAwesomeIcon icon={faGithubSquare} className="text-3xl" />
          </a>
        </div>
        <button
          onClick={() => scrollTo("#portfolio")}
          className="text-xs sm:text-base"
        >
          Portfolio
        </button>
        <button
          onClick={() => scrollTo("#about")}
          className="text-xs sm:text-base"
        >
          About
        </button>
        <a
          href="mailto:ajssalemo@gmail.com"
          className="text-xs sm:text-base flex items-center font-normal"
        >
          Contact
        </a>
      </div>
    </div>
  )
}
