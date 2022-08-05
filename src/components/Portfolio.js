import React from "react";
import Gitpro from "../images/gitpro.PNG";
import Pethub from "../images/Capture.PNG";
import EmpManage from "../images/empmanage.png";
import WeatherIcon from "../images/weathericon.jpg";
import ReadmeIcon from "../images/readmeicon.webp";
import DayPlanner from "../images/dayplanner.jpg";
import Balloon from "../images/balloon.jpg";
import "../style.css";

const styles = {
  cards: {
    width: "18 rem",
  },
  buttons: {
    backgroundColor: "rgb(245, 245, 187)",
    border: "rgb(245, 245, 187)",
    color: "black",
  },
};

function Portfolio() {
  return (
    <div id="portfolioCards">
      <h1 className="text-center p-2" style={{ color: "khaki" }}>
        PROJECTS
      </h1>
      <div id="projects">
        <div className="card projectCard d-flex flex-row" style={styles.cards}>
          <div className="p-3">
            <img
              src={Balloon}
              className="card-img-top project-image mt-5"
              alt="adventure book"
            ></img>
          </div>
          <div className="card-body">
            <h3 className="card-title">Adventure Book</h3>
            <p className="card-text">
              A web application for travelers to use to get more personalized
              recommendations from real, like-minded people who have experienced
              the places you want to go and the activities you want to do. Get
              off the beaten path, discover hidden gems, live like the locals
              do. Because Google and Trip Advisor don’t always know it all.
            </p>
            <h4>Technologies Used:</h4>
            <p>
              Concurrently | dotenv | nodemon | React Image Carousel | bcrypt |
              Apollo Server/Client | JavaScript | HTML5 | CSS | GraphQL |
              BingMaps | Cloudinary | ReactJS | NodeJS | JWT | Express |
              Tailwind CSS | Font Awesome | daisyUI | React Router | animeJS |
              Mongoose
            </p>
            <a
              style={styles.buttons}
              href="https://github.com/kyliemshinn/adventure-book"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Repository
            </a>
            <a
              style={styles.buttons}
              href="https://book-adventure.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="deploy btn btn-primary m-1"
            >
              Deployed Link
            </a>
          </div>
        </div>

        <div className="card projectCard d-flex flex-row" style={styles.cards}>
          <div className="p-3">
            <img
              src={Gitpro}
              className="card-img-top project-image mt-5"
              alt="GitPro"
            ></img>
          </div>
          <div className="card-body">
            <h3 className="card-title">Git Productive</h3>
            <p className="card-text">
              Git Productive is an innovative web application that is designed
              to help developers with the organization of their day. It is made
              for time management and project management of projects, where the
              user can track the amount of time spent on a project and keep code
              snippets for later use.
            </p>
            <h4>Technologies Used:</h4>
            <p>
              NodeJS | Tailwind CSS | Google Fonts | daisyUI | AnimeJS | MySQL |
              Sequelize | Handlebars | Bcrypt | Connect-Session-Sequelize |
              Express | Express-Session | dotenv | CSS | Javascript
            </p>
            <a
              style={styles.buttons}
              href="https://github.com/kyliemshinn/git-productive"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Repository
            </a>
            <a
              style={styles.buttons}
              href="https://git-productive.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary m-1"
            >
              Deployed Link
            </a>
          </div>
        </div>

        <div className="card projectCard d-flex flex-row" style={styles.cards}>
          <div className="p-3">
            <img
              src={Pethub}
              className="card-img-top project-image mt-5"
              alt="Pethub"
            ></img>
          </div>
          <div className="card-body">
            <h3 className="card-title">PetHub</h3>
            <p className="card-text">
              Pethub is a web app for anyone interested in responsibly adopting
              a pet. On our webapp you can find pets in all areas to adopt. Even
              if you do not want to make the committment yet in adopting an
              animal, but still want to contribute to animals in need, we have a
              charity page that brings you to charities in all locations.
            </p>
            <h4>Technologies Used:</h4>
            <p>
              HTML | CSS | Tailwind CSS | Javascript | daisyUI | AniJS |
              PetFinder API | TheDogAPI |CharityNavigator API | ScrollRevealJS
            </p>
            <a
              style={styles.buttons}
              href="https://github.com/kyliemshinn/pethub"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Repository
            </a>
            <a
              style={styles.buttons}
              href="https://cmwschroeder.github.io/pethub/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary m-1"
            >
              Deployed Link
            </a>
          </div>
        </div>

        <div className="card projectCard d-flex flex-row" style={styles.cards}>
          <div className="p-3">
            <img
              src={EmpManage}
              className="card-img-top project-image mt-5"
              alt="Employee Management"
            ></img>
          </div>
          <div className="card-body">
            <h3 className="card-title">Employee Management System</h3>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <h4>Technologies Used:</h4>
            <p>NodeJS | Javascript | MySQL | console.table | Inquirer</p>
            <a
              style={styles.buttons}
              href="https://github.com/kyliemshinn/employee-tracker"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Repository
            </a>
          </div>
        </div>

        <div className="card projectCard d-flex flex-row" style={styles.cards}>
          <div className="p-3">
            <img
              src={WeatherIcon}
              className="card-img-top project-image mt-5"
              alt="Weather Icon"
            ></img>
          </div>
          <div className="card-body">
            <h3 className="card-title">Weather Dashboard</h3>
            <p className="card-text">
              Weather Dashboard is a weather app that displays the current and
              forecasted weather for a given city. You will input the city on
              the side input bar. The page will populate the weather in a main
              card of the current weather and then 5 smaller forecast cards for
              the next 5 days.
            </p>
            <h4>Technologies Used:</h4>
            <p>HTML | CSS | JavaScript</p>
            <a
              style={styles.buttons}
              href="https://github.com/kyliemshinn/weather-dashboard"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Repository
            </a>
            <a
              style={styles.buttons}
              href="https://kyliemshinn.github.io/weather-dashboard/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary m-1"
            >
              Deployed Link
            </a>
          </div>
        </div>

        <div className="card projectCard d-flex flex-row" style={styles.cards}>
          <div className="p-3">
            <img
              src={ReadmeIcon}
              className="card-img-top project-image mt-5"
              alt="ReadMe Icon"
            ></img>
          </div>
          <div className="card-body">
            <h3 className="card-title">README Generator</h3>
            <p className="card-text">
              README Generator is used to create a pre-structured README for a
              project. The user will put in the listed features that are
              presented on a typical README, fill them out according to the
              project that it is being generated for. Onced all the sections
              have been filled out, the README will generate on a seperate file
              for use.
            </p>
            <h4>Technologies Used:</h4>
            <p>NodeJS | Javascript | Inquirer | Node File System |</p>
            <a
              style={styles.buttons}
              href="https://github.com/kyliemshinn/readme-generator"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Repository
            </a>
          </div>
        </div>

        <div
          className="card projectCard d-flex flex-row mb-4"
          style={styles.cards}
        >
          <div className="p-3">
            <img
              src={DayPlanner}
              className="card-img-top project-image mt-5"
              alt="Day Planner Logo"
            ></img>
          </div>
          <div className="card-body">
            <h3 className="card-title">Day Planner</h3>
            <p className="card-text">
              This work day scheduler app is designed to let the user add and a
              daily schedule that presents the date and time to show what day
              the schedule is on. This color coordinated day planner is used
              strictly with front end languages and tools.
            </p>
            <h4>Technologies Used:</h4>
            <p>HTML | CSS | Javascript</p>
            <a
              style={styles.buttons}
              href="https://github.com/kyliemshinn/Work-day-scheduler"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Repository
            </a>
            <a
              style={styles.buttons}
              href="https://kyliemshinn.github.io/Work-day-scheduler/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary m-1"
            >
              Deployed Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
