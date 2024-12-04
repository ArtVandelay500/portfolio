import React, { useState, useEffect } from "react";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./DynamicRight.css";

const DynamicRight = ({ activeSection }) => {
  const [currentSection, setCurrentSection] = useState(activeSection);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (activeSection !== currentSection) {
      setIsTransitioning(true);

      // Wait for the fade-out transition before switching sections
      const timer = setTimeout(() => {
        setCurrentSection(activeSection);
        setIsTransitioning(false); // Trigger fade-in
      }, 500); // Duration matches the CSS fade-out transition

      return () => clearTimeout(timer);
    }
  }, [activeSection, currentSection]);
  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <Home />;
      case "projects":
        return <Projects className="scrollable-content" />;
      case "contact":
        return <Contact />;
      default:
        return <Home />; // Default to About section
    }
  };

  return (
    <div
      className={`dynamic-right ${isTransitioning ? "fade-out" : "fade-in"}`}
    >
      {renderSection()}
    </div>
  );
};

export default DynamicRight;
