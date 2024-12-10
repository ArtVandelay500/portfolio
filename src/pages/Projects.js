import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projectsData.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
