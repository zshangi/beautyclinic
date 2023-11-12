import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

export default function Services({ history }, props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container >
            <Row className="my-2" >


                <Col xs={12} sm={12} md={12} lg={12} xl={12}  >

                    <h1>Advanced Skin Treatments</h1>
                    <h2>We pride our selves on being skin experts, </h2>
                </Col>


            </Row>


            <Row>
                <Col xs={12} sm={12} md={3} lg={3} xl={3}  >
                    <Card style={{ margin:'3px' }}>
                        <Card.Img variant="top"  src={'/assets/img/service_1.jpg'}/>
                        <Card.Body>
                            <Card.Title> <h3>Microneedling</h3></Card.Title>
                            <Card.Text>
                                <span className='text'>
                            Microneedling is a cosmetic procedure that encourages collagen production using tiny,
                             sterilized needles.
                              
</span>

                            </Card.Text>
                            <Button variant="outline-success" onClick={handleShow}>Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3}  >
                <Card style={{ margin:'3px' }}>
                        <Card.Img variant="top"  src={'/assets/img/service_2.jpg'}/>
                        <Card.Body>
                            <Card.Title><h3>Botox Injection</h3></Card.Title>
                            <Card.Text>
                               <span className='text'>Some quick example text to build on the card title and make up the
                                bulk of the card's content.</span> 
                            </Card.Text>
                            <Button variant="outline-success">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3}  >
                <Card style={{ margin:'3px' }}>
                        <Card.Img variant="top"  src={'/assets/img/service_3.jpg'}/>
                        <Card.Body>
                            <Card.Title><h3>Lip Filler</h3></Card.Title>
                            <Card.Text>
                                <span className='text'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.</span>
                            </Card.Text>
                            <Button variant="outline-success">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3}  >
                <Card style={{ margin:'3px' }}>
                        <Card.Img variant="top"  src={'/assets/img/service_4.jpg'}/>
                        <Card.Body>
                            <Card.Title><h3>Hair mesotherapy</h3></Card.Title>
                            <Card.Text>
                                <span className='text'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.</span>
                            </Card.Text>
                            <Button variant="outline-success">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="my-2" xs={12} sm={12} md={12} lg={12} xl={12}  >
                <Card >
                        <Card.Img variant="top"  src={'/assets/img/service_5.jpg'}/>
       
                    </Card>
                </Col>
            </Row>




            <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Microneedling</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h1>Fast facts about microneedling</h1>
            <h2>about</h2>
            <Row>
                <Col xs={12} sm={12} md={9} lg={9} xl={9}  >
                <ul className='text'>
                <li>Microneedling is a cosmetic procedure that uses small, sterilized needles to prick the skin.
                    <li>This treatment aims to generate new collagen and skin tissue to smooth, firm, and tone skin.
</li>
<li>Microneedling is mostly used on the face and may reduceTrusted Source the appearance of acne, scars, dark spots, wrinkles, and large pores.</li>
</li>
            </ul>
                </Col>
                <Col className="text-center" xs={12} sm={12} md={3} lg={3} xl={3}  >
                <img style={{maxWidth:'60%'}} src={'/assets/img/right_service.jpg'}  />

                </Col>
            </Row>
           

        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </Container>


    )

}

