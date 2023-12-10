import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import audio from '../static/audio.jpg';
import '../static/project.css'

function Projects() {
  return (
    <div className='main-content '>
      <h3 style={{ color: 'white' }}>Projects</h3>
      <Row className='flex-nowrap overflow-auto row no-scrollbar'>
        <Col className='ml-0 mx-2'>
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

      <div className='col-skills flex-nowrap overflow-auto row no-scrollbar'>
        <Col className='mx-2 custom-col' style={{width: '250px'}}>
          <div className='custom-card'>
          <Card.Title className='card-heading my-2 ' style={{ color: 'white', textAlign: 'left' }}>Frontend</Card.Title>
          <div className='card-items'>
            <span style={{ margin:'7px',}} >HTML</span>
            <span style={{ margin:'7px',}} >CSS</span>
            <span className='card-item'>JavaScript</span>
            <span className='card-item'>ReactJs</span>
            <span className='card-item'>Bootstrap</span>
          </div>
          
          </div>
        </Col>
        <Col className='mx-2 custom-col' style={{width: '250px'}}>
          <div className='custom-card'>
          <Card.Title className='card-heading my-2 ' style={{ color: 'white', textAlign: 'left' }}>Backend</Card.Title>
          <div className='card-items'>
            <span style={{ margin:'7px',}} >Python</span>
            <span style={{ margin:'7px',}} >Java</span>
            <span style={{ margin:'7px',}} >C</span>
            <span style={{ margin:'7px',}} >C++</span>
            <span className='card-item' >Django</span>
            <span className='card-item'>Flask</span>
            <span className='card-item'>Node.js</span>
            <span className='card-item'>Django REST</span>
          </div>
          </div>
        </Col>
        <Col className='mx-2 custom-col' style={{width: '250px'}}>
          <div className='custom-card text-left'>
          <Card.Title className='card-heading my-2 ' style={{ color: 'white', textAlign: 'left' }}>ML</Card.Title>
          <div className='card-items'>
        
            <span className='card-item' >Keras</span>
            <span className='card-item' >Numpy</span>
            <span className='card-item'>Tensorflow</span>
            <span className='card-item'> Scikit Learn</span>
            
          </div>
          </div>
        </Col>
        <Col className='mx-2 custom-col' style={{width: '250px'}}>
          <div className='custom-card'>
          <Card.Title className='card-heading my-2 ' style={{ color: 'white', textAlign: 'left' }}>Others</Card.Title>
          <div className='card-items'>
         
            <span style={{ margin:'7px',}} >Git</span>
            <span style={{ margin:'7px',}} >Linux</span>
            <span className='card-item'>GCP</span>
            <span className='card-item'>Jenkns</span>
            <span className='card-item'>MySQL</span>
            <span className='card-item'>Docker</span>
          </div>
          </div>
        </Col>
        <Col className='mx-2 custom-col' style={{width: '250px',height:'400px'}}>
          <div className='custom-card' style={{width: '250px',height:'300px'}} >
          <Card.Title className='card-heading my-2 ' style={{ color: 'white', textAlign: 'left' }}>More Projects</Card.Title>
          <div className='card-items'>
         
            <span style={{ margin:'7px',}} >Git</span>
            <span style={{ margin:'7px',}} >Linux</span>
            <span className='card-item'>GCP</span>
            <span className='card-item'>Jenkns</span>
            <span className='card-item'>MySQL</span>
            <span className='card-item'>Docker</span>
          </div>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default Projects;
