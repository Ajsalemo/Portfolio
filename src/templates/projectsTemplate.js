import Footer from "@components/footer/footer"
import Navbar from "@components/navbar/navbar"
import SEO from "@components/seo/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import React, { Fragment } from "react"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Fragment>
      <SEO
        title={frontmatter.title}
        description={frontmatter.descriptionMain}
      />
      <div>
        <Navbar />
        <div className="min-h-screen h-full bg-blue-400 text-center px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-pacifico text-center pt-12 text-white">
            {frontmatter.title}
          </h1>
          <h3 className="text-white text-xs sm:text-sm pt-12 font-semibold">
            {frontmatter.descriptionMain}
          </h3>
          <h4 className="text-white text-xs sm:text-sm pt-6">
            {frontmatter.descriptionSecondary}
          </h4>
          <Img fluid={frontmatter.imageOne.childImageSharp.fluid} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        descriptionMain
        descriptionSecondary
        imageOne {
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
