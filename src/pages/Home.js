import React from "react";
import { Link } from "react-router-dom";
function Home(){
  return (
    <>
      <section className="container txt_center">
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          facilisis neque eu magna ullamcorper, eget pellentesque nisl
          imperdiet. Ut vel quam a sem accumsan varius. Vestibulum gravida
          egestas metus, sed scelerisque ante ullamcorper non. Curabitur mi
          quam, auctor ac ultrices sit amet, eleifend id nulla.
        </p>
        <div className="d_flex icons_block txt_center py_50">
            <div className="flex_1 icon_item">
                <img src="./info.png" alt= "More info" />
                <h2>About US</h2>
                <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          facilisis neque eu magna ullamcorper, eget pellentesque nisl
          imperdiet. Ut vel quam a sem accumsan varius.
        </p>
        <Link to="/about" className="btn">About us</Link>
            </div>
            <div className="flex_1 icon_item">
                <img src="./contact.png" alt= "contact us" />
                <h2>Contact US</h2>
                <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          facilisis neque eu magna ullamcorper, eget pellentesque nisl
          imperdiet. Ut vel quam a sem accumsan varius.
        </p>
        <Link to="/contact" className="btn">Contact us</Link>
            </div>
            <div className="flex_1 icon_item">
                <img src="./contact.png" alt= "contact us" />
                <h2>Services</h2>
                <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          facilisis neque eu magna ullamcorper, eget pellentesque nisl
          imperdiet. Ut vel quam a sem accumsan varius.
        </p>
        <Link to="/contact" className="btn">Contact us</Link>
            </div>
        </div>
      </section>
    </>
  );
}
export default Home;