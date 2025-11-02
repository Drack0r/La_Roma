import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./sass/main.scss";
import { App } from "./App";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/La_Roma">
      <App />
    </BrowserRouter>
  </StrictMode>
);
