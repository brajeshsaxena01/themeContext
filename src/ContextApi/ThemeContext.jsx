import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div>
      {/* context */}
      <ThemeContext.Provider value={[theme, toggleTheme]}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};
