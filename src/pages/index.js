import Landing from "@components/landing/landing"
import SEO from "@components/seo/seo"
import { graphql } from "gatsby"
import React, { Fragment } from "react"

export default function Home({ data }) {
  return (
    <Fragment>
      <SEO title="Portfolio" />
      <Landing data={data} />
    </Fragment>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "dumbo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
