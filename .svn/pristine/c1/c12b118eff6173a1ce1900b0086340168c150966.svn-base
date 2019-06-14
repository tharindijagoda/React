import React, { Component } from 'react';
import Kount from './Kount'
import { Container,Row,Dropdown, Button,InputGroup,FormControl} from 'react-bootstrap';

class KountInfo extends Component {
    constructor(props) {
        super(props);

    }
   

    render() {
        const kountContainer = {
            maxHeight:"300px", 
            width:"700px", 
            overflowY:"auto", 
            padding:"20px", 
            marginLeft:"-40px"
        }

        const kountViews = this.props.item.map(e => <Kount key={e.count} item={e} 
             clickHandler={this.props.clickHandler}/>)

        return (
            <Container className="border" style={kountContainer}>
                {kountViews}
            </Container>
        )
    }
}

export default KountInfo