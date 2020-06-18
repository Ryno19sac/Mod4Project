import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar'
import DiaryEntry from '../components/DiaryEntry'
import PostureContainer from '../containers/PostureContainer';
import FlowContainer from '../containers/FlowContainer'
import { Container, Card, Form, Button } from 'react-bootstrap';

    class DiaryContainer extends Component {

        state= {
            diaryEntry: ''
        }
        
        // const makeEntry = props.entries.map(entry => {
        //     return <DiaryEntry entries={entry} key={entry.id}   />
        // })

        // handleSubmit = (event) => {
        //     event.preventDefault()
        //     this.props.
        // }

        handleChange = (event) => {
            const {name, value} = event.target
            this.setState({
                [name]: value
            })
        }
        render(){

            return (
                <>
                <Link  to='/login'>Logout</Link>
                <NavBar/>
                <Form id='diaryEntry' onSubmit={this.handleSubmit}>
                    <Form.Group >
                        <Form.Label></Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="How was your flow?"
                            value={this.state.diaryEntry}
                            onChange={this.handleChange} />
                        <Form.Text onChange={this.handleChange} className="text-muted">
                        "ommmmmmmmmm"
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Make Entry
                    </Button>
                </Form>
                    <Card>
                    <Card.Body style={{fontSize:'2rem'}}>"I need more down dog in my life"</Card.Body>
                    <Button variant="warning" type="delete"></Button>
                    </Card>
                </>
            )
        }
    }
    export default DiaryContainer
        