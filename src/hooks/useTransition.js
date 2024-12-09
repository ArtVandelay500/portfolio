import { useState, useEffect } from "react";

const useRightTransition = (
  activeSection,
  selectedProject,
  totalDuration = 500, //총 변환 시간 (fadeIn과 fadeOut을 합한 시간 값)
  fadeOutPercentage = 80 // 총 변환 시간 중 fadeOut의 비중
) => {
  const fadeOutDuration = (totalDuration * fadeOutPercentage) / 100;
  const fadeInDuration = totalDuration - fadeOutDuration;

  const [currentSection, setCurrentSection] = useState(activeSection);
  const [currentProject, setCurrentProject] = useState(selectedProject);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (
      activeSection !== currentSection ||
      selectedProject !== currentProject
    ) {
      // Start fade-out
      setIsVisible(false);

      const fadeOutTimeout = setTimeout(() => {
        // Update section/project after fade-out
        setCurrentSection(activeSection);
        setCurrentProject(selectedProject);

        // Start fade-in
        const fadeInTimeout = setTimeout(() => {
          setIsVisible(true);
        }, fadeInDuration);

        return () => clearTimeout(fadeInTimeout);
      }, fadeOutDuration);

      return () => clearTimeout(fadeOutTimeout);
    }
  }, [
    activeSection,
    selectedProject,
    currentSection,
    currentProject,
    fadeOutDuration,
    fadeInDuration,
  ]);

  return {
    isVisible,
    currentSection,
    currentProject,
    fadeOutDuration,
    fadeInDuration,
  };
};

export default useRightTransition;
