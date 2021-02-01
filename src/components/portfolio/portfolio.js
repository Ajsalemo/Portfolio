import { Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
const path = require("path")

export default function Portfolio({ data }) {
  return (
    <div className="bg-black min-h-screen h-full pb-12" id="portfolio">
      <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-pacifico py-12 text-center">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.allPortfolioImages.edges.map((src, i) => (
          <Link
            // Use nodes 'path' module to get the filename without the extension, which it does when the second arg to path.basename is provided in the form of path.extname
            to={path.basename(
              src.node.childImageSharp.fluid.src,
              path.extname(src.node.childImageSharp.fluid.src)
            )}
            key={path.basename(
              src.node.childImageSharp.fluid.src,
              path.extname(src.node.childImageSharp.fluid.src)
            )}
            className="hover:border-blue-900 border-black border-4 transition ease-in-out duration-700 rounded"
          >
            <Img
              fluid={src.node.childImageSharp.fluid}
              className="h-fit"
              alt="Images of portfolio projects"
              key={`${i} - ${src.node.childImageSharp.fluid.src.replace(
                /^.*[\\/]/,
                ""
              )}`}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
