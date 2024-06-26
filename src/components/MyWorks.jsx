import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping,faHeadphones,faGraduationCap,faLaptopFile } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import '../static/works.css'
export const MyWorks = () => {
  return (
    <div>
      <h2>MyWorks</h2>
      <div className="myworks">
        <div className="myworks-item">
          <div className="wid-item-heading">
            <FontAwesomeIcon icon={faCartShopping} />
            <h3>E-Commerce app</h3>
            </div>
            <p>
            Full stack e-commerce app with Python Django Rest Framework and
              React.js.Developed user authentication, product catalog, cart, and
              order management.Utilized RESTful API architecture for efficient
              data communication between the frontend and backend.
            </p>
          
        </div>
        <div className="myworks-item" style={{ backgroundColor: "rgb(226, 224, 243)" }}>
          <div className="works-item-heading">
          <FontAwesomeIcon icon={faHeadphones} />
            <h3>Audio surveillance system</h3>
            </div>
            <p>
            Audio surveillance system is a deep learning model to analyze
              audio data and detect abnormal sound events.Enhanced a dataset of
              600 audio files using rotation technique for diversity.Extracted
              Mel spectrograms and intensity vectors to capture essential audio
              characteristics, integrated within a CRNN architecture for robust
              pattern recognition.
            </p>
        </div>
        <div className="myworks-item" style={{ backgroundColor: "rgb(226, 224, 243)" }}>
          <div className="works-item-heading">
          <FontAwesomeIcon icon={faLaptopFile} />
        
            <h3>Eduspace</h3>
            </div>
            <p>
            Eduspace is a robust and user-friendly online job portal
              exclusively for recent college graduates using Python Flask,
              MySQL, JavaScript, Html, and CSS, enabling efficient job
              searching, application submission, and employer management.
            </p>
        </div>
        <div className="myworks-item">
          <div className="works-item-heading">
          
          <FontAwesomeIcon icon={faGraduationCap} />
            <h3>Campus Recruitment System</h3>
            </div>
            <p>
            Built a robust web application, Campus Recruitment System, using
              Django, MySQL, JavaScript, Html, and Bootstrap.Implemented
              features including organizing campus drives, facilitating
              placement applications, and managing student profiles.
            </p>
        </div>
      </div>
    </div>
  );
};
export default MyWorks;
