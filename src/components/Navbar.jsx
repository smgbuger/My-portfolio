import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import navLogo from "../assets/image 1.png";

const Navbar = () => {
  return (
    <div>
      <nav className="nav d-flex justify-content-between align-items-center px-5">
        <div className="linkName d-flex gap-1">
          <Link to={"/"} className="linkName ">
            <img src={navLogo} alt="logo" />
          </Link>
          <p className="smg">SmgDev</p>
        </div>
        <div className="links d-flex gap-5">
          <Link to={"/"} className="links">
            Home
          </Link>
          <Link to={"/portfolio"} className="links">
            Portfolio
          </Link>
          <Link to={"/aboutme"} className="links">
            About Me
          </Link>
          <Link to={"/testimonials"} className="links">
            Testimonials
          </Link>
        </div>
        <Link to={"/contactme"}>
          {" "}
          <button className="navButton">Contact Me</button>
        </Link>{" "}
      </nav>
    </div>
  );
};
export default Navbar;
