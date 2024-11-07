import React from "react";
import heroImage from "../assets/Group 11 1.png";

const Home = () => {
  return (
    <section className="firstSection d-flex">
      <div className="heroOne d-flex ">
        <p>Hey, I am Francis</p>
        <h2>I develop dynamic and User-Centered Web Applications</h2>
        <p>
          My expertise spans both front-end and back-end development, enabling
          me to build comprehensive solutions that meet diverse client needs.
        </p>
        <div>
          <button className="heroButton">Get In Touch</button>
        </div>{" "}
      </div>

      {/* ============ */}
      <div>
        <img src={heroImage} alt="" width={700} height={600} />
      </div>
    </section>
  );
};

export default Home;
