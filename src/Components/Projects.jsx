import React from "react";
import "../CSS/Projects.css";

function Projects() {
  return (
    <>
      <div id="Proj">
        <p id="ProjHead">Projects</p>
      </div>

      <div id="ProjSec">
        <div id="liProjI">
          <img src="/WT-main-logo.png" alt="WisperTalk" id="proIcon" />
          <ul id="probull">
            <li>
              Built a secure full-stack web application using React (frontend)
              and Spring Boot with JPA (backend) to enable real-time text
              encryption and decryption with password-based access.
            </li>
            <li>
              Developed RESTful APIs in Spring Boot for message
              encryption/decryption, integrated with a MySQL database using JPA
              repositories to ensure secure and persistent message storage.
            </li>
            <li>
              Integrated frontend and backend using Axios & REST APIs, achieving
              smooth communication between React and Spring Boot services hosted
              on Netlify & Railway, ensuring scalability and deployment
              efficiency.
            </li>
          </ul>
          <a href="https://wispertalk.netlify.app/">
            <button id="wtbtn">Click to View</button>
          </a>
        </div>

        <div id="liProjII">
          <img src="/cicon.png" alt="PingMate" id="proIconI" />
          <ul id="probullII">
            <li>
              Developed a full-stack real-time chat application using React for
              the front-end and Firebase for backend services including
              authentication and data storage.
            </li>
            <li>
              Built a secure chatroom where authenticated users can send and
              receive real-time messages using Firebase Firestore and onSnapshot
              listeners.
            </li>
            <li>
              Created a clean user interface with dynamic routing using React
              Router, including protected routes that restrict access to the
              chat room for unauthorized users.
            </li>
            <li>
              Implemented user authentication (Sign Up / Login) using Firebase
              Authentication with email-password login flow.
            </li>
          </ul>
          <a href="https://psych-pingmate.netlify.app/">
            <button id="pmbtn">Click to View</button>
          </a>
        </div>
        <div id="liProjIII">
          <img src="/Aurora.png" alt="AuroraCast" id="proIconII" />
          <ul id="probullIII">
            <li>
              Built a dynamic weather forecasting web application using React
              and integrated with the Weather API to fetch real-time weather
              data based on user input (city or district name).
            </li>
            <li>
              Implemented API data handling using useEffect and useState to
              retrieve and update weather information dynamically, including
              temperature, humidity, sunrise/sunset, moonrise/moonset, and
              location details.
            </li>
            <li>
              Developed a responsive UI that updates the background animation
              (GIF) and Video based on the current weather condition for an
              enhanced user experience.
            </li>
          </ul>
          <a href="https://aurora-cast.netlify.app/">
            <button id="acbtn">Click to View</button>
          </a>
        </div>
        <div id="liProjIV">
          <img src="/NN12.png" alt="NewsNow" id="proIconIII" />
          <ul id="probullIV">
            <li>
              Delivers curated, real-time news across 8 key categories
              (Politics, Business, Sports, Health, Science, Technology,
              Entertainment, and Lifestyle), plus a dedicated headlines section,
              focusing on India-centric content for targeted relevance.
            </li>
            <li>
              Integrates the NewsData.io API to fetch and display the latest
              articles, ensuring users receive up-to-date, reliable information
              with automatic deduplication of content for a clean,
              non-repetitive feed.
            </li>
            <li>
              Built with React and React Router for seamless navigation between
              home, categories, and individual sections, providing a fast,
              responsive user experience without full page reloads.
            </li>
          </ul>
          <a href="https://psych-news-now.netlify.app/">
            <button id="nnbtn">Click to View</button>
          </a>
        </div>
        <div id="liProjV">
          <img src="/logo-TN.png" alt="TravelNest" id="proIconIV" />
          <ul id="probullV">
            <li>
              Designed and developed a responsive bus ticket booking web
              application that allows users to input travel and passenger
              details to generate a downloadable PDF ticket.
            </li>
            <li>
              Utilized the jsPDF and jspdf-autotable libraries to dynamically
              generate a visually formatted ticket PDF, including journey
              information, passenger details, contact data, and branding.
            </li>
            <li>
              Implemented form validation and conditional checks to prevent
              incorrect submissions (e.g., matching source and destination
              cities, or incomplete fields).
            </li>
            <li>
              Enabled city selection, date picking, and passenger data entry
              with real-time state management using React hooks (useState)
            </li>
            <li>
              Included an intuitive ”Swap City” feature to instantly switch the
              source and destination fields, improving UX.
            </li>
          </ul>
          <a href="https://psych-travel-nest.netlify.app/">
            <button id="tnbtn">Click to View</button>
          </a>
        </div>
        <div id="liProjVI">
          <a href="https://github.com/Abdulnoorul">
            <button id="morbtn">For More ...</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
