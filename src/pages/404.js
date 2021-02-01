import Footer from "@components/footer/footer"
import Navbar from "@components/navbar/navbar"
import SEO from "@components/seo/seo"
import { Link } from "gatsby"
import Img from "gatsby-image"
import React, { Fragment } from "react"

export default function PageNotFound({ data }) {
  return (
    <Fragment>
      <SEO title="Page Not Found" />
      <Navbar />
      <div className="min-h-screen h-full bg-black flex flex-col justify-center text-center">
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="h-64 w-64 md:h-80 md:w-80 lg:w-96 lg:h-96 rounded-full mx-auto border-white hover:border-blue-900 border-solid border-4 transition ease-in-out duration-700"
          alt="Page not found grahic"
        />
        <span className="text-white mt-8">
          Nothing to see here. Go{" "}
          <Link
            to="/"
            className="hover:text-blue-900 transition ease-in-out duration-700"
          >
            home
          </Link>
          .
        </span>
      </div>
      <Footer />
    </Fragment>
  )
}

export const notFoundQuery = graphql`
  query NotFoundQuery {
    file(relativePath: { eq: "general/404.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
