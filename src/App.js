import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import {Route, Switch, Redirect} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col} from 'react-bootstrap';
import CreateUser from './components/CreateUser'
import DiaryContainer from './containers/DiaryContainer'

class App extends Component  {

  state = {
    user: {}
  }

  componentDidMount(){
    if(localStorage.token){
      fetch('http://localhost:3000/profile' , {
        method: 'GET',
        headers:{
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(response => response.json())
      .then(result => this.setState({user: result.user}))
    }
  }

  login = (userInput) => {
    return fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify({user: userInput})
    })
    .then(response => response.json())
    .then(result => { 
      localStorage.setItem('token', result.jwt) 
      this.setState({user: result.user})
    })
  }

  createUser = (userInput) => {
    return fetch('http://localhost:3000/users', {
          method: "POST",
          headers: {
              'content-type': 'application/json'
              
          },
          body: JSON.stringify({user: userInput})
      })
      .then(response => response.json())
      .then(result => { 
      localStorage.setItem('token', result.jwt) 
      this.setState({user: result.user})
    })
  }
  
  
  render(){
    return (
      <div className="App">
        <Switch>
          <PrivateRoute exact path='/' user={this.state.user} />
          <Route 
            path='/login' 
            render={(props) => <Login {...props} 
            login={this.login}/>}/>
          <Route 
            path='/signup' 
            render={(props) => <CreateUser {...props} 
            createUser={this.createUser}/>}/>
          <Route
            path='/diary'
            render={(props) => <DiaryContainer {...props}
            login={this.login}/>}/>
          <Route render={() => <Redirect to='/'/>} />
          <CreateUser createUser={this.createUser}></CreateUser>
        </Switch>
    </div>
    );
  }
}

export default App;
