import React from "react";
import "./StaticLeft.css";

const StaticLeft = ({ activeSection, onSelect }) => {
  const renderMenu = () => {
    if (activeSection === "projects") {
      return (
        <ul>
          <li>
            <a href="#project1" onClick={() => onSelect("project1")}>
              Project 1
            </a>
          </li>
          <li>
            <a href="#project2" onClick={() => onSelect("project2")}>
              Project 2
            </a>
          </li>
          <li>
            <a href="#project3" onClick={() => onSelect("project3")}>
              Project 3
            </a>
          </li>
        </ul>
      );
    }
    // Default menu for other sections
    return (
      <ul>
        <li>
          <a href="#about" onClick={() => onSelect("about")}>
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
    );
  };

  return (
    <div className="static-left">
      <h1>
        {activeSection === "projects" ? "Projects Directory" : "Navigation"}
      </h1>
      <nav>{renderMenu()}</nav>
    </div>
  );
};

export default StaticLeft;
