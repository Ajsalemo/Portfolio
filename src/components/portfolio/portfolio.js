import Img from "gatsby-image"
import React from "react"

export default function Portfolio({ data }) {
  return (
    <div className="bg-black h-screen">
      {data.allFile.edges.map((src, i) => (
        <Img fluid={src.node.childImageSharp.fluid} className="h-12 w-12" />
      ))}
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
