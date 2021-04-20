import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../Colors";
import { Button } from "reactstrap";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div
      className="mainBody"
      style={{ backgroundColor: `${currentTheme.backgroundColor}` }}
    >
      <div className="row justify-content-md-center">
        <div
          className="col-md-6 themeContainer"
          style={{
            backgroundColor: `${currentTheme.secondaryBackColor}`,
            border: `1px solid ${currentTheme.textColor}`,
          }}
        >
          <h2 style={{ color: `${currentTheme.textColor}` }}>Theme Changer</h2>
          <p style={{ color: `${currentTheme.textColor}` }}>
            Current Theme : {themeMode === "light" ? "Light" : "Dark"}
          </p>
          <Button
            style={{
              backgroundColor: `${currentTheme.textColor}`,
              color: `${currentTheme.backgroundColor}`,
            }}
            onClick={() => {
              setThemeMode(themeMode === "light" ? "dark" : "light");
            }}
          >
            Change Theme
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggler;
