import React from 'react';
import {  Row, Col, Card, ListGroup  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import audio from '../static/audio.jpg';
import '../static/project.css';
import ecomerce from '../static/ecomerce.jpg'
import jobs from '../static/jobs.jpeg'
import crms from '../static/crms.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenusMars, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <div className='main-content '>
      <h3 className='m-2' style={{ color: 'white', textAlign: 'left' }}>Projects</h3>
      <Row className='flex-nowrap overflow-auto row no-scrollbar'>
        <Col className='ml-0 mx-2  mb-4'>
          <Card>
            <Card.Img variant='top' src={ecomerce} alt='ecomerce' />
            <Card.Body className='card-content overflow-auto'>
            <Card.Title className='card-heading my-2 ' style={{ color: 'black', textAlign: 'center' }}>E-Commerce app</Card.Title>
            Full stack e-commerce app with Python Django Rest Framework and React.js.Developed user authentication, product catalog, cart, and order management.Utilized RESTful API architecture for efficient data communication between the frontend and backend.Demonstrated proficiency in software development and database design, creating a responsive and user-friendly e-commerce solution.
            </Card.Body>
          </Card>
        </Col>
        <Col className='mx-2   mb-4'>
          <Card>
            <Card.Img variant='top' src={audio} alt='audio' />
            <Card.Body className='card-content overflow-auto'><Card.Title className='card-heading my-2 ' style={{ color: 'black', textAlign: 'center' }}>Audio surveillance system</Card.Title>
            Audio surveillance system is a deep learning model to analyze audio data and detect abnormal sound events.Enhanced a dataset of 600 audio files using rotation technique for diversity.Extracted Mel spectrograms and intensity vectors to capture essential audio characteristics, integrated within a CRNN architecture for robust pattern recognition.
            </Card.Body>
          </Card>
        </Col>
        <Col className='mx-2  mb-4'>
          <Card>
            <Card.Img variant='top' src={jobs} alt='jobs' />
            <Card.Body className='card-content overflow-auto'>
            <Card.Title className='card-heading' style={{ color: 'black', textAlign: 'center' }}>Eduspace</Card.Title>
                Eduspace is a robust and user-friendly online job portal exclusively for recent college graduates using Python Flask, MySQL, JavaScript, Html, and CSS, enabling efficient job searching, application submission, and employer management.
          
                
            </Card.Body>
          </Card>
        </Col>
        <Col className='mx-2  mb-4'>
          <Card>
            <Card.Img variant='top' src={crms} alt='crms' />
            <Card.Body className='card-content overflow-auto'>
            <Card.Title className='card-heading my-2 ' style={{ color: 'black', textAlign: 'center' }}>Campus Recruitment System</Card.Title>
            Built a robust web application, Campus Recruitment System, using Django, MySQL, JavaScript, Html, and Bootstrap.Implemented features including organizing campus drives, facilitating placement applications, and managing student profiles.
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
      <h5 className='m-2' style={{ color: 'white', textAlign: 'left' }}>What I Know</h5>
      <div className='col-skills flex-nowrap overflow-auto row no-scrollbar'>
        <Col className='mx-2  mt-4 custom-col' style={{width: '250px'}}>
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
        <Col className='mx-2  mt-4 custom-col' style={{width: '250px'}}>
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
        {/* <Col className='mx-2 custom-col' style={{width: '250px'}}>
          <div className='custom-card text-left'>
          <Card.Title className='card-heading my-2 ' style={{ color: 'white', textAlign: 'left' }}>ML</Card.Title>
          <div className='card-items'>
        
            <span className='card-item' >Keras</span>
            <span className='card-item' >Numpy</span>
            <span className='card-item'>Tensorflow</span>
            <span className='card-item'> Scikit Learn</span>
            
          </div>
          </div>
        </Col> */}
        <Col className='mx-2  mt-4 custom-col' style={{width: '250px'}}>
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
        <Col className='mx-2 mt-4 custom-col' style={{width: '250px',}}>
          <div className='custom-card' style={{width: '250px',}} >
          <Card.Title className='card-heading my-2 ' style={{ color: 'white', textAlign: 'left' }}>Miscellanous</Card.Title>
          <div className='card-items'>
         
            <span className='card-item' >Keras</span>
            <span className='card-item' >Numpy</span>
            <span className='card-item'>Tensorflow</span>
            <span className='card-item'> Scikit Learn</span>
            <span className='card-item'>MySQL</span>
            {/* <span className='card-item'>MS Office</span> */}
            <span className='card-item'>Sql Lite</span>
          </div>
          </div>
        </Col>
        <Col className='mx-2 custom-col' style={{ width: '300px' }}>
        <div className='custom-card-1 text-left'>
          <Card.Title className='card-heading mt-3 mx-3 ' style={{ color: 'white', textAlign: 'left' }}>More Projects</Card.Title>
          <ListGroup  variant='flush'>
            <ListGroup.Item style={{backgroundColor:' rgb(37, 32, 32)',color:'white', borderBottom:'1px solid'}}>
                <div className='mt-2' style={{ backgroundColor:' rgb(37, 32, 32)',color:'white' ,display:'flex',flexDirection:'row'}}>

                <FontAwesomeIcon icon={faVenusMars} className='mx-2'  />
                <h6  style={{ color: 'white', textAlign: 'left' }}>Gender Prediction</h6>
                </div>
                <a href="https://github.com/anugrahprathap/Gender-prediction-v1"  style={{backgroundColor:' rgb(37, 32, 32)',color:'white'}}  className='text-decoration-none'>
                <div className='mx-3' style={{display:'flex', flexDirection:'row',flexWrap:"wrap", color: 'white', textAlign: 'justify'}}>
                    Gender Prediction with OpenCV and TensorFlow
              </div>
             
       
              </a>
            </ListGroup.Item>

            <ListGroup.Item style={{backgroundColor:' rgb(37, 32, 32)',color:'white', borderBottom:'1px solid'}}>
                <div style={{ backgroundColor:' rgb(37, 32, 32)',color:'white' ,display:'flex',flexDirection:'row'}}>

                <FontAwesomeIcon icon={faUserDoctor} className='mx-2'  />
                    <h6  style={{ color: 'white', textAlign: 'left' }}>Doctor Appointment</h6>
                </div>
                <a href="https://github.com/anugrahprathap/DoctorAppointment"  style={{backgroundColor:' rgb(37, 32, 32)',color:'white'}}  className='text-decoration-none text-dark mt-0'>
            <div className='mx-3' style={{display:'flex', flexDirection:'row',flexWrap:"wrap",color: 'white', textAlign: 'justify' }}>DoctorAppointment App using Python Django and React Js
            </div>
              
              
       
              </a>
            </ListGroup.Item>

           
          </ListGroup>
        </div>
      </Col>
      </div>
      {/* <div className='card-more'>
        <h5 className='mt-4'>
            More Projects
        </h5>
        
            
      </div> */}
    </div>
  );
}

export default Projects;
