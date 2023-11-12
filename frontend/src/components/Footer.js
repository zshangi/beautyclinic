import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';




function Footer(props) {


    return (
        <Container >
            <Row className="my-2" style={{ bottom: '0', alignItems: 'left' }} >

    
                        <Col style={{ textAlign: 'left', alignItems: 'left' }} xs={12} sm={12} md={12} lg={12} xl={12}>
                            <hr className="my-2"></hr>
                            <Nav activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link className="nav_footer" href="/" >Copyright © 2023 Beauty Clinic. All rights reserved.</Nav.Link>
                                </Nav.Item>
                               
                                <Nav.Item>
                                    <Nav.Link href="/" className="nav_footer" eventKey="link-1">Privacy Policy</Nav.Link>
                                </Nav.Item>
                                <span className="nav_footer my-2">|</span>
                                <Nav.Item>
                                    <Nav.Link className="nav_footer" eventKey="link-2">Terms of use</Nav.Link>
                                </Nav.Item>
                                <span className="nav_footer my-2">|</span>
                                <Nav.Item>
                                    <Nav.Link className="nav_footer" eventKey="link-2">Legal</Nav.Link>
                                </Nav.Item>
                                <span className="nav_footer my-2">|</span>
                                <Nav.Item>
                                    <Nav.Link className="nav_footer" eventKey="link-2">Site Map</Nav.Link>
                                </Nav.Item>
                            </Nav>

                        </Col>
                    </Row>

            
        </Container>
    )

}

export default Footer;
