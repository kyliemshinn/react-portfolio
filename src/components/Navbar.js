import React from "react";
import Logo from "../images/kslogo.png"

function Navbar() {
  return (
    <div id="navBar">
       {/* <img
            src={Logo}
            className="logo"
            alt="Logo"
          ></img> */}
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a
            className="nav-link active link-info"
            aria-current="page"
            href="./components/Aboutme">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-info" href="./components/Portfolio">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-info" href="./components/Resume">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-info" href="./components/Contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
