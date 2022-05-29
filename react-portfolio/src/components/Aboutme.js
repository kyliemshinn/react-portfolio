import React from "react";
import "../style.css";

function Aboutme() {
  return (
    <div className="card">
      <h2>Kylie Shinn</h2>
      <h3>Full Stack Web Developer</h3>
      <div className="card-body">
        <p className="card-text">
          Hello! I am a full stack web developer leveraging a Speech Therapy background to
          build a more intuitive user experience on the web. I recently earned a
          certificate in full stack development from the University of Berkeley
          Extension School, with newly developed skills in HTML, JavaScript,
          CSS, React.js, MySQL, among many others. I have been known as an innovative
          problem solver passionate about developing apps, with proven success
          providing technical oversight to day-to-day operations. I leverage my
          current skill set to provide a better experience for both customers
          and partners by exhibiting excellent communication skills and an
          ability to take initiative to prioritize daily tasks. My aim is to
          best engage my audience for an impactful user experience with each
          project I begin. I have the ability to deploy static and dynamic
          websites, implement complex logical conditions to meet objectives,
          communicate the basics of serving a web page and how the browser
          renders code, and understanding in the basics of troubleshooting and
          enhancing legacy code. I look forward to hearing from you! 
        </p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
}

export default Aboutme;
