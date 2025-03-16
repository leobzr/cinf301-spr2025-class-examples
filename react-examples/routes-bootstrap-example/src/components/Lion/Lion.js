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
            <Image style={{ maxWidth: 200 }} src="https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?fm=jpg" rounded />
          </Col>
          <Col xs={3} md={3}>
            <Image style={{ maxWidth: 200 }} src="https://files.worldwildlife.org/wwfcmsprod/images/Lion_Kenya/hero_small/7seqacudmc_Medium_WW2116702.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={6}>
            <Image style={{ maxWidth: 200 }} src="https://safariavventura.com/wp-content/uploads/2018/02/leone-africano-2-750x500.jpg" thumbnail />
          </Col>
        </Row>
      </Container >
    </div >
  )

}
