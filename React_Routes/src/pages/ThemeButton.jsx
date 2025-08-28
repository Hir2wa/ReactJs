import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
const ThemeButton = ({ toggleTheme, colour }) => {
  return <button onClick={toggleTheme}>Change Theme {colour}</button>;
};

export default ThemeButton;
