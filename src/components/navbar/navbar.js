import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav className="bg-black flex justify-end items-center text-white text-sm h-12 pr-4">
      <Link to="/">Home</Link>
      <Link to="/portfolio" className="pl-2">
        Portfolio
      </Link>
      <Link to="/about" className="pl-2">
        About
      </Link>
    </nav>
  )
}
