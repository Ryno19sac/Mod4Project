import React from 'react'
// import Home from './Home'
// import { Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Badge, Button} from 'react-bootstrap';


export default function PostureCard(props) {
    
    const handleClick = (event) => {
        props.addToFlow(props.posture)
    }
    return (
        <Card style={{ height: '18rem', width: '9rem', flexBasis: 'auto' }} className="overflow-auto shadow-sm bg-white rounded">

            <Card.Text id="postureName">{props.posture.name}</Card.Text>
            <Card.Img style={{maxHeight:'7rem', maxWidth:'7rem', borderStyle:'solid'}}variant='top' src={props.posture.image} alt="Yoga Posture"/>
            <Card.Body className='d-flex flex-column overflow-auto' style={{height: '3rem', margin: '0.3rem 0'}}>
                <Card.Text>{props.posture.description}</Card.Text> 
            </Card.Body>
            { (function () {
                if(props.enabled){
                    return <Button id="addToFlow"
                    style={{fontSize: '0.5rem'}}
                    onClick={handleClick}
                    className="mt-auto font-weight-bold"
                    variant="success"
                    disabled={!props.enabled}
                    block > ADD TO FLOW 
                </Button>;
               
                } else {
                    return <p id="breathAlert">Where is your breath?</p>;
                }
            })()}
        </Card>
    )
}