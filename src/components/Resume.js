import React from "react";
import "../style.css";
const styles = {
  card: {
    margin: 50,
    padding: 50,
    background: "#3e3e3e"
  },
  heading: {
    background: "#3e3e3e",
    minHeight: 50,
    lineHeight: 3.5,
    color: "white",
    padding: "0 20px",
    textAlign: "center",
    FontWeight: "bold",
    fontSize: "xx-large"
  }
};

function Resume() {
  return (
    <div id="resume" style={styles.card} className=" d-flex align-items-center justify-content-center">
      <span style={styles.heading} className="">For More Work Information, Navigate 🚀 To My {" "}
        <a id="resumeLink" href="https://docs.google.com/document/d/1VYmE3GJyOnqfuyGD1E5rqR3FgrTLbtxKUqx3ZISp4Pw/edit" target="_blank" rel="noreferrer">
          {" "}
             Resume!
        </a>
      </span>
    </div>
  );
}

export default Resume;
