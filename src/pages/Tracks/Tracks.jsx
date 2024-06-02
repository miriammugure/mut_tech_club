import React from "react";
import "./Tracks.css";
import Track from "./track";
import cyberImg from "../../assets/cybersec.jpg";
import webImg from "../../assets/web.jpg";
import uiuxImg from "../../assets/uiux.jpeg";
import mobileImg from "../../assets/mobile.jpg";
import cloudImg from "../../assets/cloud.jpg";
import powerImg from "../../assets/powerplatform.jpg";

function Tracks() {
  return (
    <div>
      <div className="containerTrack">
        <div className="trackTitle">
          <h2>tracks</h2>
        </div>
        <div className="trackContainerBox">
          <Track
            trackImg={cyberImg}
            trackName="cyber security"
            trackDescription="Cyber Security track students will learn to protect systems from threats, study protocols, ethical hacking, encryption, and threat analysis, and engage in hands-on projects. They will gain skills in safeguarding digital environments, conducting audits, and implementing security measures."
          />
          <Track
            trackImg={webImg}
            trackName="web-development"
            trackDescription="Web Development track students will learn to build dynamic and responsive websites using HTML, CSS, JavaScript, Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, they will develop skills in front-end and back-end development. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, building robust and scalable websites."
          />
          <Track
            trackImg={uiuxImg}
            trackName="ui/ux development"
            trackDescription="UI/UX Design track students will learn to create user-friendly and visually appealing interfaces through user research, wireframing, prototyping, and usability testing. They will gain hands-on experience with practical projects and workshops, becoming proficient in industry-standard design tools and techniques to create effective, user-centric designs for websites and mobile applications."
          />
          <Track
            trackImg={mobileImg}
            trackName="mobile app development"
            trackDescription="Mobile Apps Development track students will learn to design and build applications for Android and iOS using languages like Java, Kotlin, Swift, and Dart. Through hands-on projects and interactive sessions, they will develop skills to create user-friendly and efficient mobile applications. By the end of the track, students will be adept at building, testing, and deploying mobile apps, ready to deliver high-performance solutions for smartphones and tablets."
          />
          <Track
            trackImg={powerImg}
            trackName="power platform"
            trackDescription="Power Platform track students will explore Microsoft's Power Platform, including Power BI, Power Apps, Power Automate, and Power Virtual Agents. They will learn to create custom business applications, automate workflows, analyze data, and build chatbots with minimal coding. By the end of the track, students will be proficient in developing integrated solutions with the Power Platform, enabling them to transform organizational operations and improve efficiency."
          />
          <Track
            trackImg={cloudImg}
            trackName="cloud engineering"
            trackDescription="Cloud Engineering track students will learn to design, deploy, and manage scalable cloud infrastructures using AWS, Google Cloud, and Microsoft Azure. They will gain hands-on experience in cloud architecture, virtualization, containerization, and DevOps. By the end of the track, students will be skilled in building and maintaining robust, high-performance cloud-based solutions."
          />
        </div>
        <div className="input-form">
          <legend>fill out this form:</legend>
          <form action="">
            <label htmlFor="name">name</label>
            <input type="text" placeholder="John Doe" />
            <label htmlFor="email">email</label>
            <input type="text" placeholder="johndoe@example.com" />
            <label htmlFor="course">course</label>
            <input type="text" placeholder="software engineering" />
            <label htmlFor="studyyear">year of study</label>
            <input type="text" placeholder="3" />
            <div className="divdrop">
              <label htmlFor="dropdown">select your track:</label>
              <select name="" id="">
                <option value="">Select a track to major in</option>
                <option value="option1">cyber security</option>
                <option value="option2">web development</option>
                <option value="option3">ui/ux design</option>
                <option value="option4">mobile app developmet</option>
                <option value="option5">cloud engineering</option>
                <option value="option6">power platform</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tracks;
