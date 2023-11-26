import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../App.css'

import NavScrollExample from '../Components/NavBar'
import { Model } from '../Components/Model'
import CustomizedTables from '../Components/Table'

function AllUrl() {
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
      <CustomizedTables/>
</Container>
    </div>
</div>
</NavScrollExample>




  </>
    
  )
}

export default AllUrl