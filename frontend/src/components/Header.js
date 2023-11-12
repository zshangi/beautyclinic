import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';



function Header( props )
{


    return (
        <Container fluid>
        <Row className="my-2" style={{height:'100px'}}>
    
        <Col  xs={12} sm={12} md={12} lg={12} xl={12} className="p-1">
      
         <a href="/"> <img src={'/assets/img/logo.png'} width="100px" /></a> 
    
        </Col>

        <Col  xs={12} sm={12} md={12} lg={12} xl={12} className="p-1">
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="nav_header" href="/services" >Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            |
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/team" className="nav_header"  eventKey="link-2">About/Team</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            |
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="nav_header"  href="/contact">Contact</Nav.Link>
        </Nav.Item>

      </Nav>
        </Col>
            </Row>
            </Container>
    )

}

export default Header;
