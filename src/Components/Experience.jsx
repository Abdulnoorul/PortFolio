import React from "react";
import "../CSS/Experience.css";

function Experience() {
  return (
    <>
      <div id="Experi">
        <p id="ExperiE">Experience</p>
      </div>

      <div id="ExpSect">
        <div id="WebExp">
          <h1 id="ExpTitle">Web Developer</h1>
          <h3 id="JobTitle">OMICS International Pvt. Ltd - (2021 – 2024)</h3>
          <ul id="listBull">
            <li>
              Designed and maintained front-end interfaces for multiple journal
              platforms at OMICS Inter national Pvt. Ltd., including Walsh
              Medical Media and other publishers, creating intuitive and
              visually appealing layouts using HTML, CSS, JavaScript, and
              Bootstrap alongside a talented team.
            </li>
            <li>
              Built responsive web pages that ensured seamless functionality
              across devices, delivering engaging user experiences for various
              journal platforms under multiple publishers.
            </li>
            <li>
              Collaborated with content editors and designers to integrate
              journal content thoughtfully, enhancing readability and user
              engagement through careful front-end design.
            </li>
            <li>
              Enhanced UI components to ensure journal platforms were
              user-friendly and functional, aligning with team goals across
              diverse publisher portfolios.
            </li>
          </ul>
        </div>

        <div id="AmeExp">
          <h1 id="amExp">Assistant Managing Editor</h1>
          <h3 id="Cmpny">OMICS International Pvt. Ltd - (2019 – 2021)</h3>
          <ul id="listBullet">
            <li>
              Collected and structured data related to journal articles and
              maintained accurate records across internal systems.
            </li>
            <li>
              Coordinated the end-to-end process of manuscript handling for
              academic journals, from submission to final publication.
            </li>
            <li>
              Processed and tracked manuscripts using Editorial Tracking (ET)
              and Manuscript Tracking (MT) systems, ensuring seamless workflow
              and timely updates.
            </li>
            <li>
              Performed thorough proofreading and basic content editing to
              maintain clarity and consistency in manuscripts to maintain high
              editorial standards and publication quality.
            </li>
            <li>
              Drafted professional email templates for author outreach,
              enhancing communication efficiency and engagement.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Experience;
