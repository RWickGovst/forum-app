import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import './style.css';

function HelloBootstrap() {
  return (

<div className="container">
<Navbar bg="dark" variant="dark">
<Navbar sticky="top" />
    <Navbar.Brand href="#home">Forum</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Sign In</Nav.Link>
      <Nav.Link href="#pricing">Sign Up</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search Google" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  

</div>
  

  )}
      
  


export default HelloBootstrap;
