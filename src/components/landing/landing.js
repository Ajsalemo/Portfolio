import LandingBox from "@components/landing-box/landing-box"
import Img from "gatsby-image"
import React from "react"

export default function Landing({ data }) {
  return (
    <div className="relative">
      <Img
        className="min-h-screen h-full"
        fluid={data.landing.childImageSharp.fluid}
        alt="A picture of the Brooklyn Bridge"
      />
      <LandingBox />
    </div>
  )
}
