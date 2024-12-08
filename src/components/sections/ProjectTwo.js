import React from "react";
export const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenges", label: "Challenges" },
];
const ProjectTwo = () => {
  return (
    <div>
      <h2>Project Two</h2>
      <p>This is the detail for Project Two.</p>
      <section id="overview">
        <h3>Overview</h3>
        <p>Details about the project overview.</p>
      </section>
      <section id="challenges">
        <h3>Challenges</h3>
        <p>Details about challenges faced during the project.</p>
      </section>
    </div>
  );
};

export default ProjectTwo;
