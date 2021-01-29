import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
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
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-base sm:text-3xl"
            />
          </a>
          <a
            href="https://github.com/Ajsalemo"
            target="blank"
            rel="noopener noreferrer"
            className="ml-2 sm:ml-4"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              className="text-base sm:text-3xl"
            />
          </a>
        </div>
        <Link to="#" className="text-xs sm:text-base transition duration-500 hover:animate-pulse hover:text-blue-100">
          Portfolio
        </Link>
        <Link to="#" className="text-xs sm:text-base hover:animate-pulse hover:text-blue-100">
          About
        </Link>
        <a href="mailto:ajssalemo@gmail.com" className="text-xs sm:text-base hover:animate-pulse hover:text-blue-100">
          Contact
        </a>
      </div>
    </div>
  )
}
