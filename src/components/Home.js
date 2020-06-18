import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import PostureContainer from '../containers/PostureContainer';
import DiaryContainer from '../containers/DiaryContainer'
import FlowContainer from '../containers/FlowContainer'
import { Container } from 'react-bootstrap';

export default class Home extends Component {
        state = {
            postures: [],
            flow: [],
            diaryEntries: []
            
        }

        componentDidMount(){
            if(localStorage.token){
                fetch('http://localhost:3000/postures', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.token}`
                    }
                })
                .then(response => response.json())
                .then(postures => this.setState({ postures }))
        }
        
            if(localStorage.token){
                fetch('http://localhost:3000/diaries', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.token}`
                    }
                })
                .then(response => response.json())
                .then(response => console.log(response))
                .then(entries => this.setState({ diaryEntries: entries}))
        }
    
    
    }

    addToFlow =(posture, eventTargetId) => {
        console.log('adding posture', posture);
        if(!this.state.flow.find(p => p.id === posture.id))
            this.setState({flow: [...this.state.flow, posture]})
    }

    postureCompatible = (posture) => {
        // trivial case: no postures yet
        if(this.state.flow.length === 0 ){
            return true;
        }
        if(this.state.flow.length === 8){
            return false;
        }
        // just need to check previous posture for compatibility
        const priorPosture = this.state.flow[this.state.flow.length -1];
        // check to make sure breathing is opposite
        if(priorPosture.is_breathing_in === posture.is_breathing_in){
            return false;
        }
        // return true;
    
    // }
    //     levelCompatible =(posture) => {

            const numPostures = this.state.flow.length;
            
        if(numPostures === 0) {
            return posture.level === 1;
        } else if (numPostures === 1) {
            return posture.level === 1;
        } else if (numPostures === 2) {
            return posture.level === 2;
        } else if (numPostures === 3){
            return posture.level ===2
        } else if (numPostures === 4){
            return posture.level === 3
        } else if (numPostures === 5){
            return posture.level === 3
        } else if (numPostures === 6){
            return posture.level === 4
        } else if (numPostures === 7){
            return posture.level === 4
        } else {
            return false;
        }
    } 
        

    removeFromFlow = (posture) => {
        const newFlow = this.state.flow.filter(p => p.id !== posture.id) 
        this.setState({flow: newFlow})
    }
    
        render() {

            return (    
                <div>
                <Link  to='/login'>Logout</Link>
                <NavBar/>
                {/* <h1 id="mainTitle">FlowBuilder 
                    {/* {props.user.username ? props.user.username : "User!" } */}
                {/* </h1> */} */}
                
                <section id="diary">
                        {/* <DiaryContainer /> */}
                </section>
                    
                <section id="flowContainer">
                <FlowContainer flow={this.state.flow}removeFromFlow={this.removeFromFlow}/>
                </section>
                
                <section id="posture container">
                <PostureContainer addToFlow={this.addToFlow} postures={this.state.postures} postureCompatible={this.postureCompatible} levelCompatible={this.levelCompatible}/>
                <DiaryContainer entries={this.state.diaryEntries}/>
                </section>

                </div>
                
                
               
                
            )}
    ;
    }

