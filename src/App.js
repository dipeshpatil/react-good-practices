import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/react-good-practices/home" element={<HomePage />} />
        <Route exact path="/react-good-practices/about" element={<AboutPage />} />
        <Route exact path="/react-good-practices/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
