import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import pic1 from './images/plant1.jpg';
import pic2 from './images/plant2.jpg';
import pic3 from './images/plant3.jpg';
import pic4 from './images/plant4.jpg';
import pic5 from './images/plant5.jpg';
import pic6 from './images/plant6.jpg';
import './index.css';
const myStyle= {
  width :'300px', height :'300px',
};

function plant() {
  return (
    <Container className='hai'>
      <Row>
        <Col sm>
        <img style={myStyle} src={pic1} className='img-fluid' alt='plant img'/>  
      <Row><Button variant="outline-success"><h4>Swiss Cheese Plant</h4></Button></Row>
        </Col>
        <Col sm>
        <img  style={myStyle} src={pic2} className='img-fluid' alt='plant2'/>
        <Row><Button variant="outline-success"><h4>Howea Belmoreana</h4></Button></Row>
        </Col>
        <Col sm>
        <img style={myStyle} src={pic3} className='img-fluid' alt='hello'/>
        <Row><Button variant="outline-success"><h4>Ceratopteris{'\n'}Thalictroides</h4></Button></Row>
        </Col>
      </Row>
      <Row>
        <Col  xs={3}>
        <img style={myStyle}  src={pic4} className='img-fluid' alt='plant img'/>
        <Row><Button variant="outline-success"><h4>Sisal Plant</h4></Button>{''}</Row>
        </Col>
        <Col  >
        <img style={myStyle} src={pic5} className='img-fluid' alt='plant2'/>
        <Row><Button variant="outline-success"><h4>Cape jasmine</h4></Button></Row>
        </Col>
        <Col  >
        <img style={myStyle} src={pic6} className='img-fluid' alt='hello'/>
          <Row><Button variant="outline-success"><h4>Laceleaf plant</h4></Button></Row>
        </Col>
      </Row>
      
    </Container>
  );
}

export default plant;