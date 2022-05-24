import {} from "bootstrap";
import React, { Component } from "react";
import { CloseButton, Form, Modal, Button, Card } from "react-bootstrap";

export class StudentModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    const { show, handleModalHide, type } = this.props;

    if (type === "create") {
      return (
        <>
          <Modal show={show} onHide={handleModalHide}>
            <Modal.Body>
              <h3 className="d-flex justify-content-between">
                modal.title
                <CloseButton
                  style={{ fontSize: "medium", backgroundColor: "ButtonFace" }}
                  onClick={handleModalHide}
                ></CloseButton>
              </h3>
              <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cell </Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Button variant="primary">Add Now</Button>
              </Form.Group>
            </Modal.Body>
          </Modal>
        </>
      );
    } else if (type === "show") {
      return (
        <>
          <Modal show={show} onHide={handleModalHide}>
            <Modal.Body>
              <h3 className="d-flex justify-content-between">
                modal.title
                <CloseButton
                  style={{ fontSize: "medium", backgroundColor: "ButtonFace" }}
                  onClick={handleModalHide}
                ></CloseButton>
              </h3>
              <Card>
                <Card.Img src="https://cdn.powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"></Card.Img>
                <Card.Body>
                  <h3>Name : Ananda Kumar Saha</h3>
                  <h5>Cell : 01913918163</h5>
                </Card.Body>
              </Card>
            </Modal.Body>
          </Modal>
        </>
      );
    } else if (type === "edit") {
      <>
        <Modal show={show} onHide={handleModalHide}>
          <Modal.Body>
            <h3 className="d-flex justify-content-between">
              modal.title
              <CloseButton
                style={{ fontSize: "medium", backgroundColor: "ButtonFace" }}
                onClick={handleModalHide}
              ></CloseButton>
            </h3>
            <Form.Group className="mb-3">
              <Form.Label>Student Name</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cell </Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Photo</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Button variant="primary">Edit Data</Button>
            </Form.Group>
          </Modal.Body>
        </Modal>
      </>;
    }
  }
}

export default StudentModal;
