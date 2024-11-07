import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="firstFooter">
          <div className="linkName d-flex gap-1">
            <Link to={"/"} className="linkName ">
              <img src="/src/assets/image 1.png" alt="logo" />
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
              <img
                src="/src/assets/Placeholder/Placeholder/Facebook.png"
                alt="facebook.com/smartgee001"
              />
            </Link>
            <Link className="socials">
              <img
                src="/src/assets/Placeholder/Placeholder/Instagram.png"
                alt="instagram"
              />
            </Link>
            <Link className="socials">
              <img
                src="/src/assets/Placeholder/Placeholder/Twitter.png"
                alt="twitter"
              />
            </Link>
            <Link className="socials">
              {" "}
              <img
                src="/src/assets/Placeholder/Placeholder/LinkedIn.png"
                alt="linkedIn"
              />
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
