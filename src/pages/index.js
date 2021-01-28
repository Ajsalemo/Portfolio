import Landing from "@components/landing/landing"
import { graphql } from 'gatsby'
import React from "react"

export default function Home({ data }) {
  return <Landing data={data} />
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
