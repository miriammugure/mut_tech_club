import React from "react";
import Card from "./Cards";
import "./Testimonials.css";
import miriamImg from "../../../assets/miriam.jpeg";
import kiamaImg from "../../../assets/kiama.jpeg";
import katamiiImg from "../../../assets/katamii .jpeg";
function Testimonials() {
  return (
    <div className="testimonials">
      <div className="card-title">
        <h2>testimonials</h2>
      </div>
      <section className="container-testimonials">
        <Card
          image={miriamImg}
          fullname={"miriam mugure"}
          text={
            "The MUT Tech Club was instrumental in my career. The hands-on projects and supportive community honed my skills and prepared me for real-world challenges. I wouldn't be where I am today without the experiences and connections I made through the club."
          }
        />
        <Card
          image={kiamaImg}
          fullname={"wilfred kiama"}
          text={
            "Being part of the MUT Tech Club was a transformative experience. The exposure to cutting-edge technology and the collaborative environment boosted my confidence and technical abilities. The friendships and professional network I built here continue to benefit my career."
          }
        />
        <Card
          image={katamiiImg}
          fullname={"lydia wambui"}
          text={
            "The MUT Tech Club offered unparalleled opportunities for growth. From engaging workshops to innovative projects, I gained practical skills that set me apart in the job market. The mentorship and support from peers and faculty were invaluable in my journey"
          }
        />
      </section>
    </div>
  );
}

export default Testimonials;
