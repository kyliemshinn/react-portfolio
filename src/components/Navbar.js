import React from "react";

function Navbar() {
  return (
    <div id="navBar">
     
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a
            className="nav-link active link-info"
            aria-current="page"
            href="./components/Aboutme"
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-info" href="#about">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-info" href="#resume">
            Resume
          </a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link link-info" href="#contact">
            Contact
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default Navbar;
