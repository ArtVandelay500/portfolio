import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Left.css";

const Left = ({ selectedProject, onSelectSection }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectDetail = location.pathname.startsWith("/projects/");

  const handleScrollToSection = (sectionId) => {
    if (onSelectSection) {
      onSelectSection(sectionId); // Notify App.js of the selected section
    }
  };

  return (
    <div className="left">
      <ul>
        {!isProjectDetail ? (
          <>
            <h1>Navigation</h1>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </>
        ) : (
          <>
            {/* Display the selected project's title */}
            <h1>{selectedProject?.title || "Project Details"}</h1>
            {selectedProject?.sections?.map((section) => (
              <li
                key={section}
                onClick={() => handleScrollToSection(section)}
                className="scroll-button"
              >
                {section}
              </li>
            ))}
            <li onClick={() => navigate("/projects")} className="back-button">
              Back to Projects
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Left;
