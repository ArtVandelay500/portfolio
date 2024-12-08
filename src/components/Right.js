import React from "react";
import Home from "./sections/Home";
import Contact from "./sections/Contact";
import "./Right.css";
import useRightTransition from "../hooks/useTransition";

// Import project components and sections
import ProjectOne, {
  sections as ProjectOneSections,
} from "../components/sections/ProjectOne";
import ProjectTwo, {
  sections as ProjectTwoSections,
} from "../components/sections/ProjectTwo";

const Right = ({
  activeSection,
  selectedProject,
  selectedIndex,
  onProjectSelect,
}) => {
  const projects = [
    {
      id: 1,
      name: "Project One",
      sections: ProjectOneSections, // Dynamically imported sections
      component: ProjectOne, // Component reference
    },
    {
      id: 2,
      name: "Project Two",
      sections: ProjectTwoSections, // Dynamically imported sections
      component: ProjectTwo, // Component reference
    },
  ];

  // Use the enhanced transition hook
  const {
    isVisible,
    currentSection,
    currentProject,
    fadeOutDuration,
    fadeInDuration,
  } = useRightTransition(activeSection, selectedProject);

  const renderContent = () => {
    if (currentSection === "home") return <Home />;
    if (currentSection === "contact") return <Contact />;
    if (currentSection === "projects" && !currentProject)
      return renderProjectList();
    return renderProjectDetails();
  };

  const renderProjectList = () => (
    <ul>
      {projects.map((project) => (
        <li
          key={project.id}
          className="project-item"
          onClick={() => onProjectSelect(project)}
        >
          {project.name}
        </li>
      ))}
    </ul>
  );

  const renderProjectDetails = () => {
    if (!currentProject) return null;

    // Dynamically render the selected project component
    const ProjectComponent = currentProject.component;

    return <ProjectComponent selectedIndex={selectedIndex} />;
  };

  return (
    <div
      className={`right ${isVisible ? "fade-in" : "fade-out"}`}
      style={{
        "--fade-out-duration": `${fadeOutDuration}ms`,
        //--fade-out-duration 이거는 css의 var 값 -> css의 var과 이름 같아야 매핑됨
        //${fadeOutDuration}은 위에 useRightTransition 호출 값
        "--fade-in-duration": `${fadeInDuration}ms`,
      }}
    >
      {renderContent()}
    </div>
  );
};

export default Right;
