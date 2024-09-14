import React from 'react'
import Container from 'react-bootstrap/Container'
const AppointmentList = ({appointments}) => {
  return (
<Container className='p-2'>

<h3 className='display-6 mb-2' style={{color:"rbg(166,18,189)"}}>Appointment List</h3>

{appointments.map({id,patient,consulted,doctor,day})=>(
  <div>
    <Row>
      
    </Row>
  </div>
)}





</Container>
    

  )
}

export default AppointmentList