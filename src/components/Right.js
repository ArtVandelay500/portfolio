import React, { useEffect, useRef } from "react";
import "./Right.css";

const Right = ({ children, selectedSection }) => {
  const containerRef = useRef();

  useEffect(() => {
    if (selectedSection) {
      const target = containerRef.current.querySelector(
        `[name="${selectedSection}"]`
      );
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        console.log(`Scrolled to section: ${selectedSection}`);
      }
    }
  }, [selectedSection]);

  return (
    <div className="right" ref={containerRef}>
      {children}
    </div>
  );
};

export default Right;
