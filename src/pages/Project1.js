import React from "react";
import "../pages/Project.css";

export const Project1Sections = ["overview", "features", "tech-stack"];

const Project1 = () => {
  return (
    <div className="project-container">
      <div className="project-content" id="overview">
        <h2>Overview</h2>
        <p></p>
      </div>
      <div className="project-content" id="features">
        <h2>Features</h2>
        <p></p>
      </div>
      <div className="project-content" id="tech-stack">
        <h2>Tech Stack</h2>
        <p></p>
      </div>
    </div>
  );
};

export default Project1;
