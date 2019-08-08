import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import './style.css';

function CurrentUsers() {
  return (


<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Current Users</Card.Title>
    <Card.Text>
      UserOne < br />
      UserTwo < br />
      UserThree < br />
    </Card.Text>
    <Button variant="primary">Chat</Button>
  </Card.Body>
</Card>

  )}
  export default CurrentUsers;