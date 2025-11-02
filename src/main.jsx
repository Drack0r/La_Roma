import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./sass/main.scss";
import { Router } from "./Router/Router.jsx";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/La_Roma">
      <Router />
    </BrowserRouter>
  </StrictMode>
);
