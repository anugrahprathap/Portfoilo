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
            <Card.Body className='card-content overflow-auto'>
            <Card.Title className='card-heading my-2 ' style={{ color: 'black', textAlign: 'left' }}>E-Commerce app</Card.Title>
            Full stack e-commerce app with Python Django Rest Framework and React.js.Developed user authentication, product catalog, cart, and order management.Utilized RESTful API architecture for efficient data communication between the frontend and backend.Demonstrated proficiency in software development and database design, creating a responsive and user-friendly e-commerce solution.
            </Card.Body>
          </Card>
        </Col>
        <Col className='mx-2'>
          <Card>
            <Card.Img variant='top' src={audio} alt='audio' />
            <Card.Body className='card-content overflow-auto'><Card.Title className='card-heading my-2 ' style={{ color: 'black', textAlign: 'left' }}>Audio surveillance system</Card.Title>
            Audio surveillance system is a deep learning model to analyze audio data and detect abnormal sound events.Enhanced a dataset of 600 audio files using rotation technique for diversity.Extracted Mel spectrograms and intensity vectors to capture essential audio characteristics, integrated within a CRNN architecture for robust pattern recognition.
            </Card.Body>
          </Card>
        </Col>
        <Col className='mx-2'>
          <Card>
            <Card.Img variant='top' src={audio} alt='audio' />
            <Card.Body className='card-content overflow-auto'>
            <Card.Title className='card-heading' style={{ color: 'black', textAlign: 'center' }}>Eduspace</Card.Title>
                Eduspace is a robust and user-friendly online job portal exclusively for recent college graduates using Python Flask, MySQL, JavaScript, Html, and CSS, enabling efficient job searching, application submission, and employer management.
          
                
            </Card.Body>
          </Card>
        </Col>
        <Col className='mx-2'>
          <Card>
            <Card.Img variant='top' src={audio} alt='audio' />
            <Card.Body>
            <Card.Title className='card-heading my-2 ' style={{ color: 'white', textAlign: 'left' }}>Campus Recruitment System</Card.Title>
            
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
          <Card.Title className='card-heading my-2 ' style={{ color: 'white', textAlign: 'left' }}>Devops</Card.Title>
          <div className='card-items'>
         
            <span className='card-item' >AWS</span>
            <span style={{ margin:'7px',}} >linux</span>
            <span style={{ margin:'7px',}} >Git</span>
            <span className='card-item'>GCP</span>
            <span className='card-item'>Jenkins</span>
            <span className='card-item'>Docker</span>
          </div>
          </div>
        </Col>
        <Col className='mx-2 custom-col' style={{width: '250px',}}>
          <div className='custom-card' style={{width: '250px',}} >
          <Card.Title className='card-heading my-2 ' style={{ color: 'white', textAlign: 'left' }}>Miscellanous</Card.Title>
          <div className='card-items'>
         
            {/* <span style={{ margin:'7px',}} ></span>
            <span style={{ margin:'7px',}} ></span>
            */}
            <span className='card-item'>MySQL</span>
            <span className='card-item'>MS Office</span>
            <span className='card-item'>Sql Lite</span>
          </div>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default Projects;
