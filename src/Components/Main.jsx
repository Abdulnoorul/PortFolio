import React from 'react'
import "../CSS/Main.css"

function Main() {
  return (
    <>
      <div id="Main">
        <div id="abtMeSec">
          <p id="abtme">About Me</p>
        </div>
        <div id="Summ">
          <p id="semsec">
            Professional with 5 years of experience, including 2+ years in IT,
            transitioning from publishing and editorial management to excel as a
            full-stack web developer. Skilled in React, Spring Boot, Java,
            MySQL, HTML, CSS, JavaScript, and tools like Git, Docker, and
            Kubernetes, with proven expertise in Agile-Scrum, SDLC, and
            microservices. Key highlights include designing responsive journal
            platform interfaces, building a secure message encryption app
            (WisperTalk) with React and Spring Boot, and developing a real-time
            chat app (Ping Mate) using Firebase. Quick to adapt, I thrive in
            collaborative, fast-paced environments, bringing a unique
            problem-solving perspective from my diverse background. Certified in
            Generative AI (Prompt Engineering, OpenAI GPT-4o, Claude 3), I am
            eager to contribute technical expertise to a Full-Stack Developer or
            Software Engineer role, driving innovation and growth.
          </p>
        </div>
      </div>
      <div id="btndiv">
        <div id="btnicn">
          <a href="#Experi">
            <button className="ibtnname">
              <img
                src="/Experience.png"
                alt="ExperienceLogo"
                className="icoons"
                title="Experience"
              />
            </button>
          </a>

          <a href="#Proj">
            <button className="ibtnname">
              <img
                src="/project.png"
                alt="ProjectLogo"
                className="icoons"
                title="Projects"
              />
            </button>
          </a>

          <a href="#EduSec">
            <button className="ibtnname">
              <img
                src="/education.png"
                alt="EducationLogo"
                className="icoons"
                title="Education"
              />
            </button>
          </a>

          <a href="#SkillSec">
            <button className="ibtnname">
              <img
                src="/skill.png"
                alt="SkillLogo"
                className="icoons"
                title="Skills"
              />
            </button>
          </a>

          <a href="#CertificateSec">
            <button className="ibtnname">
              <img
                src="/certificate.png"
                alt="CertificateLogo"
                className="icoons"
                title="Certificates"
              />
            </button>
          </a>

          <a href="#ContSec">
            <button className="ibtnname">
              <img
                src="/communicate.png"
                alt="CommuincationLogo"
                className="icoons"
                title="Contacts"
              />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Main
