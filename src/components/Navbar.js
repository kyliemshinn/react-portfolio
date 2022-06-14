import React from "react";
import  "../style.css";

function Navbar() {
  return (
    <div id="navBar">
     
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a
            className="nav-link active link-info links"
            aria-current="page"
            href="./components/Aboutme"
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-info links" href="#about">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-info links" href="#resume">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
