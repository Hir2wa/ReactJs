import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
