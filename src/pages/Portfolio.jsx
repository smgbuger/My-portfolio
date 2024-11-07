import React from "react";
import "./Portfolio.css";
import Home from "./Home";
import gitHub from "../assets/github.png";
import imageOne from "../assets/Image.png";
import imageTwo from "../assets/Imagee.png";
import imageThree from "../assets/Iimage.png";
import arrow from "../assets/arrow.png";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div className="viewGitHub d-flex">
          <div className="porfolioProf">
            <h6>Recent Projects</h6>
            <h3>My Portfolio</h3>
          </div>

          <div>
            <button className="gitHub d-flex gap-2" to={"/github"}>
              <img src={gitHub} alt="" />
              Visit My GitHub
            </button>
          </div>
        </div>
        {/* ============================ */}
        <div className="portCard">
          <div className="port1 d-flex flex-column">
            <div className="subPortt">
              <img src={imageOne} alt="" width={450} />
              <div className="content">
                <h5>Fylo Page</h5>
                <p>
                  Fylo is a cloud storage solution offering secure file sharing,
                  collaboration, and easy access for individuals and teams.
                </p>
              </div>
              <div className="subPort d-flex gap-3 px-4 py-4 align-items-center text-center">
                <h4>View website</h4>
                <img src={arrow} alt="" width={20} height={20} />
              </div>
            </div>
          </div>
          {/* ============= */}
          <div className="port1 d-flex flex-column">
            <div className="subPortt">
              <img src={imageTwo} alt="" width={450} />
              <div className="content">
                <h5>Advice Generator</h5>
                <p>
                  The Advice Generator app offers random, insightful advice,
                  helping users gain perspective and motivation with
                  personalized, positive suggestions.
                </p>
              </div>
              <div className="subPort d-flex gap-3 px-4 py-4 align-items-center text-center">
                <h4>View website</h4>
                <img src={arrow} alt="" width={20} height={20} />
              </div>
            </div>
          </div>
          {/* ====================== */}
          <div className="port1 d-flex flex-column">
            <div className="subPortt">
              <img src={imageThree} alt="" width={450} />
              <div className="content">
                <h5>Movie Hub</h5>
                <p>
                  Movie Hub is a streaming platform offering a vast collection
                  of movies, TV shows, and personalized recommendations for
                  entertainment enthusiasts.
                </p>
              </div>
              <div className="subPort d-flex gap-3 px-4 py-4 align-items-center text-center">
                <h4>View website</h4>
                <img src={arrow} alt="" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

<Home />;
export default Portfolio;
