import Landing from "@components/landing/landing"
import Portfolio from "@components/portfolio/portfolio"
import SEO from "@components/seo/seo"
import { graphql } from "gatsby"
import React, { Fragment } from "react"

export default function Home({ data }) {
  return (
    <Fragment>
      <SEO title="Portfolio" />
      <Landing data={data} />
      <Portfolio data={data} />
    </Fragment>
  )
}

export const indexQuery = graphql`
  query indexQuery {
    file(relativePath: { eq: "general/dumbo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

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
