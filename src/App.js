import React, { useState, useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./transitions.css"; // Global transition styles
import Left from "./components/Left";
import Right from "./components/Right";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

import { Project1Sections } from "./pages/Project1";
import { Project2Sections } from "./pages/Project2";

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSelectProject = useCallback((projectId) => {
    const projectMap = {
      project1: { title: "Project 1", sections: Project1Sections },
      project2: { title: "Project 2", sections: Project2Sections },
    };
    setSelectedProject(projectMap[projectId] || null);
  }, []);

  const handleSelectSection = useCallback((section) => {
    setSelectedSection(section);
  }, []);

  const handleGeneralPage = useCallback(() => {
    setSelectedProject(null);
    setSelectedSection(null);
  }, []);

  return (
    <div className="main-content">
      <Left
        selectedProject={selectedProject}
        onSelectSection={handleSelectSection}
      />
      <Right selectedSection={selectedSection}>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Home onRender={handleGeneralPage} />} />
          <Route
            path="/projects"
            element={<Projects onRender={handleGeneralPage} />}
          />
          <Route
            path="/projects/:id"
            element={<ProjectDetails onSelectProject={handleSelectProject} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Right>
    </div>
  );
};

export default App;
