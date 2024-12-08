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
  rightRef,
}) => {
  const projects = [
    {
      id: 1,
      name: "Project One",
      sections: ProjectOneSections || [], // Fallback to empty array
      component: ProjectOne,
    },
    {
      id: 2,
      name: "Project Two",
      sections: ProjectTwoSections || [],
      component: ProjectTwo,
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

    const ProjectComponent = currentProject?.component;

    if (!ProjectComponent || typeof ProjectComponent !== "function") {
      console.error("Invalid Project Component:", ProjectComponent);
      return <div>Error: Invalid Project Component</div>;
    }

    return <ProjectComponent selectedIndex={selectedIndex} />;
  };

  return (
    <div
      ref={rightRef} // Attach the ref to the container
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
