import React from "react";
import styles from "./ModeButton.module.css";

const ModeButton = ({ isDarkMode, onToggle }) => {
  return (
    <button
      className={`${styles.modeButton} ${
        isDarkMode ? styles.darkMode : styles.lightMode
      }`}
      onClick={onToggle}
    >
      {isDarkMode ? "☾" : "☀"}
    </button>
  );
};

export default ModeButton;
