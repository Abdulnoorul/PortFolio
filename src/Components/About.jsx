import React from 'react'
import "../CSS/About.css"

function About() {
  return (
    <>
      <div id="mainCon">
        <div className="topTitle">
          <img src="/CircularLogo.png" alt="portfolio Logo" id="plogo" />
          <p id="nameDet">Hey, I'm Abdul Noorul Akhlaq Khan</p>
          <p id="Jtitle">
            A Web Developer <br />& UI/UX Enthusiast
          </p>
          <p id="portTagLine">
            Full Stack Web Developer dedicated to crafting dynamic, responsive,
            and performance driven web solutions combining technical expertise
            with creativity to bring innovative digital products to life.
          </p>
        </div>

        <div className="display">
          <p>
            <img src="/MainImg.png" alt="DisplayPicture" id="image" />
          </p>
          <a href='#Main'>
            <button id="Abtme">About Me</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default About
