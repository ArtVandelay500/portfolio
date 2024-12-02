import React, { useState } from "react";
import WaveEffect from "./components/WaveEffect";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div>
      <button
        id="modeButton"
        onClick={toggleMode}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "40px",
          height: "40px",
          backgroundColor: isDarkMode ? "#444" : "#fff",
          color: isDarkMode ? "#fff" : "#444",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        {isDarkMode ? "☾" : "☀"}
      </button>
      <WaveEffect isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
