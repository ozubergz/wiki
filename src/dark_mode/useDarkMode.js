import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [themeState, setThemeState] = useState({ dark: false });

  useEffect(() => {
    const local = localStorage.getItem("dark") === "true";
    setThemeState({ dark: local});
  }, []);

  return [themeState, setThemeState];
}

export default useDarkMode;
