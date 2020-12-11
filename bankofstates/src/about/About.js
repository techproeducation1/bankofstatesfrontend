import React from "react";
import about from "../images/ebank.png";
import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import "./About.css";

function About() {
  return (
    <div className="about-us-area pdt-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-8 align-self-center">
            <div className="about-us-wrap">
              <img className="thumb" src={about} alt="img" />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="about-us-details">
              <div className="section-title">
                <h6 className="subtitle">About The E-Banking</h6>
                <h2 className="title">
                  Everything is possible. We can help you achieve your goals!
                </h2>
                <p>
                  Online banking can save you a lot of time and effort, you can
                  undertake most transactions from the comforts of your home.
                  However, it is crucial to use internet banking safely.
                </p>
              </div>
              <div className="media media-1">
                <div className="media-left">
                  <img src={about1} alt="img" />
                </div>
                <div className="media-body">
                  <p>
                    Nro eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus dolor sit.
                  </p>
                </div>
              </div>
              <div className="media media-2">
                <div className="media-left">
                  <img src={about2} alt="img" />
                </div>
                <div className="media-body">
                  <p>
                    Easy pament process belief Lorem Ipsum is not simply random
                    text. It has roots in a McClintock.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
