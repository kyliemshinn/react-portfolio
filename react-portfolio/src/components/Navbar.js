import React from "react";

function Navbar() {
  return (
    <div id="navBar">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="./components/Aboutme">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="./components/Portfolio">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="./components/Resume">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./components/Contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
