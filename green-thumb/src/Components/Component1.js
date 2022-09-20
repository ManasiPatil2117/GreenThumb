import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ReactRoundedImage from "react-rounded-image";
import Button from 'react-bootstrap/Button';
import pic1 from '../images/plant1.jpg'
import pic2 from '../images/plant2.jpg';
import pic3 from '../images/plant3.jpg';
import pic4 from '../images/plant4.jpg';
import pic5 from '../images/plant5.jpg';
import pic6 from '../images/plant6.jpg';
import '../Styles/index.css';

function Component1() {
  return (
    <Container className='hai'>
      <Row>
        <Col>
        <ReactRoundedImage
          image={pic1}
          roundedColor=" #00FF00"
          imageWidth="150"
          imageHeight="150"
          roundedSize="20"
          borderRadius="180"
          align="center"
        />
      <Card style={{ width: '10rem' }}><Button variant="outline-success" size='sm'><Card.Title>Swiss Cheese Plant</Card.Title></Button></Card>
        </Col>
        <Col>
        <ReactRoundedImage
          image={pic2}
          roundedColor="#00FF00"
          imageWidth="150"
          imageHeight="150"
          roundedSize="20"
          borderRadius="180"
        />
        <Card style={{ width: '10rem' }}><Button variant="outline-success"><Card.Title>Howea Belmoreana</Card.Title></Button></Card>
        </Col>
        <Col>
        <ReactRoundedImage
            image={pic3}
            roundedColor="#00FF00"
          imageWidth="150"
          imageHeight="150"
          roundedSize="20"
          borderRadius="180"
          />
        <Card style={{ width: '10rem' }}><Button variant="outline-success"><Card.Title>Ceratopteris Thalictroides</Card.Title></Button></Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <ReactRoundedImage
          image={pic4}
          roundedColor="#00FF00"
          imageWidth="150"
          imageHeight="150"
          roundedSize="20"
          borderRadius="180"
        />
        
        <Card style={{ width: '10rem' }}><Button variant="outline-success"><Card.Title>Sisal Plant</Card.Title></Button></Card>
        </Col>
        <Col>
        <ReactRoundedImage
          image={pic5}
          roundedColor="#00FF00"
          imageWidth="150"
          imageHeight="150"
          roundedSize="20"
          borderRadius="180"
        />
        <Card style={{ width: '10rem' }}><Button variant="outline-success"><Card.Title>Cape jasmine</Card.Title></Button></Card>
        </Col>
        <Col>
        <ReactRoundedImage
          image={pic6}
          roundedColor="#00FF00"
          imageWidth="150"
          imageHeight="150"
          roundedSize="20"
          borderRadius="180"
        />
          <Card style={{ width: '10rem' }}><Button variant="outline-success"><Card.Title>Laceleaf plant</Card.Title></Button></Card>
        </Col>
      </Row>
      

        
    </Container>
  );
}

export default Component1;