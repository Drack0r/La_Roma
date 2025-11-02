import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Error404 } from "../pages/Error404";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
