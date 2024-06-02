import React from "react";
import { GiDart } from "react-icons/gi";
import { FaEye, FaHandHoldingHeart } from "react-icons/fa";
import Box from "./Box";
import "./About.css";
import Title from "../../../components/Title/Title";
function About() {
  return (
    <div className="about">
       < Title titleName={"about"}/>
      <section className="container-about">
        <Box
          icon={<GiDart />}
          value={"mission"}
          text={
            "The MUT Tech Club empowers students through innovative technology, collaborative projects, and skill-building workshops for future readiness."
          }
        />
        <Box
          icon={<FaEye />}
          value={"vision"}
          text={
            "The MUT Tech Club envisions a future led by innovative, tech-savvy, and socially responsible students."
          }
        />
        <Box
          icon={<FaHandHoldingHeart />}
          value={"values"}
          text={
            "The MUT Tech Club values innovation, collaboration, inclusivity, continuous learning, and ethical technology use for societal benefit."
          }
        />
      </section>
    </div>
  );
}

export default About;
