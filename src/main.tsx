import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app";

const loadRoot = () => {
  console.log("loading root");

  const root = document.getElementById("root");
  if (root === null) {
    console.log("No root element, trying again in one second");
    window.setTimeout(loadRoot, 1000);
    return;
  }

  // Load fonts
  const link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap",
  );
  document.head.appendChild(link);

  // Render
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

window.onload = loadRoot;
