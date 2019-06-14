import React, { Component } from 'react';
import { Container,Row,Dropdown, Button,InputGroup,FormControl} from 'react-bootstrap';


function formatString(kountItems, caseInfoContinuedData) {
    var buff = ''
    kountItems.forEach(element => {
        buff = buff + element.kountDescription + '\n';
    });

    buff = buff + '\n' + caseInfoContinuedData.continuelocation
            + ' '  + caseInfoContinuedData.continueCourtDate
            + ' '  + caseInfoContinuedData.continueCourtTime;

    return buff;
}

class CaseJacket extends Component {
    constructor(props) {
        super(props);

        this.handleJacketValueChange = this.handleJacketValueChange.bind(this);

        this.state = {jacketValue: ''};
    }

    handleJacketValueChange(e) {
        this.setState({jacketValue: e.target.value});
    }

    render() {

        const jacketValue = formatString(this.props.kountItems, this.props.caseInfoContinuedData);

        return (
            <Container>
                <Row className="">
                    <InputGroup>
                        <FormControl as="textarea" aria-label="With textarea" rows={7} 
                            value={jacketValue} onChange={this.handleJacketValueChange}/>
                    </InputGroup>
                </Row>
            </Container>
        );
    }
}

export default CaseJacket;