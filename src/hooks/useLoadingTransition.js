import { useState, useEffect } from "react";

const useFadeTransition = (duration = 500, delay = 0) => {
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const show = () => {
    setIsVisible(true);
    setIsFading(false);
  };

  const hide = () => {
    setIsFading(true);
    setTimeout(() => setIsVisible(false), duration); // Match fade-out duration
  };

  useEffect(() => {
    if (delay) {
      const timer = setTimeout(() => show(), delay);
      return () => clearTimeout(timer);
    } else {
      show();
    }
  }, [delay]);

  return { isVisible, isFading, show, hide };
};

export default useFadeTransition;
