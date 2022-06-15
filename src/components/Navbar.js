import React from "react";
import ResumePDF from "../components/resumepdf/kylie-shinn-resume.pdf";
import  "../style.css";

function Navbar() {
  return (
    <div id="navBar">
     
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a
            className="nav-link active link-info links"
            aria-current="page"
            href="#about"
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-info links" href="#portfolioCards">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-info links" href={ResumePDF} target="_blank"
            rel="noreferrer">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-info links" href="#contact" >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
