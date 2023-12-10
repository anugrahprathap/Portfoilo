import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import audio from '../static/audio.jpg';

function Projects() {
  return (
    <Container className='main-content'>
      <h3 style={{ color: 'white' }}>Projects</h3>
      <Row className='flex-nowrap overflow-auto row'>
        <Col className='mx-2'>
          <Card>
            <Card.Img variant='top' src={audio} alt='audio' />
            <Card.Body>
              {/* Add content here if needed */}
            </Card.Body>
          </Card>
        </Col>
        <Col className='mx-2'>
          <Card>
            <Card.Img variant='top' src={audio} alt='audio' />
            <Card.Body>
              {/* Add content here if needed */}
            </Card.Body>
          </Card>
        </Col>
        <Col className='mx-2'>
          <Card>
            <Card.Img variant='top' src={audio} alt='audio' />
            <Card.Body>
              {/* Add content here if needed */}
            </Card.Body>
          </Card>
        </Col>
        <Col className='mx-2'>
          <Card>
            <Card.Img variant='top' src={audio} alt='audio' />
            <Card.Body>
              {/* Add content here if needed */}
            </Card.Body>
          </Card>
        </Col>
        <Col className='mx-2 mb-4'>
          <Card>
            <Card.Img variant='top' src={audio} alt='audio' />
            <Card.Body>
              {/* Add content here if needed */}
            </Card.Body>
          </Card>
        </Col>
        {/* Repeat the above Col block for additional cards */}
      </Row>
    </Container>
  );
}

export default Projects;
