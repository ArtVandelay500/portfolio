import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll"; // Use Link for smooth scrolling
import "./Left.css";

const Left = ({ sections }) => {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/projects/");

  // Log the list of sections
  console.log("Sections passed to Left.js:", sections);

  return (
    <div className="left">
      <h1>Hello</h1>
      <ul>
        {!isProjectDetail ? (
          <>
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
          sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-20}
                onClick={() => console.log(`Clicked on ${section}`)}
              >
                {section}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Left;
