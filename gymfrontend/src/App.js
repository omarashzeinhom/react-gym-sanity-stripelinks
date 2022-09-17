import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Classes, MemberShip, Contact } from "./Pages/index";
import {Nav, Footer, SocialMedia} from "./Components/index";


function App() {

  return (
    <>         

      <Router>
        <Nav/>
        <Routes>
          <Route path="https://ozgym.netlify.app/" element={<Home/>} />
          <Route path="https://ozgym.netlify.app/Classes" element={<Classes/>} />
          <Route path="https://ozgym.netlify.app/Membership" element={<MemberShip/>} />
          <Route path="https://ozgym.netlify.app/Contact" element={<Contact/>} />
        </Routes>
        <SocialMedia/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
