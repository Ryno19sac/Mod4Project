import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Card, Row, Col, Button} from 'react-bootstrap';
import App from '../App'
import { Link } from 'react-router-dom'


class CreateUser extends Component {
   
    state = {
        username: '',
        password: ''
    }

    
    handleSubmit = (event, props) => {
       event.preventDefault()
       this.props.createUser(this.state)
       .then(() => this.props.history.push('/login'))
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            
            <div>
            <h1>FlowBuilder React</h1>

            <Card>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                <Form.Label>Create User</Form.Label>
                <Form.Control name='username' 
                        id='createusername' 
                        value={this.state.username} 
                        onChange={this.handleChange}type="text" placeholder="Enter username" />
                <Form.Text onChange={this.handleChange}className="text-muted">
                  Sign Up to Flow!
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Control 
                        placeholder="Password" 
                        type='password'
                        id='createpassword'
                        name='password'
                        value={this.state.password} 
                        onChange={this.handleChange}>

                </Form.Control>
            </Form.Group>
             
                    <Button variant='primary' type='submit' size='lg'>Create User
                    </Button>
                </Form>
                <Link className="signUpLink" to={'/login'}>Back To Login</Link>
            </Card>
            </div>
                    
        )
    }
}                            
export default CreateUser;


        
        
    

