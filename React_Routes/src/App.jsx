import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Router, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Router>
          <Routes path="/" element={<App />} />
          <Routes path="/About" element={<About />} />
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
