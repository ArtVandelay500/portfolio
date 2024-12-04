import React from "react";
import "./StaticLeft.css"; // Link to the styles below

const StaticLeft = ({ onSelect }) => {
  return (
    // <FadeWrapper>
    <div className="static-left">
      <h1>
        Hello, I am <span>John</span>
      </h1>

      <p>Short Bio or Branding Statement</p>
      <nav>
        <ul>
          <li>
            <a href="#home" onClick={() => onSelect("home")}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => onSelect("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => onSelect("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
    // </FadeWrapper>
  );
};

export default StaticLeft;
