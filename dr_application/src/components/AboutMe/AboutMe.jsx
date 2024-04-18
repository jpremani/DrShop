import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="AboutMe_Container">
      <div className="about-header">
        <h5>A Little About Me</h5>
        <button>Follow +</button>
      </div>
      <div className="about-mainsection">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        asperiores doloremque, iure consectetur officiis perspiciatis, quaerat
        ab numquam debitis temporibus molestias neque nihil veritatis dolorum
        pariatur. Officia aut consequuntur nesciunt.
      </div>
      <div className="about-footer">
        <div className="footer">
          <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            Language Spoken
          </span>
          <div>
            <span>English</span>
            <span>Hindi</span>
            <span>Telugu</span>
          </div>
        </div>
        <div className="footer-logo">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-youtube"></i>
          <i class="bi bi-twitter-x"></i>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
