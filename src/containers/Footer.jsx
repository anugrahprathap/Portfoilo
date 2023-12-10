import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <Row className="bg-dark text-white p-4">
      <Col xs={4} className="text-center">
        <a href="https://twitter.com/your_twitter_handle" target="_blank" className="text-white">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </Col>
      <Col xs={4} className="text-center">
        <a href="https://linkedin.com/in/your_linkedin_profile" target="_blank" className="text-white">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </Col>
      <Col xs={4} className="text-center">
        <a href="https://github.com/your_github_username" target="_blank" className="text-white">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </Col>
    </Row>
  );
}

export default Footer;
