import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export class StudentModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    const { show, handleModalHide } = this.props;
    return (
      <>
        <Modal show={show} onHide={handleModalHide}>
          <Modal.Body></Modal.Body>
        </Modal>
      </>
    );
  }
}

export default StudentModal;
