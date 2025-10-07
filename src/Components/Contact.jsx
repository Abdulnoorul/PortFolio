import React, { useState } from "react";
import "../CSS/Contact.css";

function Contact() {
  const [active, setActive] = useState(null);

  const clickForDetail = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <>
      <div id="ContSec">
        <div id="conSec">
          <h1 id="ConHead">Contact</h1>
        </div>
        <div id="ConnIcon">
          {/*First Row*/}
          <div className="icon-row">
            <div className="icon-box" onClick={() => clickForDetail(1)}>
              <img src="/Contact.png" alt="Contact" className="icon" />
              {active === 1 && <div className="details">+91-8309240354</div>}
            </div>
            <div className="icon-box" onClick={() => clickForDetail(2)}>
              <img src="/Git-Hub.png" alt="GitHub" className="icon" />
              {active === 2 && (
                <div className="details">
                  <a href="https://github.com/Abdulnoorul">Check My GitHub</a>
                </div>
              )}
            </div>
            <div className="icon-box" onClick={() => clickForDetail(3)}>
              <img src="/Gmaail.png" alt="Gmail" className="icon" />
              {active === 3 && (
                <div className="details">
                  <a href="mailto:noorulkhan.abdul@gmail.com">
                    noorulkhan.abdul@gmail.com
                  </a>
                </div>
              )}
            </div>
          </div>
          {/*Second Row*/}
          <div className="icon-row">
            <div className="icon-box" onClick={() => clickForDetail(4)}>
              <img src="/Linked-In.png" alt="LinkedIn" className="icon" />
              {active === 4 && (
                <div className="details">
                  <a href="https://www.linkedin.com/in/abdul-noorul-akhlaq-khan-53bb2b37a/">
                    Check LinkedIn
                  </a>
                </div>
              )}
            </div>
            <div className="icon-box" onClick={() => clickForDetail(5)}>
              <img src="/Location.png" alt="Location" className="icon" />
              {active === 5 && <div className="details">Hyderabad, India</div>}
            </div>
            <div className="icon-box" onClick={() => clickForDetail(6)}>
              <img src="/Line-WhatsApp.png" alt="WhatsApp" className="icon" />
              {active === 6 && (
                <div className="details">
                  <a href="https://api.whatsapp.com/send?phone=919010532452&text=Hello,%20thank%20you%20for%20reaching%20out%20through%20my%20portfolio.%20May%20I%20kindly%20ask%20you%20to%20introduce%20yourself%20and%20share%20a%20bit%20about%20the%20opportunity%20you're%20contacting%20me%20regarding?%20I%20look%20forward%20to%20hearing%20from%20you.">
                    Whatsapp Message
                  </a>
                  <br />
                  <br />
                  <a href="https://line.me/ti/p/LcqPsz-m-2">Line Message</a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div id="footer">
          <p id="Footpar">
            © 2025 Abdul Khan [アブドゥル ヌールル アクラク カーン] → Clean
            code, crafted with curiosity and care.
          </p>
        </div>
        <a href="#mainCon" id="btanch">
          <button id="TopBttn">&#9650;</button>
        </a>
      </div>
    </>
  );
}

export default Contact;
