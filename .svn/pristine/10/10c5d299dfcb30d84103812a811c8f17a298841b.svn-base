import React, { Component } from 'react'
import { Button, Modal, Row, Col, Form, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ContinuePopUp extends Component {

  defaultState = { 
    courtDate: new Date(),
    location: '',
    courtTime: new Date(),

    continueByCourt: false,
    continueByProsecution: false,
    continueByDefense: false,

    continueForStatus: false,
    continueForAttorney: false,
    continueForStatus: false,
    continueForConfSett: false,
    continueForPlea: false,
    continueForBenchTrial: false,
    continueForSentencing: false,
    continueForPayment: false
};

  constructor(props) {
    super(props);

    this.state = this.defaultState;

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleFormSubmit(evt) {
    evt.preventDefault();

    let continuelocation = this.state.location;
    let continueCourtDate = this.state.courtDate.toLocaleDateString();
    let continueCourtTime = this.state.courtTime.toLocaleTimeString();
    let continueByCourt = this.state.continueByCourt;
    let continueByProsecution = this.state.continueByProsecution;
    let continueByDefense = this.state.continueByDefense;

    let continueForStatus = this.state.continueForStatus;
    let continueForAttorney = this.state.continueForAttorney;
    let continueForConfSett = this.state.continueForConfSett;
    let continueForPlea = this.state.continueForPlea;
    let continueForBenchTrial = this.state.continueForBenchTrial;
    let continueForSentencing = this.state.continueForSentencing;
    let continueForPayment = this.state.continueForPayment;

    let data = {
      continuelocation, continueCourtDate, continueCourtTime,
      continueByCourt, continueByProsecution, continueByDefense,
      continueForStatus, continueForAttorney, continueForConfSett, continueForPlea,
      continueForBenchTrial, continueForSentencing, continueForPayment
    }

    this.props.handleStateChange(data);
    this.resetState();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleDateChange(date) {
    this.setState({
      courtDate: date
    });
  }

  handleTimeChange(date) {
    this.setState({
      courtTime: date
    });
  }

  handleClick(event) {
    if (event.target.name === 'court') 
      this.setState({ continueByCourt: true })
    
    if (event.target.name === 'prosecution') 
      this.setState({ continueByProsecution: true })    

    if (event.target.name === 'defense') 
      this.setState({ continueByDefense: true }) 



    if (event.target.name === 'status') 
      this.setState({ continueForStatus: true })

    if (event.target.name === 'attorney') 
      this.setState({ continueForAttorney: true })

    if (event.target.name === 'confSetting') 
      this.setState({ continueForConfSett: true })

    if (event.target.name === 'plea') 
      this.setState({ continueForPlea: true })

    if (event.target.name === 'benchTrial') 
      this.setState({ continueForBenchTrial: true })

    if (event.target.name === 'sentencing') 
      this.setState({ continueForSentencing: true })

    if (event.target.name === 'payment') 
      this.setState({ continueForPayment: true })

  }

  resetState = () => {
    this.setState(this.defaultState);
    this.props.onHide();
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Continued
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Continued To :</h6>
          <Row>
            <Col sm={4} md={2}>
              <Form.Group controlId="formGridLocation">
                <Form.Label>Location</Form.Label>
                <div>
                  <input className='form-control' type='text' name='location' placeholder="Court Room"
                    onChange={this.handleChange}></input>
                </div>
              </Form.Group>
            </Col>
            <Col sm={8} md={2}>
              <Form.Group controlId="formGridCourtDate">
                <Form.Label>Court Date</Form.Label><br></br>
                <DatePicker name='courtDate' placeholderText="MM/dd/yyyy" className='form-control' selected={this.state.courtDate}
                  onChange={this.handleDateChange} />
              </Form.Group>
            </Col>
            <Col sm={12} md={2}>
              <Form.Group controlId="formGridTime">
                <Form.Label>Time</Form.Label><br></br>
                <DatePicker name='courtTime' className='form-control' selected={this.state.courtTime} onChange={this.handleTimeChange}
                  showTimeSelect showTimeSelectOnly timeIntervals={30} dateFormat="h:mm aa" />
              </Form.Group>
            </Col>
            <Col sm={4} md={2}>
              <Form.Label>By:&nbsp;&nbsp;&nbsp;</Form.Label>
              <Button variant="outline-success" className={this.state.continueByCourt ? 'active' : ''} name='court'
                 data-key='1' onClick={this.handleClick}>Court</Button>
            </Col>
            <Col sm={4} md={2}><Button variant="outline-success" className={this.state.continueByProsecution ? 'active' : ''} name='prosecution'
              data-key='2' onClick={this.handleClick}>Prosecution</Button></Col>
            <Col sm={2} md={2}>
              <Button variant="outline-success" className={this.state.continueByDefense ? 'active' : ''} name='defense'
                data-key='3' onClick={this.handleClick}>Defense</Button>
            </Col>
          </Row>

          <Row>
            <Col md={2}>
              <Form.Label>For:&nbsp;&nbsp;&nbsp;</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col md={"auto"}>
              <Button variant="outline-success" className={this.state.continueForStatus ? 'active' : ''} name='status'
                onClick={this.handleClick}>Status</Button>
            </Col>
            <Col md={"auto"}>
              <Button variant="outline-success" className={this.state.continueForAttorney ? 'active' : ''} name='attorney'
                onClick={this.handleClick}>Attorney</Button>
            </Col>
            <Col md={"auto"}>
              <Button variant="outline-success" className={this.state.continueForConfSett ? 'active' : ''} name='confSetting'
                onClick={this.handleClick}>Conf/Setting</Button>
            </Col>
            <Col md={"auto"}>
              <Button variant="outline-success" className={this.state.continueForPlea ? 'active' : ''} name='plea'
                onClick={this.handleClick}>Plea</Button>
            </Col>
            <Col md={"auto"}>
              <Button variant="outline-success" className={this.state.continueForBenchTrial ? 'active' : ''} name='benchTrial'
                onClick={this.handleClick}>Bench Trial</Button>
            </Col>
          </Row>
          <Row className="row mt-3">
            <Col md={"auto"}>
              <Button variant="outline-success" className={this.state.continueForSentencing ? 'active' : ''} name='sentencing'
                onClick={this.handleClick}>Sentencing</Button>
            </Col>
            <Col md={"auto"}>
              <Button variant="outline-success" className={this.state.continueForPayment ? 'active' : ''} name='payment'
                onClick={this.handleClick}>Payment</Button>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleFormSubmit}>Ok</Button>
          <Button onClick={this.resetState}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ContinuePopUp