import React, { Component } from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import KountInfo from './KountInfo';
import ContinuePopUp from './ContinuePopUp';
import AdditionalAndJudgesNotes from "./AdditionalAndJudgesNotes";
import CaseJacket from "./CaseJacket";

class CaseInfo  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            caseInfoContinued: {},
            kountsList: [
                {   
                    "count": 1,
                    "citationNo": 111111,
                    "kountDescription": "(1) class (P) SPEEDING OVER STATUTORY LIMIT 1-10",
                    "plea": "",
                    "find": ""
                },
                {   
                    "count": 2,
                    "citationNo": 2222222,
                    "kountDescription": "FAIL TO GIVE AID OR INFORMATION IN ACCIDENT INVOLVING DEATH OR PERSONAL INJURY",
                    "plea": "",
                    "find": ""
                },
                {   
                    "count": 3,
                    "citationNo": 3333333,
                    "kountDescription": "DRIVER FAIL TO SECURE SEATBELT FOR CHILD 8<16",
                    "plea": "",
                    "find": ""
                }
            ]
        }

        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleStateChange(data) {
        console.log(data);
        this.setState({
            caseInfoContinued: data
        })
    }

    handleClick(id, category, selected){
        this.setState(prevState => {
            const newArr = []
            prevState.kountsList.forEach(element => {
                if(element.count == id){
                    element[category] = selected
                }
                newArr.push(element)
            });
            return {kountsList:newArr}
        })
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        const kountInfoView = <KountInfo item={this.state.kountsList} clickHandler={this.handleClick}/>

        const caseInfoBottomContainer = {
            height:"300px",
            overflowY:"auto", 
            padding:"30px", 
            marginLeft:"-40px"
        }

        return (
            <Container> 
            <Row>
            <label><b>Case Information : </b></label>
            <h5> VILLAGE OF LISLE VS MICHAL CLERK</h5>
            </Row>

            <Row>
            <label><b>Arresting Agency : </b></label>
            <b>LI</b>
            </Row>

            <Row>
            <label><b>Officer : </b></label>
            <b>Smith, #425</b>
            </Row>

            <Row>
            <Button variant="secondary" onClick={() => this.setState({ modalShow: true })}> CONTINUE </Button>
                <Button variant="secondary"> DISMISS ALL- No complaining </Button>
                <Button variant="secondary"> VACATE PRIOR </Button>
                <Button variant="secondary"> STRIKE FUTURE DATES (X) </Button>
                <Button variant="secondary"> EX-PARTE </Button>
                <Button variant="secondary"> WARRANT </Button>
            </Row>
            
            <Row>
            <Button variant="light"> Private Attorney Present </Button>
                <Button variant="light"> Public defender Present </Button>
                <Button variant="light"> By Agreement </Button>

            </Row>
            
            {kountInfoView}

            <br></br>

            {this.state.aString}

            <div className="border" style={caseInfoBottomContainer}>
                <Row className="">
                    <Col sm="5" className="border">
                        <fieldset>
                            <legend className="legendTitle">Additional Orders</legend>
                            <AdditionalAndJudgesNotes></AdditionalAndJudgesNotes>
                        </fieldset>
                    </Col>
                    <Col sm="7" className="border">
                        <fieldset>
                            <legend className="legendTitle">Case Jacket</legend>
                            <CaseJacket kountItems={this.state.kountsList} caseInfoContinuedData={this.state.caseInfoContinued} />
                        </fieldset>
                    </Col>
                </Row>
            </div>

            <br></br>

            <Row>
                <Button variant="danger">RESET</Button>
                <Button variant="secondary">Call list for Orders</Button>
                <Button variant="secondary">Case history</Button>

                <Button variant="secondary">Preview</Button>
                <Button variant="success">SIGN</Button>
            </Row>

            <ContinuePopUp show={this.state.modalShow} onHide={modalClose}
                    handleStateChange={this.handleStateChange} />
            </Container>

        );
    }
}

export default CaseInfo;