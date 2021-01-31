import Footer from "@components/footer/footer"
import Navbar from "@components/navbar/navbar"
import { graphql } from "gatsby"
import React from "react"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <Navbar />
      <div className="min-h-screen h-full bg-blue-400 text-center px-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-pacifico text-center pt-12 text-white">
          {frontmatter.title}
        </h1>
        <h3 className="text-white text-sm pt-12 font-semibold">{frontmatter.descriptionMain}</h3>
        <h4 className="text-white text-sm pt-6">{frontmatter.descriptionSecondary}</h4>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <Footer />
    </div>
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
      }
    }
  }
`
