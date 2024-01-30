import React, { useState } from "react";
import "../Custom.css";
import { Link } from "react-router-dom";

function ContactUs(props) {
  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    alert(
      "Submitted Values: " +
        inputValues.firstname +
        " - " +
        inputValues.lastname +
        " - " +
        inputValues.email
    );
  };

  return (
    <section className="container py_50">
      <div className="d_flex space_btw">
        <div className="flex_1">
          <h1>Contact Us</h1>
          <p>
            Need a design solution?
            <br />
            Please fill out the form to contact with me or send me a email.
          </p>
        </div>
        <fieldset className="flex_1">
          <form>
            <p>
              <input
                type="text"
                name="firstname"
                value={inputValues.firstname}
                onChange={handleChange}
                placeholder="First name"
              />
            </p>
            <p>
              <input
                type="text"
                name="lastname"
                value={inputValues.lastname}
                onChange={handleChange}
                placeholder="Last name"
              />
            </p>
            <p>
              <input
                type="email"
                name="email"
                value={inputValues.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <button onClick={handleSubmit}>submit</button>
            </p>
            <p>FirstName = {inputValues.firstname}</p>
            <p>LastName = {inputValues.lastname}</p>
            <p>Email = {inputValues.email}</p>
          </form>
        </fieldset>
      </div>
      <Link to="/" className="btn">
        Home
      </Link>
    </section>
  );
}

export default ContactUs;
