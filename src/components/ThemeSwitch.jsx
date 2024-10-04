import React, { useState } from "react";
import "../ThemeSwitch.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const sliderCheck = document.getElementById("slider-check");

    if (sliderCheck.checked) {
      document.documentElement.style.setProperty("--text", "#f5f5f5");
      document.documentElement.style.setProperty("--surface", "#121212");

      setDarkMode(true);
    } else {
      document.documentElement.style.setProperty("--text", "#212121");
      document.documentElement.style.setProperty("--surface", "#f5f5f5");

      setDarkMode(false);
    }
  };
  return (
    <div className="theme-switch">
      <FontAwesomeIcon
        icon={darkMode ? faMoon : faSun}
        className="theme-icon"
      />
      <label className="switch" onClick={toggleTheme}>
        <input id="slider-check" type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
