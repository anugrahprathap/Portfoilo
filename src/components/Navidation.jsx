import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUser, faFileLines, faContactBook } from "@fortawesome/free-regular-svg-icons";
import '../static/nav.css';
import resume from '../static/resume.pdf';

export const Navidation = () => {
  return (
    <div className="navigation">
      <NavLink
        to="/"
        title="Profile"
        className="navigation-item" 
        style={({ isActive, isPending, isTransitioning }) => {
            return {
            color: isActive? "#ffff" : 'black',
            // viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}
        > 
      
        <FontAwesomeIcon icon={faUser} />
        <span>Profile</span>
      </NavLink>
      <a 
        href={resume} 
        title="Resume" 
        className="navigation-item"
      >
        <FontAwesomeIcon icon={faFileLines} />
        <span>Resume</span>
      </a>
      <NavLink
        to="/works"
        title="Works"
        className="navigation-item" 
        style={({ isActive, isPending, isTransitioning }) => {
            return {
            color: isActive? "#ffff" : 'black',
            backgroundColor: isActive? "blue":"",
            viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}
        > 
        <FontAwesomeIcon icon={faBriefcase} />
        <span>Works</span>
      </NavLink>
      <NavLink
        to="/contacts"
        title="Contact"
        className="navigation-item" 
        style={({ isActive, isPending, isTransitioning }) => {
            return {  
            color: isActive? "#ffff" : 'black',
            backgroundColor: isActive? "blue":"",
            };
        }}
        > 
        <FontAwesomeIcon icon={faContactBook} />
        <span>Contact</span>
      </NavLink>
    </div>
  );
}

export default Navidation;
