import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

const root_element = document.getElementById("root");
root_element &&
  createRoot(root_element).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
