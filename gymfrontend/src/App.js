import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Classes, MemberShip, Contact } from "./Pages/index";
import {Nav, Footer} from "./Components/index";

export default function App(props) {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/classes" element={<Classes/>} />
          <Route path="/membership" element={<MemberShip
          title={props.title}
          description= {props.description}
          />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

