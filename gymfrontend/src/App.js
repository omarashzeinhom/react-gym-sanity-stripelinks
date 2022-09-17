import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Classes, MemberShip, Contact } from "./pages/index";
import { Nav, Footer, SocialMedia } from "./components/index";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/membership" element={<MemberShip />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SocialMedia />
        <Footer />
      </Router>
    </>
  );
}

export default App;
