import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function ProjectLinks() {
  return (
    <div className="flex justify-evenly pb-6">
      <a
        href="#"
        rel="noopener noreferrer"
        className="text-sm sm:text-base text-white"
      >
        <FontAwesomeIcon icon={faCode} className="mr-2" />
        Code
      </a>
      <a
        href="#"
        rel="noopener noreferrer"
        className="text-sm sm:text-base text-white"
      >
        <FontAwesomeIcon icon={faDesktop} className="mr-2" />
        Website
      </a>
    </div>
  )
}