import React, { useState } from "react";
import "./Custom.css";

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
  

  return (
    <section className="container">
      <fieldset>
        <form>
          <p>
            <input
              type="text"
              name="firstname"
              value={inputValues.firstname}
              onChange={handleChange} placeholder="First name"
            />
          </p>
          <p>
            <input
              type="text"
              name="lastname"
              value={inputValues.lastname}
              onChange={handleChange} placeholder="Last name"
            />
          </p>
          <p>
            <input
              type="email"
              name="email"
              value={inputValues.email}
              onChange={handleChange} placeholder="Email"
            />
          </p>
          <p>FirstName = {inputValues.firstname}</p>
          <p>LastName = {inputValues.lastname}</p>
          <p>Email = {inputValues.email}</p>
        </form>
      </fieldset>
    </section>
  );
}

export default ContactUs;
