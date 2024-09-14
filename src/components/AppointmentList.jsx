import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdDelete } from "react-icons/md";

const AppointmentList = ({appointments,handleDelete}) => {
  return (
<Container className='p-2'>

<h3 className='display-6 mb-2' style={{color:"rbg(166,18,189)"}}>Appointment List</h3>

{appointments.map(({id,patient,consulted,doctor,day})=>(
  <div className={consulted ? "appointments consulted" :'appointments'}>
    <Row className='justify-content-between alings-items-center'>
      <Col md={6}>
      <h4>{patient}</h4>
      <h5>{doctor}</h5>
      </Col>
      <Col>
      <h5>Date: {new Date(day).toLocaleTimeString('de-DE')}</h5>
      <h4>
        Time: {new Date(day).toLocaleDateString('de-DE')}
      </h4>
      </Col>
      
      <Col className='text-end'>
      <MdDelete onClick={()=>handleDelete(id)} className='text-danger display-3 type="button"'/>
      </Col>
    </Row>
  </div>
))};





</Container>
    

  )
}

export default AppointmentList