import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';



export default function Services({ history }, props) {


  return (
    <Container fluid>
      <Row className="my-2" >

        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="my-5">

          <h1>Our team are on hand to answer any questions </h1>
          <h2>you have about us and our technologies.</h2>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
      <Row >
        <Col xs={6} sm={6} md={6} lg={6} xl={6} className="my-5" style={{ textAlign: 'right', alignItems: 'right' }} >
          <img src={'/assets/img/contact.jpg'} style={{maxWidth:'50%'}} />

        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} className="my-5 p-5"  style={{ textAlign: 'left', alignItems: 'left' }} >
        <br/><br/><br/><br/><br/>
          <h2>Adress</h2>
          <h3>No.15,King St.</h3>
          <h2>E-Mail</h2>
          <h3>info@beautyclinic.studio</h3>
        </Col>
      </Row>
</div>
    </Container>


  )

}

