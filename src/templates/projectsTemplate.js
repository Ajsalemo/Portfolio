import Footer from "@components/footer/footer"
import Navbar from "@components/navbar/navbar"
import ProjectLinks from "@components/project-links/project-links"
import ScrollTo from "@components/scrollto/scrollto"
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
      <div id="templateTop">
        <Navbar />
        <div className="min-h-screen h-full bg-gray-700 text-center px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-pacifico text-center pt-12 text-white">
            {frontmatter.title}
          </h1>
          <h3 className="text-white text-xs sm:text-sm pt-12 font-semibold">
            {frontmatter.descriptionMain}
          </h3>
          <h4 className="text-white text-xs sm:text-sm py-6">
            {frontmatter.descriptionSecondary}
          </h4>
          <ProjectLinks
            githubLink={frontmatter.githubLink}
            websiteLink={frontmatter.websiteLink}
          />
          <div>
            <Img
              fluid={frontmatter.imageOne.childImageSharp.fluid}
              className="lg:w-3/4 mx-auto shadow-2xl border-solid border-2 sm:border-4 rounded mb-4"
            />
            <Img
              fluid={frontmatter.imageTwo.childImageSharp.fluid}
              className="lg:w-3/4 mx-auto shadow-2xl border-solid border-2 sm:border-4 rounded mb-4"
            />
            <Img
              fluid={frontmatter.imageThree.childImageSharp.fluid}
              className="lg:w-3/4 mx-auto shadow-2xl border-solid border-2 sm:border-4 rounded"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <ScrollTo location="#templateTop" className="mt-4" />
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
        githubLink
        websiteLink
        imageOne {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageThree {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
