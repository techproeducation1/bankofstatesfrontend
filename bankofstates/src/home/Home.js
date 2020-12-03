import React from "react";
import banner from "../images/banner1.png";
import "./Home.css";
import Service from "../service/Service.js";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src={banner} alt="" />
      <div>
        <h1 className="service">Different Types of Services</h1>
        <Service />
      </div>
    </div>
  );
}

export default Home;
