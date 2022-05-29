import React from "react";

function Navbar() {
  return (
    <div id="navBar">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            href="./components/Aboutme">
            About Me
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./components/Portfolio">
            Portfolio
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./components/Resume">
            Resume
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./components/Contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
