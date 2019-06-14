import React from 'react';
import { Container,Row,Dropdown, Button,InputGroup,FormControl, Col, ButtonToolbar} from 'react-bootstrap';

function Kount(props) {
    return(
        <div>
            <p><b>COUNT<br/>
            Citation # {props.item.citationNo}</b></p>
            <p >{props.item.kountDescription}</p>
            <Row>
                <Col md={5}>
                    <Row>
                        <Col className="border" style={{minHeight:"125px", marginRight:"2px"}} >
                            <label>Pleas</label><br/>
                            <ButtonToolbar>
                                <Button className="" 
                                size="sm" block
                                variant={props.item.plea=="Guilty" ? "success" : "secondary"}
                                onClick={() => props.clickHandler(props.item.count, "plea", "Guilty")}>Guilty
                                </Button>
                                
                                <Button
                                size="sm" block
                                variant={props.item.plea=="Not Guilty" ? "success" : "secondary"}
                                onClick={() => props.clickHandler(props.item.count, "plea", "Not Guilty")}>Not Guilty
                                </Button>
                            </ButtonToolbar>
                        </Col>
                        <Col className="border" style={{minHeight:"125px",  marginRight:"2px"}}>
                            <label>Find</label><br/>
                            <ButtonToolbar>
                                <Button
                                size="sm" block
                                variant={props.item.find=="Guilty" ? "success" : "secondary"}
                                onClick={() => props.clickHandler(props.item.count, "find", "Guilty")}>Guilty
                                </Button>

                                <Button
                                size="sm" block
                                variant={props.item.find=="Not Guilty" ? "success" : "secondary"}
                                onClick={() => props.clickHandler(props.item.count, "find", "Not Guilty")}>Not Guilty
                                </Button>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} className="border">
                    <label>&nbsp;</label><br/>
                    <ButtonToolbar>
                        <Button 
                        className="m-right5" variant="secondary"
                        size="sm"
                        onClick={() => props.clickHandler(props.item.count, "find", "Not Guilty")}>Conviction&nbsp;
                        </Button>
                        
                        <Button 
                        className="m-left5" variant="secondary"
                        size="sm">Supervision&nbsp;
                        </Button><br/>

                        <Button 
                        className="m-top8" variant="secondary"
                        size="sm" block>Deffered Prosecution
                        </Button>
                    </ButtonToolbar>
                </Col>
                <Col md={3}>
                    <ButtonToolbar>
                        <Button
                        size="sm" 
                        variant="secondary" block>Amended Charge
                        </Button>

                        <Button
                        size="sm" 
                        variant="secondary" block>DISMISS/ NOLIFE
                        </Button>

                        <Button 
                        size="sm" 
                        variant="secondary" block>ACCESS FINES ON CASE
                        </Button>
                    </ButtonToolbar>
                </Col>
            </Row>
        </div>
    )
}

export default Kount