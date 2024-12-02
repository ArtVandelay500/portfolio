import React, { useState } from "react";
import WaveEffect from "./components/WaveEffect";
import ModeButton from "./components/ModeButton";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="app-container">
      <ModeButton isDarkMode={isDarkMode} onToggle={toggleMode} />
      <WaveEffect isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
