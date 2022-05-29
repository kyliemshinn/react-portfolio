import React from "react";

const styles = {
  card: {
    margin: 20,
    padding: 10,
    background: "#e8eaf6",
    width: 500,
    justifyContent: 'center',
    alignItem: 'center'
  },
  form: {
    justifyContent: "center"
  }
};

function Contact() {
  return (
    <div style={styles.card}>
      <form style={styles.form}>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Name
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Person Who Wants To Hire Me"
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="hireme@gmail.com"
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>{" "}
        <button type="submit" class="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
