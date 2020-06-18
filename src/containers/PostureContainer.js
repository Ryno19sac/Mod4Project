import React from 'react'
import PostureCard from '../components/PostureCard'
// import Home from './Home'
// import { Route, Redirect } from 'react-router-dom'
import { Container, Row, CardDeck} from 'react-bootstrap';


export default function PostureContainer(props) {
    const makePostures = props.postures.map(posture => {
        return <PostureCard posture={posture} key={posture.id} addToFlow={props.addToFlow} enabled={props.postureCompatible(posture)}  />
    })
    return (
        <Container>
            <Row>
            
                    <CardDeck>{makePostures}</CardDeck> 
                
            </Row>
        
        </Container>
    )
}