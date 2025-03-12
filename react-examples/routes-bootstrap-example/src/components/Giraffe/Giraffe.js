import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// Note: cannot traverse outside of /src folder for security reasons
// so doing "import giraffe1 from '../../../assets/giraffe1.jpg';" will not work!
import giraffe1 from '../../assets/giraffe1.jpg';
import giraffe2 from '../../assets/giraffe2.jpg';
import giraffe3 from '../../assets/giraffe3.jpg';

export default function Giraffe() {
  return (
    < div >
      <h1>Giraffe</h1>
      < Container >
        <Row>
          <Col xs={6} md={3} lg={1}>
            <Image className="img-fluid" src={giraffe1} rounded />
          </Col>
          <Col xs={3} md={3} lg={10}>
            <Image className="img-fluid" src={giraffe2} roundedCircle />
          </Col>
          <Col xs={3} md={6} lg={1}>
            <Image className="img-fluid" src={giraffe3} thumbnail />
          </Col>
        </Row>
      </Container >
    </div >
  )

}
