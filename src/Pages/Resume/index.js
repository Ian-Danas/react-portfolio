import React from 'react'
import "./style.css"
import Pdf from '../../assets/Resume.pdf'

export default function Home() {
  return (
    <main className="Resume">
        <h1>Resume</h1> 
        <p> Download my resume <a href={Pdf} target = '_blank'>here</a> </p>
        <h2>Front-End Proficiencies </h2>
        <ul>    
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>BootStrap</li>
        </ul>    
        <h2>Back-End Proficiencies </h2>
        <ul>    
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB,Mongoose</li>
          <li>REST</li>
        </ul>    

    </main>
  )
}