import Footer from "@components/footer/footer"
import Navbar from "@components/navbar/navbar"
import SEO from "@components/seo/seo"
import React, { Fragment } from "react"

export default function Home() {
  return (
    <Fragment>
      <SEO title="Page Not Found" />
      <Navbar />
      <div className="min-h-screen h-full"></div>
      <Footer />
    </Fragment>
  )
}
