import React from "react";
import "./Left.css";
import useRightTransition from "../hooks/useTransition";

const Left = ({
  activeSection,
  selectedProject,
  onSectionSelect,
  onIndexSelect,
}) => {
  // Apply transitions only when toggling between navigation and project index
  const { isVisible, currentProject, fadeOutDuration, fadeInDuration } =
    useRightTransition(
      null, // Only track selectedProject for transitions
      selectedProject
    );

  const sections = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const renderSections = () => (
    <ul className="navigation">
      <h1>Navigation</h1>
      {sections.map((section) => (
        <li
          key={section.id}
          className={`list-item ${
            activeSection === section.id ? "active" : ""
          }`}
          onClick={() => onSectionSelect(section.id)}
        >
          {section.label}
          <div
            className={`underline ${
              activeSection === section.id ? "show" : ""
            }`}
          />
        </li>
      ))}
    </ul>
  );

  const renderProjectIndex = () => {
    const projectSections = currentProject?.sections || [];
    return (
      <ul className="project-index">
        <h1>{currentProject?.name}</h1>
        {projectSections.map((section, idx) => (
          <li
            key={idx}
            className={`project-index-item ${
              activeSection === section.id ? "active" : ""
            }`}
            onClick={() => onIndexSelect(idx)}
          >
            {section.label}
            <div
              className={`underline ${
                activeSection === section.id ? "show" : ""
              }`}
            />
          </li>
        ))}
      </ul>
    );
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
      {currentProject ? renderProjectIndex() : renderSections()}
    </div>
  );
};

export default Left;
