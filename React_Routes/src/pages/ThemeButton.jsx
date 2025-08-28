import React from "react";
import { useContext } from "react";
import { Theme } from "./ThemeProvider";
import ThemeContext from "./ThemeProvider";
const ThemeButton = () => {
  const { toggleTheme, colour } = useContext(Theme);
  return <button onClick={toggleTheme}>Change Theme {colour}</button>;
};

export default ThemeButton;
