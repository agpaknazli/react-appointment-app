
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function AddModal({handleClose, show,drName, handleAdd}) {


// function addmodel({handleSubmit})


    //*Doctor taşıdık
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
const [name,setName] =useState("")
const [date, setDate] =useState("")
const handleSubmit=(e)=>{
  e.preventDefault();
  const newAppointment={
    id:new Date().getTime(),
    patient:name,
    day:date,
    consulted: false,
    doctor:drName,
  };
  handleAdd(newAppointment);
  handleClose();
}


console.log(name,date);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Patient Name:</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="date" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date:</Form.Label>
        <Form.Control type="datetime-local" placeholder="DATE" onChange={(e)=>setDate(e.target.value)} />
      </Form.Group>
      <div className='text-center  mb-3'>
     <Button type='submit' variant="success" className='me-2' >
            Save
          </Button>
          <Button  type="button" variant="danger" onClick={handleClose}>
           Close
          </Button>
          
          </div>
    </Form>

        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default AddModal;