import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <div className="contactMe">
        <div className="contactMeHeader d-flex flex-column">
          <h6>Get In Touch</h6>
          <div className="contactMeSub d-flex flex-column gap-4">
            <h2>Contact me</h2>
            <p>Our enhanced reply mechanizing got you covered. </p>
          </div>
        </div>
        {/* ========= */}

        <form className="formPage d-flex flex-column gap-4 m-auto  text-start justify-content-between">
          <div className="names d-flex  gap-4">
            <div className="d-flex gap-5">
              <div className="firstName d-flex flex-column">
                <label htmlFor="inputName" className="form-label d-flex">
                  First name
                </label>
                <input type="text" name="firstname" id="inputName" />
              </div>
            </div>

            <div className="d-flex gap-4">
              <div className="firstName d-flex flex-column text-start">
                <label htmlFor="inputName" className="form-label">
                  Last name
                </label>
                <input type="text" name="lastname" id="inputName" />
              </div>
            </div>
          </div>
          {/* ================================ */}

          <div className="d-flex gap-4">
            <div className="d-flex gap-4">
              <div className="firstName d-flex flex-column text-start">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" name="" id="inputEmail4" />
              </div>
            </div>

            <div className="d-flex gap-4">
              <div className="firstName text-start d-flex flex-column">
                <label htmlFor="number" className="form-label">
                  Phone Number
                </label>
                <input type="number" name="phoneNumber" id="inputNumber" />
              </div>
            </div>
          </div>
          {/* ============================= */}

          <div className="textArearr text-start d-flex gap-4 flex-column">
            <label htmlFor="textArea">Message...</label>
            <textarea
              className="message"
              placeholder="Type your message here..."
              name="textArea"
              id=""
              cols="60"
              rows="10"
            ></textarea>

            <div className="">
              <div className="d-flex gap-2">
                <input className="" type="checkbox" id="gridCheck" />
                <label className="" for="gridCheck">
                  I accept the terms
                </label>
              </div>
            </div>
          </div>

          {/* =========================== */}
          <div class="">
            <button class="formButton" type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactMe;
