import React from 'react'
import "./style.css"
import Pic from "../../assets/profilePic.JPG"

export default function Home() {
  return (
    <main className="Home">
        <h1>About Me</h1>        
        <img src = {Pic}/>
        <p>I'm an Electrical Engineering turned web developer who is interested in creating things. 
          I'm passionate about creating technology and being at the forefront of innovation. 
          I have experience working with linear circuits, as well as java, Python, and MATLAB code. 
          I love working with hands-on hardware projects in a fast-paced and collaborative environment. I am also currently in the univeristy of washington
          bootcamp for web development. I looking forward to making the transition into this new carrer field!
          I'm always looking for new ways to expand my knowledge in new and interesting subjects.
           </p>
    </main>
  )
}