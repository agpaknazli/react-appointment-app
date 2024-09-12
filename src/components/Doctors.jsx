import React from 'react';
import Container from 'react-bootstrap/Container';
import {doctorData} from "../helpers/data";
import { Col, Row } from 'react-bootstrap';

const Doctors = () => {
  return (
    <Container className='p-2'>


<h3 className='display-6 mb-3' style={{color:"yellow"}}>Our Doctors</h3>
<Row>
{
doctorData.map(({id,img,dep,name})=>{
return<Col key={id}>
<img src={img} alt="" />
<h5>{name}</h5>
<h6>{dep}</h6>
</Col>

}


)


}

</Row>

    </Container>
  )
}

export default Doctors