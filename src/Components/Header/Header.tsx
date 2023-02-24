import { Component } from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar-header">
      <div className="navbar-content">
        <p className="website-logo">RA</p>
        <ul className="nav-menu">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="Linked In"
              className="social-network-img"
            />
          </li>
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
              alt="Linked In"
              className="social-network-img"
            />
          </li>
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
              alt="Linked In"
              className="social-network-img"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
