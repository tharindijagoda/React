import React, { Component } from 'react';
import { Container,Row,Dropdown, Button,InputGroup,FormControl} from 'react-bootstrap';

class AdditionalAndJudgesNotes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row className="">
                    <InputGroup>
                        <FormControl as="textarea" aria-label="With textarea" rows={7} />
                    </InputGroup>
                </Row>
            </Container>
        );
    }
}

export default AdditionalAndJudgesNotes;