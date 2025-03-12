import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import zebra1 from './zebra1.jpg';
import zebra2 from './zebra2.jpg';
import zebra3 from './zebra3.jpg';

export default function Zebra() {
  return (
    < div >
      <h1>Zebra</h1>
      < Container >
        <Row>
          <Col xs={6} md={3} lg={1}>
            <Image className="img-fluid" src={zebra1} rounded />
          </Col>
          <Col xs={3} md={3} lg={10}>
            <Image className="img-fluid" src={zebra2} roundedCircle />
          </Col>
          <Col xs={3} md={6} lg={1}>
            <Image className="img-fluid" src={zebra3} thumbnail />
          </Col>
        </Row>
      </Container >
    </div >
  )

}
