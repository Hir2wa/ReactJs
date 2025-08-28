import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetails";
import Register from "./pages/Register";
import "./server";
import Tabs from "./pages/Tabs";
import CountDown from "./pages/CountDown";
import ThemeContext from "./pages/ThemeContext";
import ThemeButton from "./pages/ThemeButton";

function App() {
  return (
    // <BrowserRouter>
    //   <header>
    //     <Link className="site-logo" to="/">
    //       #VanLife
    //     </Link>
    //     <nav>
    //       <Link to="/about">About</Link>
    //       <Link to="/vans">Vans</Link>
    //     </nav>
    //   </header>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/vans" element={<Vans />} />
    //     <Route path="/vans/:id" element={<VanDetail />} />
    //   </Routes>
    // </BrowserRouter>
    // <Register />
    <>
      {/* <Tabs />
      <CountDown /> */}

      <ThemeButton />
    </>
  );
}

export default App;
