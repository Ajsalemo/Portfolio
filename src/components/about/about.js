import ScrollTo from "@components/scrollto/scrollto"
import Img from "gatsby-image"
import React from "react"

export default function About({ data }) {
  return (
    <div
      className="min-h-screen h-full bg-blue-400 text-center px-4 md:px-16"
      id="about"
    >
      <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-pacifico py-12">
        About
      </h2>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="md:w-1/2">
          <Img
            fluid={data.about.childImageSharp.fluid}
            alt="A picture of myself"
            className="h-64 w-64 md:h-80 md:w-80 lg:w-96 lg:h-96 rounded-full mb-12 mx-auto border-blue-900 border-solid border-4"
          />
        </div>
        <div className="md:w-1/2">
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
            Services Cloud Platform team(PaaS) engaging with a wide variety of
            technical and soft skill tasks both internal and through customer
            interaction.
          </p>
          <p className="text-white pb-8 text-sm px-1">
            I am proficient with Javascript, React and Node.js.
          </p>
          <p className="text-white pb-2 text-sm px-1">
            I either currently or have worked with technologies such as:
          </p>
          <ul className="text-white pb-8 text-sm px-1">
            <li>
              <b>Languages</b>: HTML5, Javascript, Typescript, Python, Java, C#
              and Bash
            </li>
            <li>
              <b>Source Control:</b> Such as Git, Github and Azure's Kudu
            </li>
            <li>
              <b>Deployment</b>: Integrating projects with Gitlab CI/CD, Azure
              DevOps pipelines, and various other Azure methods such as Oryx
              build agent, VSCode/Visual Studio deployment and ZipDeploy, as
              well as deployment through FTP using FileZilla or WinSCP.
            </li>
            <li>
              <b>Operating systems:</b> Windows and Linux, including virtualized
              OS management with the use of Linux VM's. Linux distributions like
              Ubuntu and Alpine.
            </li>
            <li>
              <b>Containerization:</b> Containerizing applications with the use
              of Docker and Docker-compose for both Windows and Linux
            </li>
            <li>
              <b>Package Managers and CLI tools:</b> Such as NPM, Yarn, Pip and
              Pipenv, Maven, APT and APT-GET, APK, AZ CLI, Github CLI, PSQL and
              others
            </li>
            <li>
              <b>Web and Application Servers:</b> Apache, NGINX, IIS, Tomcat,
              Pm2, Gunicorn and others
            </li>
            <li>
              <b>Application libraries and frameworks: </b>
              <i>Python </i>-<b> Flask and Django. </b> <i>Java </i>-
              <b> Springboot. </b>
              <i>C# </i>- <b>ASP .NET Core. </b>
              <i>Javascript </i>-{" "}
              <b>Node, Express, React, Gatsby, Angular, Next and Vue</b>
            </li>
            <li>
              <b>CSS libraries and frameworks: </b>Styled Components, Material
              UI, TailwindCSS, Materialize, Bulma, Bootstrap as well as CSS3 and
              SCSS
            </li>
            <li>
              <b>Databases: </b>PostgreSQL, MySQL and MongoDB
            </li>
            <li>
              <b>Authentication: </b>Auth0, Firebase, JWT
            </li>
            <li>
              <b>Others: </b> Other various technologies such as WordPress,
              Apollo, GraphQL, Firestore, load testers and performance
              profilers, REST API implementation; Additionally concepts and
              practices such as debugging, Mobile and Responsive design, SEO,
              User Interface(UI)/User Experience(UX) and Accessibility
            </li>
          </ul>
          <p className="text-white pb-8 text-sm px-1">
            Outside of work I am still very much involved with full stack
            development and am keen on experimenting with different types of
            stacks and technologies. I also enjoy playing guitar, exploring new
            areas, travelling, house and car projects, music, and gaming.
          </p>
        </div>
      </div>
      <ScrollTo location="#landing" />
    </div>
  )
}
