import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Card, Row, Col, Button} from 'react-bootstrap';
import App from '../App'
import CreateUser from './CreateUser';
import { Link } from 'react-router-dom'


class Login extends Component {
   
    state = {
        username: '',
        password: '',
        isLogin: false
    }

    componentDidMount(){
        localStorage.removeItem('token')
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
            .then(() => this.props.history.push('/'))
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleChangeCreate = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })

    }
    toggleLoginCreate = () => {
    this.setState({ isLogin: !this.state.isLogin })

    }
    render() {
        // const { isLogin } = this.state

        return (
            <div>
            <h1>FlowBuilder React</h1>

            <Card>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                <Form.Label>Please Login</Form.Label>
                <Form.Control name='username' 
                        id='username' 
                        value={this.state.username} 
                        onChange={this.handleChange} placeholder="Enter username" />
                <Form.Text onChange={this.handleChange}className="text-muted">
                  Welcome Back, lets FLOW
                </Form.Text>
              </Form.Group>
              <Form.Group >
                <Form.Control 
                        placeholder="Password" 
                        type='password'
                        id='password'
                        name='password'
                        value={this.state.password} 
                        onChange={this.handleChange}>

                </Form.Control>
            </Form.Group>
                    <Button variant='primary' type='submit' size='lg'>Login
                    </Button>
                </Form>
            <Link className="signUpLink" to={'/signup'}>New Here? Create User</Link>
            </Card>
                   
            
            </div>
        
        ) 
    }
}

export default Login;