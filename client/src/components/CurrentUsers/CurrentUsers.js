import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import './style.css';

function CurrentUsers() {
    return (
  
  <div className="container">

<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Currently in the room:</Card.Title>
    <Card.Text>
      UserONE < br />
      UserTwo < br />
      UserThree < br />
    </Card.Text>
    <Button variant="primary">Chat</Button>
  </Card.Body>
</Card>

</div>
    )}
export default CurrentUsers;