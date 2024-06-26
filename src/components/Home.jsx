import React from "react";
import "../static/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";
import photo from '../static/myphoto.jpg';
import Navidation from "./Navidation";
import WhatIDo from "./WhatIDo";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyWorks from "./MyWorks";

export const Home = () => {
  return (
    <div className="main">
      <Router>
      <div className="personal-info">
      <div className="profile-image-container">
          <img src={photo} alt="Profile" height={"200px"} width={"200px"} className="profile-image"/>
        </div>
        <div className="name">
          <h2>Anugrah P</h2>
          

          <div className="role">
            <p>Software Developer</p>
          </div>
        </div>

        <div className="links">
          <a
            href="https://twitter.com/anugrahprathap"
            target=""
            className="text-white icons"
          >
            <FontAwesomeIcon icon={faTwitter} size="50px" />
          </a>
          <a
            href="https://linkedin.com/in/anugrahprathap"
            target=""
            className="text-white icons"
          >
            <FontAwesomeIcon icon={faLinkedin} size="50px" />
          </a>
          <a
            href="https://github.com/anugrahprathap"
            target=""
            className="text-white icons"
          >
            <FontAwesomeIcon icon={faGithub} size="50px" />
          </a>
        </div>
        <Contact/>
        <div className="download-cv">
        <FontAwesomeIcon icon={faDownload} />&nbsp;
            <p className="download-text"> Download CV</p>
        </div>
      </div>
      <div className="main-content">
        
        
        
          <Routes>
            <Route path="/" element={<WhatIDo/>}/>
            <Route path="/works" element={<MyWorks/>}/>
            <Route path="/contacts" element={<Contact/>}/>
          </Routes>
       
        
      </div>
      <Navidation/>
      </Router>
    </div>
  );
};
export default Home;
