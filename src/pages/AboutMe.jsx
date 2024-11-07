import React from "react";
import "./AboutMe.css";
import aboutMe from "../assets/About Me.png";

const AboutMe = () => {
  return (
    <>
      <div className="aboutMeDiv">
        <div className="mainAbout">
          <img src={aboutMe} alt="humanphoto" width={700} />
        </div>
        {/* ================= */}
        <div className="secondAboutDiv">
          <div className="about">
            <h6>About</h6>
            <h4>About Me</h4>
          </div>
          <div className="aboutMeText">
            <p>
              Francis is JavaScript full-stack web developer and i'm proficient
              in both front-end and back-end development using JavaScript and
              related frameworks. On the front end, I work with libraries and
              frameworks like React, Angular, or Vue.js to build responsive,
              dynamic user interfaces. For back-end development, I leverage
              Node.js and frameworks such as Express to handle server-side
              logic, database interaction, and API development. I am skilled in
              working with databases, often using NoSQL solutions like MongoDB
              or relational databases like PostgreSQL and MySQL.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
