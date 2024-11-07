import React from "react";
import Home from "./Home";
import "./MySkills.css";
import webFlow from "../assets/Webflow Development.png";
import tag from "../assets/Branding & Logo.png";
import uiUx from "../assets/UI & UX Design.png";
import replier from "../assets/Strategy & Direction.png";

const MySkills = () => {
  return (
    <>
      <div className="mySkills">
        <div className="firstDiv">
          <h5>My Skills</h5>
          <h2>My Expertise</h2>
        </div>
        {/* ==================second div=========================== */}

        <div className="secondDiv">
          {/* ===============first card============== */}
          <div className="firstCard">
            <div className="insideCard1">
              <img src={replier} alt="" />
              <div className="subCard">
                <h3>Responsive Design</h3>
                <p>
                  My web design approach is to make web pages render well on all
                  screen sizes and resolutions while ensuring good usability.
                </p>
              </div>
            </div>
          </div>
          {/* ================second card=================== */}
          <div className="secondCard">
            <div className="insideCard2">
              <img src={tag} alt="" />
              <div className="subCard1">
                <h3>Front-End Frameworks</h3>
                <p>
                  I'm familiar with other frameworks but i choose to use I use
                  React framework but because of its Built-in features,
                  Compatibility, User base.
                </p>
              </div>
            </div>
          </div>
          {/* ================================ */}
          <div className="secondCard">
            <div className="insideCard2">
              <img src={uiUx} alt="" />
              <div className="subCard1">
                <h3>Testing and Debugging</h3>
                <p>
                  I use different methods to test and debug my source codes
                  before production their baby making swift and responsive web
                  application
                </p>
              </div>
            </div>
          </div>
          {/* ================================== */}
          <div className="secondCard">
            <div className="insideCard2">
              <img src={webFlow} alt="" />
              <div className="subCard1">
                <h3>Cloud Services</h3>
                <p>
                  I use a variety of Cloud services for the infrastructure,
                  applications, development tools, and data storage e.g MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ======================================= */}
      </div>
    </>
  );
};

<Home />;
export default MySkills;
