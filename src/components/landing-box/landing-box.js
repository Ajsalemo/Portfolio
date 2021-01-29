import React from "react"

export default function LandingBox() {
  return (
    <div className="bg-black bg-opacity-75 absolute right-1/10 top-1/4 sm:right-1/4 w-4/5 h-1/2 sm:w-1/2 sm:h-1/2 rounded-lg">
      <div className="text-white text-center flex flex-col h-3/4 justify-center">
        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-pacifico pb-4">Hi, my name is</h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-pacifico">Anthony Salemo</h1>
      </div>
      <div className="text-white flex justify-around">
        <a href="#">Placeholder</a>
        <a href="#">Placeholder</a>
        <a href="#">Placeholder</a>
        <a href="#">Placeholder</a>
      </div>
    </div>
  )
}
