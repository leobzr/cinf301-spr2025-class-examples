import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Lion() {
  return (
    < div >
      <h1>Lions</h1>
      < Container >
        <Row>
          <Col xs={3} md={3}>
            <Image style={{ maxWidth: 200 }} src="https://animalia-life.com/data_images/lion/lion1.jpg" rounded />
          </Col>
          <Col xs={3} md={3}>
            <Image style={{ maxWidth: 200 }} src="https://animalia-life.com/data_images/lion/lion2.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={6}>
            <Image style={{ maxWidth: 200 }} src="https://animalia-life.com/data_images/lion/lion3.webp" thumbnail />
          </Col>
        </Row>
      </Container >
    </div >
  )

}
