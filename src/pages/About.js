import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <section className="container about_Sec">
        <div className="d_flex">
          <div className="flex_1">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              facilisis neque eu magna ullamcorper, eget pellentesque nisl
              imperdiet. Ut vel quam a sem accumsan varius. Vestibulum gravida
              egestas metus, sed scelerisque ante ullamcorper non. Curabitur mi
              quam, auctor ac ultrices sit amet, eleifend id nulla.
            </p>
            <Link to="/contact" className="btn">Contact us</Link>
          </div>
          <div className="flex_1"> 
            <img src="/about.png" alt="about"></img>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
