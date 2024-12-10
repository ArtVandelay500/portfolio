import React from "react";
import { Element } from "react-scroll";

export const Project2Sections = ["intro", "architecture", "implementation"];

const Project2 = () => {
  return (
    <div>
      <Element name="intro">
        <h2>Introduction</h2>
        <p>Project 2 focuses on building scalable systems...</p>
      </Element>
      <Element name="architecture">
        <h2>Architecture</h2>
        <p>The system is based on microservices architecture...</p>
      </Element>
      <Element name="implementation">
        <h2>Implementation</h2>
        <p>The project leverages Kubernetes for container orchestration...</p>
      </Element>
    </div>
  );
};

export default Project2;
