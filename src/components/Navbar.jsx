import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    console.log(darkMode);
    if (!darkMode) {
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
    <nav>
      <h1 className="title">JD CHATBOT.</h1>
      <div className="nav-links">
        <a href="#" className="theme-btn" onClick={toggleTheme}>
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
        </a>
        <a href="https://jpdoshi.tech">
          <FontAwesomeIcon icon={faGlobe} />
        </a>
        <a href="https://github.com/jpdoshi">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
