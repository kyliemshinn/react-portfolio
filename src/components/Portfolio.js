import React from "react";
import Gitpro from "../images/gitpro.PNG";
import Pethub from "../images/Capture.PNG";
import EmpManage from "../images/empmanage.png"
import WeatherIcon from "../images/weathericon.jpg"
import ReadmeIcon from "../images/readmeicon.webp"
import DayPlanner from "../images/dayplanner.jpg"
import "../style.css";

const styles = {
  cards: {
    width: "18 rem",
  },
  buttons: {
    backgroundColor: "pink",
    border: "pink",
  },
};

function Portfolio() {
  return (
    <div id="portfolioCards">
      <div className="card projectCard" style={styles.cards}>
        <img src={Gitpro} class="card-img-top project-image" alt="GitPro"></img>
        <div className="card-body">
          <h5 className="card-title">Git Productive</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h6>Skills Used:</h6>
          <p>
            NodeJS | Tailwind CSS | Google Fonts | daisyUI | AnimeJS | MySQL | Sequelize |
            Handlebars | Bcrypt | Connect-Session-Sequelize | Express | Express-Session |
            dotenv
          </p>
          <a
            style={styles.buttons}
            href="https://github.com/kyliemshinn/git-productive"
            class="btn btn-primary"
          >
            Check It Out!
          </a>
        </div>
      </div>

      <div className="card projectCard" style={styles.cards}>
        <img src={Pethub} class="card-img-top project-image" alt="Pethub"></img>
        <div className="card-body">
          <h5 className="card-title">PetHub</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h6>Skills Used:</h6>
          <p>
            NodeJS | Tailwind CSS | Google Fonts | daisyUI | AnimeJS | MySQL | Sequelize |
            Handlebars | Bcrypt | Connect-Session-Sequelize | Express | Express-Session |
            dotenv
          </p>
          <a
            style={styles.buttons}
            href="https://github.com/kyliemshinn/pethub"
            class="btn btn-primary"
          >
            Check It Out!
          </a>
        </div>
      </div>

      <div className="card projectCard" style={styles.cards}>
        <img src={EmpManage} class="card-img-top project-image" alt="Employee Management"></img>
        <div className="card-body">
          <h5 className="card-title">Employee Management System</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h6>Skills Used:</h6>
          <p>
            NodeJS | Tailwind CSS | Google Fonts | daisyUI | AnimeJS | MySQL | Sequelize |
            Handlebars | Bcrypt | Connect-Session-Sequelize | Express | Express-Session |
            dotenv
          </p>
          <a
            style={styles.buttons}
            href="https://github.com/kyliemshinn/employee-tracker"
            class="btn btn-primary"
          >
            Check It Out!
          </a>
        </div>
      </div>

      <div className="card projectCard" style={styles.cards}>
        <img src={WeatherIcon} class="card-img-top project-image" alt="Weather Icon"></img>
        <div className="card-body">
          <h5 className="card-title">Weather Dashboard</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h6>Skills Used:</h6>
          <p>
            NodeJS | Tailwind CSS | Google Fonts | daisyUI | AnimeJS | MySQL | Sequelize |
            Handlebars | Bcrypt | Connect-Session-Sequelize | Express | Express-Session |
            dotenv
          </p>
          <a
            style={styles.buttons}
            href="https://github.com/kyliemshinn/weather-dashboard"
            class="btn btn-primary"
          >
            Check It Out!
          </a>
        </div>
      </div>

      <div className="card projectCard" style={styles.cards}>
        <img src={ReadmeIcon} class="card-img-top project-image" alt="ReadMe Icon"></img>
        <div className="card-body">
          <h5 className="card-title">README Generator</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h6>Skills Used:</h6>
          <p>
            NodeJS | Tailwind CSS | Google Fonts | daisyUI | AnimeJS | MySQL | Sequelize |
            Handlebars | Bcrypt | Connect-Session-Sequelize | Express | Express-Session |
            dotenv
          </p>
          <a
            style={styles.buttons}
            href="https://github.com/kyliemshinn/readme-generator"
            class="btn btn-primary"
          >
            Check It Out!
          </a>
        </div>
      </div>

      <div className="card projectCard" style={styles.cards}>
        <img src={DayPlanner} class="card-img-top project-image" alt="Day Planner Logo"></img>
        <div className="card-body">
          <h5 className="card-title">Day Planner</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h6>Skills Used:</h6>
          <p>
            NodeJS | Tailwind CSS | Google Fonts | daisyUI | AnimeJS | MySQL | Sequelize |
            Handlebars | Bcrypt | Connect-Session-Sequelize | Express | Express-Session |
            dotenv
          </p>
          <a
            style={styles.buttons}
            href="https://github.com/kyliemshinn/Work-day-scheduler"
            class="btn btn-primary"
          >
            Check It Out!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
