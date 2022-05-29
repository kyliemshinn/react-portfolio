import React from "react";
import "../style.css";

const styles = {
  cards: {
    width: "18 rem",
  },
};

function Portfolio() {
  return (
    <div id="portfolioCards">
      <div className="card projectCard" style={styles.cards}>
        <img src="..." class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Git Productive</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://github.com/kyliemshinn/git-productive" class="btn btn-primary">
            Check It Out!
          </a>
        </div>
      </div>

      <div className="card projectCard" style={styles.cards}>
        <img src="..." class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">PetHub</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://github.com/kyliemshinn/pethub" class="btn btn-primary">
            Check It Out!
          </a>
        </div>
      </div>

      <div className="card projectCard" style={styles.cards}>
        <img src="..." class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Employee Management System</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://github.com/kyliemshinn/employee-tracker" class="btn btn-primary">
            Project
          </a>
        </div>
      </div>

      <div className="card projectCard" style={styles.cards}>
        <img src="..." class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Weather Dashboard</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://github.com/kyliemshinn/weather-dashboard" class="btn btn-primary">
            Check It Out!
          </a>
        </div>
      </div>

      <div className="card projectCard" style={styles.cards}>
        <img src="..." class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">README Generator</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://github.com/kyliemshinn/readme-generator" class="btn btn-primary">
            Check It Out!
          </a>
        </div>
      </div>

      <div className="card projectCard" style={styles.cards}>
        <img src="..." class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Day Planner</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://github.com/kyliemshinn/Work-day-scheduler" class="btn btn-primary">
            Check It Out!
          </a>
        </div>
      </div>

    </div>
  );
}

export default Portfolio;
