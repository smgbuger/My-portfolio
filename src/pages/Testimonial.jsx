import React from "react";
import "./Testimonial.css";
import stars from "../assets/Stars.png";
import avater from "../assets/Avatar Image.png";
import kathrin from "../assets/kathrin murphy.png";
import kat from "../assets/kistine avarta.png";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial">
        <div className="testClient d-flex gap-4 flex-column text-start">
          <h5>Clients Feedback</h5>
          <h3>Customer testimonials</h3>
        </div>
        {/* ============== */}
        <div className="subTestimonial">
          <div className="cardTest">
            <div className="stars text-start">
              <img src={stars} width={120} alt="stars" />
            </div>
            <div className="testPara text-start">
              <p>
                "Francis surpassed my expectations.His proficiency in both
                front-end and back-end technologies greatly enhanced the user
                experience of our project. From intuitive UI/UX design to
                smooth, efficient server-side functionality"
              </p>
            </div>
            <div className="testProfile text-start align-items-center d-flex gap-3 align-items-center">
              <img src={avater} width={50} alt="" />
              <div className="testName text-start align-items-center">
                <h6>Dianne Russell</h6>
                <p>Starbucks</p>
              </div>
            </div>
          </div>
          {/* ========= */}
          <div className="cardTest">
            <div className="stars text-start">
              <img src={stars} width={120} alt="stars" />
            </div>
            <div className="testPara text-start">
              <p>
                "SmgDev went beyond what I anticipated. His skillset in both
                front-end and back-end technologies played a key role in
                revolutionizing our project. From flawless UI/UX design to
                powerful server-side functionality, he provided outstanding
                results promptly"
              </p>
            </div>
            <div className="testProfile text-start align-items-center d-flex gap-3 align-items-center">
              <img src={kat} width={50} alt="" />
              <div className="testName text-start align-items-center">
                <h6>Kristin Watson</h6>
                <p>Louis Vuitton</p>
              </div>
            </div>
          </div>
          {/* =============== */}
          <div className="cardTest">
            <div className="stars text-start">
              <img src={stars} width={120} alt="stars" />
            </div>
            <div className="testPara text-start">
              <p>
                "He exceeded my expectations. His expertise in both front-end
                and back-end technologies helped transform our project. From
                seamless UI/UX design to robust server-side functionality, he
                delivered exceptional results on time"
              </p>
            </div>
            <div className="testProfile text-start align-items-center d-flex gap-3 align-items-center">
              <img src={kathrin} width={50} alt="" />
              <div className="testName text-start align-items-center">
                <h6>Kathryn Murphy</h6>
                <p>McDonald's</p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
