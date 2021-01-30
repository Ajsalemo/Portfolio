import Img from "gatsby-image"
import React from "react"

export default function About({ data }) {
  return (
    <div className="h-screen bg-blue-400">
      <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-pacifico py-12 text-center">
        About
      </h2>
      <div className="flex flex-col justify-center">
        <Img
          fluid={data.about.childImageSharp.fluid}
          alt="A picture of myself"
          className="h-64 w-64 rounded-full"
        />
      </div>
    </div>
  )
}
