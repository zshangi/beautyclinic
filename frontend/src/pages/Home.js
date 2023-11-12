import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';



export default function Home({ history }, props) {


  return (
    <Container class="content"   >

      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>

      <Carousel>
      <Carousel.Item>
      <img src={'/assets/img/main_photo.jpg'} className='main_img'  />

        <Carousel.Caption>
          <h3>Be Confidence</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={'/assets/img/main_photo_1.jpg'} className='main_img' />
        <Carousel.Caption>
          <h3>We try to do our best</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>      </div>
    </Container>


  )

}

