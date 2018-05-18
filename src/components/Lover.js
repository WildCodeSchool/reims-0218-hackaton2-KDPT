import React from 'react'
import { ListGroupItem, Col, Row } from 'reactstrap'

const Lover = ({ name, image, hairColor, eyeColor }) => <ListGroupItem>

  <Row>
    <Col xs={3}>

    </Col>
    <Col xs={3}>
      <img className="img-fluid" alt={name} src={image} />
    </Col>
    <Col xs={3}>
      <h3>{name}</h3>
    </Col>
    <Col xs={3}>
      <p>{hairColor} </p>
    </Col>
    <Col xs={3}>
      <p>{eyeColor} </p>
    </Col>
  </Row>

</ListGroupItem>

export default Lover