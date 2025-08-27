import React, { useState } from "react";

const Tabs = () => {
  const [active, isActive] = useState("");
  return (
    <>
      <button
        onClick={() => isActive("home")}
        style={{ color: active === "home" ? "red" : "black" }}
      >
        home
      </button>
      <button
        onClick={() => isActive("settings")}
        style={{ color: active === "settings" ? "red" : "black" }}
      >
        settings
      </button>

      <button
        onClick={() => isActive("about")}
        style={{ color: active === "about" ? "red" : "black" }}
      >
        about
      </button>
    </>
  );
};

export default Tabs;
