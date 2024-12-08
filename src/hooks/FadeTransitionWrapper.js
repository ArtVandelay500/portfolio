import React, { cloneElement } from "react";
import "./useTransition.css";

const FadeTransitionWrapper = ({ children, isVisible, duration }) => {
  const fadeClass = isVisible ? "fade-in" : "fade-out";

  if (!children) {
    return null; // Safely return null if no children are provided
  }

  return React.Children.map(children, (child) =>
    child
      ? cloneElement(child, {
          className: `${child.props.className || ""} ${fadeClass}`.trim(),
          style: { ...child.props.style, "--fade-duration": `${duration}ms` },
        })
      : null
  );
};

export default FadeTransitionWrapper;
