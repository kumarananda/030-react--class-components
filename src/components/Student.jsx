import React, { Component } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Table,
  Button,
  Alert,
  CloseButton,
} from "react-bootstrap";
import StudentModal from "./StudentModal";

export class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      alert: {
        status: false,
        msg: "",
        type: "",
      },
    };
  }

  render() {
    // desteskchring
    const { modal } = this.state;
    const { msg, type, status } = this.state.alert;

    const handleModalShow = () => {
      this.setState({
        ...this.state,
        modal: true,
      });
    };
    const handleModalHide = () => {
      this.setState({
        ...this.state,
        modal: false,
      });
    };
    // handle alert
    const handleAlertShow = () => {
      this.setState({
        ...this.state,
        alert: {
          msg: "This is a Alert",
          status: true,
          type: "danger",
        },
      });
    };
    const handleAlertHide = () => {
      this.setState({
        ...this.state,
        alert: {
          msg: "",
          status: false,
          type: "",
        },
      });
    };
    return (
      <>
        <Container>
          <Row className="justfiy-content-center my-5">
            <Col md={6}>
              <Button onClick={handleModalShow} variant="primary">
                Add new Student
              </Button>
              <StudentModal show={modal} handleModalHide={handleModalHide} />
              <br />
              <br />
              {status && (
                <Alert
                  className="d-flex justify-content-between"
                  variant={type}
                >
                  {msg} <CloseButton onClick={handleAlertHide}></CloseButton>
                </Alert>
              )}

              <Card>
                <Card.Body>
                  <Table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Cell</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Ananda Saha</td>
                        <td>01913918163</td>
                        <td>
                          <a
                            onClick={handleAlertShow}
                            className="btn btn-info btn-sm"
                            href="#"
                          >
                            View
                          </a>
                          &nbsp;
                          <a className="btn btn-warning btn-sm" href="#">
                            Edit
                          </a>{" "}
                          &nbsp;
                          <a className="btn btn-danger btn-sm" href="#">
                            Delete
                          </a>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Student;
