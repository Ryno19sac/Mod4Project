import React from 'react'
// import Home from './Home'
// import { Route, Redirect } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'; 

export default function NavBar(props) {
    return (
        <>
  <Navbar fixed="top" bg="dark" variant="dark">
    <Navbar.Brand href="/profile">FlowBuilder</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/profile">Home</Nav.Link>
      <Nav.Link href="/diary">Diary</Nav.Link>
      <Nav.Link href='/login'>LogOut</Nav.Link>
    </Nav>
  </Navbar>
  
</>
    )
}