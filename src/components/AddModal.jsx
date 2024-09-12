
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function AddModal({handleClose, show,drName}) {

    //*Doctor taşıdık
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

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
        <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Patient Name:</Form.Label>
        <Form.Control type="text" placeholder="date" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date:</Form.Label>
        <Form.Control type="datetime-local" placeholder="Password" />
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