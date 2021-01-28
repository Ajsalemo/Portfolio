import Img from "gatsby-image"
import React from "react"

export default function Landing({ data }) {
  return (
    <div>
      <Img
        className="h-screen"
        fluid={data.file.childImageSharp.fluid}
        alt="A picture of the Brooklyn Bridge"
      />
    </div>
  )
}
