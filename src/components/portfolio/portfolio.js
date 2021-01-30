import Img from "gatsby-image"
import React from "react"

export default function Portfolio({ data }) {
  return (
    <div className="bg-black min-h-screen h-full">
      <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-pacifico py-12 text-center">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
        {data.allFile.edges.map((src, i) => (
          <Img
            fluid={src.node.childImageSharp.fluid}
            key={i}
            className="h-fit"
          />
        ))}
      </div>
    </div>
  )
}

export const portfolioQuery = graphql`
  query PortfolioQuery {
    allFile(filter: { relativePath: { regex: "/portfolio-images/" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
