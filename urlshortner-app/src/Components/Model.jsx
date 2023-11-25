import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Long Url</Form.Label>
        <Form.Control type="text" placeholder="https://www.google.com/" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Title</Form.Label>
        <Form.Control  type="text" placeholder="title"/>
      </Form.Group>
    </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button>Create</Button>
        <Button onClick={props.onHide} variant='danger'>Close</Button>
        
      </Modal.Footer>
    </Modal>
  );
}

function Model() {
    const [modalShow, setModalShow] = useState(false);  
  return (
    <>
      <Button variant="success" onClick={() => setModalShow(true)}>
        Create Short Url
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export {Model}