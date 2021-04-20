import React, { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import ThemeToggler from "./components/ThemeToggler";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  const themeHook = useState("light");

  return (
    <ThemeContext.Provider value={themeHook}>
      <ThemeToggler />
    </ThemeContext.Provider>
  );
};

export default App;
