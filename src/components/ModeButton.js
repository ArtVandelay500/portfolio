import React from "react";

const ModeButton = ({ isDarkMode, toggleMode }) => {
  return (
    <button
      id="modeButton"
      onClick={toggleMode}
      className={isDarkMode ? "" : "light-mode"}
    >
      {isDarkMode ? "☾" : "☀"}
    </button>
  );
};

export default ModeButton;
