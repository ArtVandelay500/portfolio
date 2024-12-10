import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Left from "./components/Left";
import Right from "./components/Right";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

import { Project1Sections } from "./pages/Project1";
import { Project2Sections } from "./pages/Project2";

const App = () => {
  // State to manage the current project's sections
  const [sections, setSections] = useState([]);

  // Handle selecting a project
  const handleSelectProject = (projectId) => {
    const sectionMap = {
      project1: Project1Sections,
      project2: Project2Sections,
    };
    setSections(sectionMap[projectId] || []); // Update sections dynamically
  };

  return (
    <div className="main-content">
      <Left sections={sections} />
      <Right>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
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
