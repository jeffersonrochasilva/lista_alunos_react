import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.js";
import Content from "../pages/List/index.js";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Content />} />
    </Routes>
  );
};

export default RouterApp;
