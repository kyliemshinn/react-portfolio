import React from "react";
import Photo from "../images/kylieclyde.jpg"
import "../style.css";

function Aboutme() {
  return (
    <div id="about">
      <div className="row">
        <div className="col-md about-bg">
          <img
            src={Photo}
            className="about-photo img-fluid"
            alt="Me"
          ></img>
        </div>
        <div className="col-md">
          <h3 className="about-title mt-4">
            KYLIE SHINN
          </h3>
          <h4 className="about-title">Full Stack Web Developer</h4>
          <div className="row bioText">
            <p className="bio">
            Hello! I am a full stack web developer leveraging a Speech Therapy
          background to build a more intuitive user experience on the web. I
         recently earned a certificate in full stack development from the
          University of Berkeley Extension School, with newly developed skills
          in HTML, JavaScript, CSS, React.js, MySQL, among many others. I have
           been known as an innovative problem solver passionate about developing
          apps, with proven success providing technical oversight to day-to-day
           operations. I leverage my current skill set to provide a better
        experience for both customers and partners by exhibiting excellent
          communication skills and an ability to take initiative to prioritize
           daily tasks. My aim is to best engage my audience for an impactful
          user experience with each project I begin. I have the ability to
           deploy static and dynamic websites, implement complex logical
           conditions to meet objectives, communicate the basics of serving a web
          page and how the browser renders code, and understanding in the basics
         of troubleshooting and enhancing legacy code. I look forward to
           hearing from you!
           </p>
            <p className="bio">
              <span className="skills">
                Some Skills Include:
              </span>
              <ul className=" skillList">
                <li>ReactJS</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>MySQL</li>
                <li>MERN Stack</li>
                <li>Project Management</li>
                <li>Collaboration/Teamwork</li>
                <li>Leadership</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
