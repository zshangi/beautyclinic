import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';



export default function Team({ history }, props) {


    return (
        <Container >
            <Row className="my-5" >


                <Col style={{ textAlign: 'left', alignItems: 'left' }}  xs={8} sm={8} md={8} lg={8} xl={8} >
                The Beauty Clinic is THE place to go for all your Botox and filler needs!!!!! I LOVE this new, beautiful and luxurious spa-like clinic! The staff is ...
                With more than 10 years of operation, Iranian Clinic is among the most modern cosmetic clinics in Tehran. It offers specialized services.
</Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} >
                    <img src={'/assets/img/team.jpg'}  className='team_img'/>

                </Col>
            </Row>

     


                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Row >
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <Image src={'/assets/img/team_2.jpg'} className='team_img' />
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <p className="titlegray">Zara Matthow</p>
                                    Founder, Beauty Clinic
                                    <hr style={{ margin: '0' }} />
                                    Heydar has more than 15 years of experience iBeauty Clinic.
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Row>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <Image src={'/assets/img/team_1.jpg'}  className='team_img'  />

                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <p className="titlegray">Maria Perry</p>
                                    Lead UX/Interaction Designer
                                    <hr style={{ margin: '0' }} />
                                    Farimah has more than 10 years of experience in Beauty Clinic .
                                </Col>
                            </Row>
                        </Col>

               
                    </Row>
            
        </Container>


    )

}

