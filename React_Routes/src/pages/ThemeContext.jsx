import React, { createContext, useState } from "react";

const Theme = createContext();
const ThemeContext = ({ children }) => {
  const [colour, setColor] = useState("light");

  const toggleTheme = () => {
    setColor((prev) => (prev == "light" ? "light" : "black"));
  };
  return (
    <Theme.Provider value={(toggleTheme, colour)}>
      <children />
    </Theme.Provider>
  );
};

export default ThemeContext;
