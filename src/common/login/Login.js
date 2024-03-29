import React,{Component} from 'react';
import './Login.css';
import {withRouter} from 'react-router-dom';
import { Container,Col,Row,Card,Form,Button } from 'react-bootstrap';


class Login extends Component{
  state={
    userName : '',
    password : '',
    loggedIn: false,
    incorrectCredentialErr:' '
  }

  changeUsername =(event)=>{
    this.setState({
      userName:event.target.value
    })
  }
  changePassword =(event)=>{
    this.setState({
      password:event.target.value
    })  
  }
  loginBtnAction=()=>{  
    if(this.state.userName === 'abc' && this.state.password === '123'){
      this.setState({ loggedIn : true}, ()=> this.props.history.push('/home'));
    }
    else{
      this.setState({
        incorrectCredentialErr:'Incorrect Credentials'
      })
    }
  } 

  render(){
    return (     
         <div className="Login">
              <Container>
              <Row>  
              <Col>
              <h1>TRAFFIC  COURT</h1>
              <Card className='logincard'>
                <Card.Header><h2>Login</h2></Card.Header>
                <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username </Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={this.changeUsername} />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={this.changePassword} />
                    <Form.Text className="text-error text-muted">
                      {this.state.incorrectCredentialErr}
                    </Form.Text>
                  </Form.Group>
                  
                  <Button  variant="secondary" onClick={this.loginBtnAction}>Login</Button>

                </Form>
                </Card.Body>
              </Card>
            </Col>
            </Row>
            </Container>
         </div>
    );
  }
}

export default withRouter(Login);