import React, { useState, useEffect } from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import FadeTransitionWrapper from "./hooks/FadeTransitionWrapper";
import "./hooks/useTransition";
import "./Portfolio.css";
import "./components/MainContent.css";
import "./components/Loading.css";

const Portfolio = () => {
  const [hasAnimationBorder, setHasAnimationBorder] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home"); // Default section

  const [selectedProject, setSelectedProject] = useState(null); // 선택된 프로젝트 정보
  const [selectedIndex, setSelectedIndex] = useState(null); // 프로젝트의 특정 인덱스 선택

  const handleProjectSelect = (project) => {
    setSelectedProject(project); // 프로젝트 선택
    setActiveSection("projects"); // Ensure the "projects" section is active
  };

  const handleIndexSelect = (index) => {
    setSelectedIndex(index); // 프로젝트의 특정 인덱스 선택
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Add the animation border after the loading finishes
      const animationBorderTimer = setTimeout(() => {
        setHasAnimationBorder(true);
      }, 200); // time taking between 'loading' and 'main-content'

      return () => clearTimeout(animationBorderTimer);
    }, 2000); // loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen with Fade Transition */}
      <FadeTransitionWrapper isVisible={isLoading} duration={500}>
        <div className="loading-screen">
          <h1>홍현욱</h1>
        </div>
      </FadeTransitionWrapper>

      {/* Main App Container */}
      <div
        className={`app-container ${
          hasAnimationBorder ? "animation-border active" : "animation-border"
        }`}
      >
        {!isLoading && (
          <div className="main-content">
            <Left
              activeSection={activeSection}
              selectedProject={selectedProject}
              onSectionSelect={setActiveSection}
              onProjectSelect={handleProjectSelect}
              onIndexSelect={handleIndexSelect}
            />
            <Right
              activeSection={activeSection}
              selectedProject={selectedProject}
              selectedIndex={selectedIndex}
              onProjectSelect={handleProjectSelect}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
