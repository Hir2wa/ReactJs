import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./assets/Home";
import About from "./assets/About";
import Nav from "./Nav";
function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Link to="/"> Home</Link>
        <Link to="/About"> About</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
