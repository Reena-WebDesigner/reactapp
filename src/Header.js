import React from "react";
import './Custom.css';
function Header(){
    return(
        <div className="container">
        <header>
            <nav className="d_flex space_btw">
                <a href="#">Logo</a>
                <ul className="menu">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    );
}
export default Header;