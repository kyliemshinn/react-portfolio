import React, { useState } from "react";
import "../style.css";

// styling for contact form
const styles = {
  card: {
    margin: 20,
    padding: 20,
    background: "#d5a2d3",
    width: 500,
  },
  button: {
    background: "white",
  },
  bg: {
    background: "rgb(248, 213, 245)",
  },
};

function Contact() {

  const [nameVal, setName] = useState('');
  const [emailVal, setEmail] = useState('');
  const [messageVal, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, email, value } = e.target;

    if(name === 'nameVal') {
       return setName(value) 
    } else if (email === "emailVal") {
      return setEmail(value)
      } else {
        return setMessage(value)
      } 
    
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit
    e.preventDefault();

    // Alert the user message was received and set to empty strings
    alert("Thank you for your message! I will get back to you shortly.");
    setEmail('');
    setName('');
    setMessage('');
  };

    return (
      <div style={styles.bg} className="col d-flex justify-content-center">
        <div style={styles.card}>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                defaultValue={nameVal}
                name="name"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Person Who Wants To Hire Me"
                onBlur={handleInputChange}
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                defaultValue={emailVal}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="hireme@gmail.com"
                onBlur={handleInputChange}
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Message:</label>
              <textarea
                defaultValue={messageVal}
                name="message"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onBlur={handleInputChange}
              ></textarea>
            </div>{" "}
            <button
              onClick={handleFormSubmit}
              style={styles.button}
              type="submit"
              className="btn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

export default Contact;
