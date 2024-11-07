import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/image 1.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";
import linkedIn from "../assets/LinkedIn.png";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="firstFooter">
          <div className="linkName d-flex gap-1">
            <Link to={"/"} className="linkName ">
              <img src={navLogo} alt="logo" />
            </Link>
            <p className="smg">SmgDev</p>
          </div>
          {/* =================== */}
          <div className="links d-flex gap-5">
            <Link to={"/"} className="links">
              Home
            </Link>
            <Link to={"/portfolio"} className="links">
              Porfolio
            </Link>
            <Link to={"/aboutme"} className="links">
              About Me
            </Link>
            <Link to={"/testimonials"} className="links">
              Testimonials
            </Link>
            <Link to={"/portfolio"} className="links">
              Portfolio
            </Link>
          </div>
          {/* ==================== */}
          <div className="socials">
            <Link className="socials">
              <img src={facebook} alt="facebook" />
            </Link>
            <Link className="socials">
              <img src={instagram} alt="instagram" />
            </Link>
            <Link className="socials">
              <img src={twitter} alt="twitter" />
            </Link>
            <Link className="socials">
              {" "}
              <img src={linkedIn} alt="linkedIn" />
            </Link>
          </div>
        </div>
        {/* =================== */}
        <div className="secondFooter">
          <div className="subFooter d-flex justify-content-between">
            <div className="firstSubFooter">
              <p>Made with 💖 by Airdokan</p>
            </div>
            <div className="secondSubFooter">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookies Settings</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
