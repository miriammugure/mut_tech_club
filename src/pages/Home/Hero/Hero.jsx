import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero-container">
      <div className="text-box">
        <div className="title">
          <h3>mut tech club</h3>
        </div>
        <div className="description">
          <p className="top-part">Empowering Innovators, Shaping Tomorrow</p>
          <p className="middle">Join the revolution at MUT Tech Club!</p>
          <p className="text">
            {" "}
            Discover the future of technology, collaborate with like-minded
            innovators, and turn your ideas into reality. Whether you're a
            coding novice or a tech guru, our community is your gateway to
            learning, growth, and endless possibilities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
