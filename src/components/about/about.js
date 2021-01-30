import Img from "gatsby-image"
import React from "react"

export default function About({ data }) {
  return (
    <div className="min-h-screen h-full bg-blue-400 text-center">
      <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-pacifico py-12">
        About
      </h2>
      <div className="flex flex-col justify-center">
        <div>
          <Img
            fluid={data.about.childImageSharp.fluid}
            alt="A picture of myself"
            className="h-64 w-64 rounded-full mb-12 mx-auto border-blue-900 border-solid border-4"
          />
        </div>
        <div>
          <p className="text-white pb-8 text-sm px-1">
            I have lived in Charlotte, North Carolina since 2005. I’m originally
            from Long Island, New York and lived in Southern Florida for about 2
            years before settling in NC. Upon moving to Charlotte, I was able to
            kickstart my interest in technology and my natural love for art.
          </p>
          <p className="text-white pb-8 text-sm px-1">
            {" "}
            My passion for web development began in 2017 when I completed UNC
            Charlotte’s Full Stack Web Development course. Over a period of six
            months, I learned, networked, and built collaborative projects with
            colleagues. Since then, I've been involved with Full Stack
            Development for the last 3 years. Currently now, I work as a Open
            Source Software Support Engineer for Microsoft - on their Azure App
            Services Cloud Platform team(PaaS).
          </p>

          <p className="text-white pb-8 text-sm px-1">
            I am proficient with Javascript, React and Node.js.
          </p>
          <p className="text-white pb-8 text-sm px-1">
            I am familiar with and have worked with technologies such as Git,
            HTML5, CSS3, Responsive Design, a multitude of CSS and Javascript
            Frameworks/Libraries, SASS, jQuery, package managers such as
            NPM,YARN, REST APIs, State Management, SPA's and Static Site
            Generators, databases such as PostgreSQL and MySQL, and languages
            such as Python - including support tools such as Active Directory,
            SCCM, VMWare and Citrix.
          </p>
        </div>
      </div>
    </div>
  )
}
