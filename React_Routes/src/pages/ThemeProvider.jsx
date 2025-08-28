import React, { createContext, useState } from "react";

export const Theme = createContext();
const ThemeProvider = ({ children }) => {
  const [colour, setColor] = useState("light");

  const toggleTheme = () => {
    setColor((prev) => (prev == "light" ? "black" : "light"));
  };
  return (
    <Theme.Provider value={{ toggleTheme, colour }}>{children}</Theme.Provider>
  );
};

export default ThemeProvider;
