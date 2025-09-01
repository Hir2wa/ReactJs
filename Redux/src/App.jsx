import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import ColourChange from "./Components/colourChange";

function App() {
  return (
    <>
      <Profile />
      <Login />
      <ColourChange />
    </>
  );
}

export default App;
