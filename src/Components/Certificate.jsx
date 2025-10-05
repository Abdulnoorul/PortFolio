import React from "react";
import "../CSS/Certificate.css";

function Certificate() {
  return (
    <>
      <div id="CertificateSec">
        <div id="certHead">
          <h1 id="cHead">Certificate's</h1>
        </div>

        <div id="certSect">
          <div id="GuviCert">
            <img
              className="gcimg"
              src="/GuviCertification.png"
              alt="Guvi Certificate"
            />
          </div>
          
          <div id="outCert">
            <img 
            className="gcimg" 
            src="/OutSkill_Certificate.JPG" 
            alt="OutSkill Certificate" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificate;
