import React, { useState } from 'react'
import '../App.css'

import NavScrollExample from './NavBar'
import { Model } from './Model'
import { Col, Container, Row } from 'react-bootstrap'

function Home() {
 

  return (
  

<>

<NavScrollExample >
<div className='home container '>
    <div className='left-content '>
     <div className='container left-content-items'>
  
    <Model/>
     </div>
        
    </div>
    <div className='right-content'>
    <Container className='mt-5 border border-black h-75'>
    <Row><h2>Dashboard</h2></Row>
      <Row>
        <Col><h3>today</h3></Col>
        <Col><h3>Month</h3></Col>
      </Row>
      <Row>
      <Col>today</Col>
        <Col>Month</Col>

      </Row>
</Container>
    </div>
</div>
</NavScrollExample>
</>
   
 
  )
}

export default Home