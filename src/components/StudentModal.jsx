import {} from "bootstrap";
import React, { Component } from "react";
import { CloseButton, Form, Modal, Button, Card } from "react-bootstrap";

export class StudentModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        name: "",
        cell: "",
        photo: "",
      },
    };
  }
  render() {
    // console.log(this.props);
    const { show, handleModalHide, type } = this.props;
    const { cell, name, photo } = this.state.inputs;
    console.log(this.state.inputs);

    if (type === "create") {
      return (
        <>
          <Modal show={show} onHide={handleModalHide}>
            <Modal.Body>
              <h3 className="d-flex justify-content-between">
                Add Student Data
                <CloseButton
                  style={{ fontSize: "medium", backgroundColor: "ButtonFace" }}
                  onClick={handleModalHide}
                ></CloseButton>
              </h3>
              <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      inputs: { ...this.state.inputs, name: e.target.value },
                    })
                  }
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cell </Form.Label>
                <Form.Control
                  value={cell}
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      inputs: { ...this.state.inputs, cell: e.target.value },
                    })
                  }
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="text" />
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
              {/* <h3 className="d-flex justify-content-between">
                <CloseButton
                  style={{ fontSize: "medium", backgroundColor: "ButtonFace" }}
                  onClick={handleModalHide}
                ></CloseButton>
              </h3> */}
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
      return (
        <>
          <Modal show={show} onHide={handleModalHide}>
            <Modal.Body>
              <h3 className="d-flex justify-content-between">
                Edit Data
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
        </>
      );
    } else if (type === "delete") {
      return (
        <>
          <Modal show={show} onHide={handleModalHide}>
            <Modal.Body>
              <h3 className="d-flex justify-content-between">
                Are You sure!
                <CloseButton
                  style={{ fontSize: "medium", backgroundColor: "ButtonFace" }}
                  onClick={handleModalHide}
                ></CloseButton>
              </h3>
              <Button variant="danger">Delete</Button> &nbsp;
              <Button variant="info">Cancle</Button>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  }
}

export default StudentModal;
