import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Project1 from "./Project1";
import Project2 from "./Project2";

const ProjectDetails = ({ onSelectProject }) => {
  const { id } = useParams();

  // Notify App.js about the selected project's sections
  useEffect(() => {
    onSelectProject(id); // Pass the project ID to App.js
  }, [id, onSelectProject]);

  // Render the correct project component
  const projects = {
    project1: <Project1 />,
    project2: <Project2 />,
  };

  return projects[id] || <div>Project not found</div>;
};

export default ProjectDetails;
