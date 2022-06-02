import React from "react";
import Logo from "../images/kslogo.png";

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
        <li className="nav-item">
          <a className="nav-link link-info" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      {/* <div class="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#contact">
              Portfolio
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Navbar;
