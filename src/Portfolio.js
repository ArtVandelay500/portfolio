import React, { useState, useEffect } from "react";
import StaticLeft from "./components/StaticLeft";
import DynamicRight from "./components/DynamicRight";
import "./Portfolio.css"; // Optional: Global styles or container-specific styles
import "./components/Loading.css"; // Optional: Global styles or container-specific styles
import "./components/MainContent.css"; // Optional: Global styles or container-specific styles

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home"); // Default section

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="app-container">
      {isLoading ? (
        <div className="loading-screen">
          <h1>Hyunwook Hong</h1>
        </div>
      ) : (
        <div className="main-content">
          <div className="blur-layer"></div>
          <StaticLeft onSelect={setActiveSection} />
          <DynamicRight activeSection={activeSection} />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
