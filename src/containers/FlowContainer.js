import React from 'react'
// import Home from './Home'
// import { Route, Redirect } from 'react-router-dom'
import { Container, CardDeck, Row } from 'react-bootstrap';
import PostureCard from '../components/PostureCard'

export default function FlowContainer(props) {
    const newFlow = props.flow.map(posture => {
        return <PostureCard posture={posture} postureImage={posture.image} key={posture.id} removeFromFlow={props.removeFromFlow}></PostureCard>
    });
    return (
        <Container id="flowContainer">
        
        <Row>
                <CardDeck style={{display: 'flex', flexDirection: 'row', marginBottom: '15px'}}>{newFlow}</CardDeck> 
        </Row>
    
    </Container>
        
    )
}