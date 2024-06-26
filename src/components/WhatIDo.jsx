import React from "react";
import "../static/wid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUserSecret,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
export const WhatIDo = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        I'm an MCA graduate from Pondicherry University with skills in Python,
        C, C++, Java, and JavaScript. I'm passionate about web development and
        enjoy working with frameworks like Django, Flask, Node.js, and React.js.
        I'm also certified in Google Cloud Platform.
      </p>
      <h2>What I Do!</h2>
      <div className="wid">
        <div className="item">
          <div className="wid-item-heading">
            <FontAwesomeIcon icon={faCode} />
            <h3>Web Development</h3>
          </div>
          <p>
            I specialize in web development using frameworks like Django, Flask,
            Node.js, and React.js. My focus is on creating efficient and
            scalable web applications.
          </p>
        </div>
        <div className="item" style={{ backgroundColor: "rgb(226, 224, 243)" }}>
          <div className="wid-item-heading">
            <FontAwesomeIcon icon={faMobileScreenButton} />
            <h3>App Development</h3>
          </div>
          <p>
            With a strong background in Java and JavaScript, I enjoy building
            mobile applications that are user-friendly and feature-rich.
          </p>
        </div>
        <div className="item" style={{ backgroundColor: "rgb(226, 224, 243)" }}>
          <div className="wid-item-heading">
            <FontAwesomeIcon icon={faLightbulb} />
            <h3>Data Science</h3>
          </div>
          <p>
            I have a keen interest in data science, working with deep learning
            using TensorFlow and applying machine learning algorithms with
            scikit-learn.
          </p>
        </div>
        <div className="item">
          <div className="wid-item-heading">
            <FontAwesomeIcon icon={faUserSecret} />
            <h3>Cyber Security</h3>
          </div>
          <p>
            I'm passionate about cybersecurity, focusing on securing software
            and exploring security vulnerabilities to protect data and systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
