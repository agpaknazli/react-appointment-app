import React from 'react';
import Container from 'react-bootstrap/Container';
import {doctorData} from "../helpers/data";
import { Col, Row } from 'react-bootstrap';
import AddModal from './AddModal';

const Doctors = () => {
  return (
    <Container className='p-2'>


<h3 className='display-6 mb-3' style={{color:"yellow"}}>Our Doctors</h3>
<Row>
{
doctorData.map(({id,img,dep,name})=>{
return<Col xs={6} md={4} ld={3} key={id}>
<img className='doctor-img img-thumbnail' src={img} alt="" />
<h5>{name}</h5>
<h6>{dep}</h6>
</Col>

}


)


}

<AddModal/>
</Row>

    </Container>
  )
}

export default Doctors