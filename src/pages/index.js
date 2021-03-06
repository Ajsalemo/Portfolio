import Footer from "@components/footer/footer"
import Landing from "@components/landing/landing"
import Portfolio from "@components/portfolio/portfolio"
import SEO from "@components/seo/seo"
import { graphql } from "gatsby"
import React, { Fragment } from "react"
import About from "../components/about/about"

export default function Home({ data }) {
  return (
    <Fragment>
      <SEO title="Portfolio" />
      <Landing data={data} />
      <Portfolio data={data} />
      <About data={data} />
      <Footer />
    </Fragment>
  )
}

export const indexQuery = graphql`
  query IndexQuery {
    landing: file(relativePath: { eq: "general/dumbo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    about: file(relativePath: { eq: "general/self.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allPortfolioImages: allFile(
      filter: { relativePath: { regex: "/portfolio-images/" } }
    ) {
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
