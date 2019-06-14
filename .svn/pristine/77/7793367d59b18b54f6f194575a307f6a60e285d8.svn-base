import React, { Component } from 'react';
import './CourtCall.css';
import {Container, Button, Form, Row , Col, Card} from 'react-bootstrap';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CourtCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  createTable = () => {
      let table = []
      for (let i = 0; i < 20; i++) {
        table.push(<tr>
          <td>2017SC172144</td>
          <td>Mark Zackerberg</td>
          <td><Form.Group controlId="checkedIn">
                <Form.Check type="checkbox"  />
              </Form.Group></td>
          <td><Form.Group controlId="checkedIn">
                <Form.Check type="checkbox"  />
          </Form.Group></td>
        </tr>)
      }
      return table
    }
    render() {
        return (
          <Container className='courtCallContainer'>
            <Card className='courtCallCard'>
              <Card.Header>Court Call</Card.Header>
               <Card.Body>
               <Row className='row-1'>
               <Form>
               <Form.Row>
                  <Form.Group as={Col} controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Location" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="courtDate">
                    <Form.Label>Court Date</Form.Label>
                    <DatePicker className='form-control'
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                      />
                  </Form.Group>

                  <Form.Group as={Col} controlId="time">
                    <Form.Label>Time</Form.Label>
                    <DatePicker className='form-control'
                          // showTimeSelect
                          // dateFormat="Pp"
                        />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="caseNumber">
                    <Form.Label>Case Number</Form.Label>
                    <Form.Control type="text" placeholder="Case Number" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="checkInStatus">
                    <Form.Label>Check-In Status</Form.Label>
                    <Form.Control as="select" >
                      <option>Checked-In</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Button variant="secondary " type="submit">
                  Search
                </Button>
                </Form>
                </Row>
                <Row className='table-font-size'>
                  <Col className='col-table'>
                  <MDBTable scrollY striped bordered hover size="sm" responsive table-pdd>
                    <MDBTableHead  >
                      <tr>
                          <th>Case #</th>
                          <th>Name</th>
                          <th>Checked In</th>
                          <th>Called</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {this.createTable()}
                    </MDBTableBody>
                  </MDBTable> 
                  </Col>
                </Row> 
                <Row className='row-3'>
                  <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="btn-needrecall">
                      <Button variant="secondary btn-style tdd">Need Recall</Button>
                    </Form.Group>
                    <Form.Group as={Col} controlId="btn-makecall">
                      <Button variant="secondary btn-style">Make Call</Button>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="btn-needrecall">
                      <Button variant="info btn-style">&lt;Previoeus Case</Button>
                    </Form.Group>
                    <Form.Group as={Col} controlId="btn-makecall">
                      <Button variant="info btn-style ">Next Case&gt;</Button>
                    </Form.Group>
                  </Form.Row>
                  </Form>
                </Row>
              </Card.Body> 
            </Card>        
          </Container> 
        );
    }
}
export default CourtCall;