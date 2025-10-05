import React, { useEffect, useState } from "react";
import "../CSS/Skills.css";

const skillsData = {
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Bootstrap", level: 70 },
    { name: "Tailwind CSS", level: 70 },
  ],
  backend: [
    { name: "Java", level: 85 },
    { name: "Spring Core/MVC/Boot", level: 80 },
    { name: "Spring JDBC/JPA", level: 75 },
    { name: "REST API", level: 80 },
  ],
  database: [
    { name: "MySQL", level: 80 },
    { name: "Oracle DB", level: 65 },
  ],
  devtools: [
    { name: "Git/GitHub", level: 85 },
    { name: "Docker", level: 60 },
    { name: "Postman", level: 60 },
    { name: "Kubernetes", level: 60 },
  ],
  testing: [
    { name: "JUnit", level: 75 },
    { name: "Mockito", level: 70 },
  ],
  cloud: [
    { name: "Microservices", level: 75 },
    { name: "AWS Basics", level: 60 },
  ],
};

function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillSection = document.getElementById("SkillSec");
      if (!skillSection) return;

      const top = skillSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8) {
        setVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="SkillSec">
      <div id="skillHead">
        <h1>Skill's</h1>
      </div>

      {/* Row 1: Frontend + Backend */}
      <div className="skills-row1">
        <div className="category">
          <h3 className="category-title">FRONTEND</h3>
          {skillsData.frontend.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="skill-name">{skill.name}</div>
              <div className="progress-bar">
                <div
                  className="progress frontend"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    transition: "width 2s ease",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="category">
          <h3 className="category-title">BACKEND</h3>
          {skillsData.backend.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="skill-name">{skill.name}</div>
              <div className="progress-bar">
                <div
                  className="progress backend"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    transition: "width 2s ease",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Database + DevTools */}
      <div className="skills-row2">
        <div className="category">
          <h3 className="category-title">DATABASE</h3>
          {skillsData.database.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="skill-name">{skill.name}</div>
              <div className="progress-bar">
                <div
                  className="progress database"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    transition: "width 2s ease",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="category">
          <h3 className="category-title">DEVOPS & TOOLS</h3>
          {skillsData.devtools.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="skill-name">{skill.name}</div>
              <div className="progress-bar">
                <div
                  className="progress devtools"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    transition: "width 2s ease",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: Testing + Cloud */}
      <div className="skills-row3">
        <div className="category">
          <h3 className="category-title">TESTING</h3>
          {skillsData.testing.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="skill-name">{skill.name}</div>
              <div className="progress-bar">
                <div
                  className="progress testing"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    transition: "width 2s ease",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="category">
          <h3 className="category-title">CLOUD & MICROSERVICES</h3>
          {skillsData.cloud.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="skill-name">{skill.name}</div>
              <div className="progress-bar">
                <div
                  className="progress cloud"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    transition: "width 2s ease",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
