import React from "react";
import "../CSS/Education.css";

function Education() {
  return (
    <>
      <div id="EduSec">
        <h1>Education</h1>
      </div>

      <div id="EducationSec">
        <div id="EnggSec">
          <button id="Enggbtn">2013-2017</button>
          <p id="Degr">Bachelor of Technology in Mechanical Engineering</p>
          <p id="DegrClz">Sai Ganapathi Engineering College</p>
        </div>
        <div id="IntrSec">
          <button id="Intrbtn">2011-2013</button>
          <p id="intr">Senior Secondary (10+2) – M.P.C</p>
          <p id="intrClz">Sri Surya Junior College</p>
        </div>
      </div>
    </>
  );
}

export default Education;
