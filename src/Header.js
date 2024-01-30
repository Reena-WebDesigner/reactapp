import React from "react";
import './Custom.css';
import { Link } from "react-router-dom";
function Header(){
    return(
        <div className="container">
        <header>
            <nav className="d_flex space_btw">
                <ul className="menu">
                <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    );
}
export default Header;