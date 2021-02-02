import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import scrollTo from "gatsby-plugin-smoothscroll"
import React from "react"

export default function ScrollTo({ location, className }) {
  return (
    <button
      onClick={() => scrollTo(location)}
      aria-label="Scroll to top"
      className={className || null}
    >
      <FontAwesomeIcon
        icon={faLongArrowAltUp}
        size="2x"
        className="animate-bounce"
      />
    </button>
  )
}
